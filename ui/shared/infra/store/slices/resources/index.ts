// resourcesSlice.js

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SoftwareRelease } from "@ui/shared/domain/entities/SoftwareRelease";

export interface ResourcesState {
  softwareReleases: SoftwareRelease[];
}

const initialState: ResourcesState = {
  softwareReleases: [],
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    setSoftwareReleases: (state, action: PayloadAction<SoftwareRelease[]>) => {
      state.softwareReleases = action.payload;
    },
    clear: () => ({ ...initialState }),
  },
});

export const { actions } = resourcesSlice;


export default resourcesSlice.reducer;
