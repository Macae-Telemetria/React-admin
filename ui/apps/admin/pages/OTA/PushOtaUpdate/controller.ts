import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useLoadSoftwareReleases } from "@ui/shared/hooks/useLoadSoftwareReleases";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  PushOtaUpdateSchema,
  PushOtaUpdateInputs,
  INTIAL_VALUES,
} from "./schema";
import { useLoadStations } from "@ui/shared/hooks/useLoadStations";
import { ComboOption } from "@ui/shared/components/controls/inputs/ComboBox";
import { MakeSoftwareReleaseIntegrationService } from "@ui/shared/data/factory";
import { PAGES_MANIFEST } from "../..";

export const usePushOtaUpdateController = () => {
  const softwareReleaseIntegrationService = useMemo(
    () => MakeSoftwareReleaseIntegrationService(),
    []
  );
  const navigate = useNavigate();
  const { softwareReleases, isLoading: isLoadingSoftwares } = useLoadSoftwareReleases({});
  const { stations, isLoading: isLoadingStation } = useLoadStations({});

  const isLoading = isLoadingStation || isLoadingSoftwares;
  const [ isPushing, setIsPushing ] = useState(false);
  const stationOptions = useMemo(() => {
    return (stations ?? []).map((station) => {
      return { value: station.id, label: station.description };
    });
  }, [stations]);

  const softwareReleaseOptions = useMemo(() => {
    return (softwareReleases ?? []).map((software) => {
      return {
        value: software.version,
        label: `${software.version} | ${software.title}`,
      };
    });
  }, [softwareReleases]);

  const { handleSubmit, formState, setValue, watch } =
    useForm<PushOtaUpdateInputs>({
      defaultValues: INTIAL_VALUES,
      resolver: yupResolver(PushOtaUpdateSchema) as any,
    });

  const values = watch();

  const handleSoftwareVersionChange = (value: ComboOption) => {
    setValue("version", value);
  };

  const handleStationChange = (value: ComboOption) => {
    setValue("station", value);
  };

  const onSubmit = async (data: PushOtaUpdateInputs) => {
    try{
      setIsPushing(true);
      await softwareReleaseIntegrationService.pushOtaUpdate({
        stationId: Number(data.station.value),
        version: data.version.value,
      });
      navigate(`${PAGES_MANIFEST.Ota.path}`);
    } catch(error){
      alert(
        "Não foi possível prosseguir. Verifique se já não existe uma integração em progresso. Cancele para iniciar uma nova."
      );
    } finally {
      setIsPushing(false);
    }
  };

  return {
    handleSubmit,
    softwareReleaseOptions,
    stationOptions,
    onSubmit,
    formState,
    isLoading: isLoading || isPushing,
    values,
    handleSoftwareVersionChange,
    handleStationChange
  };
};
