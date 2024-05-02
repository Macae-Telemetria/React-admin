import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useAuthentication } from "@ui/apps/admin/contexts/Authentication";
import ImagePlaceHolder from "@ui/assets/imgs/user.webp"
const options = ["Sair"];

export interface UserOptionsProps {
  userInfo: {
    name: string;
    avatar?: string;
  };
}

export const UserOptions: React.FunctionComponent<UserOptionsProps> = (
  props
) => {
  const { userInfo } = props;

  const { pugeUser } = useAuthentication();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const renderItems = useMemo(() => {
    return (
      <div className="tool-tip-container">
        {/* <header>
          <small>Selecione a cor</small>
        </header>
        <nav>
          {options.map((c) => {
            return (
              <span onClick={() => null} className="color-picker-option"></span>
            );
          })}
        </nav> */}
      </div>
    );
  }, [options]);

  return (
    <div className="user-options" onClick={() => pugeUser()}>
      <div className="user-options-container">
        <img src={ImagePlaceHolder} />
        <span> Sair {/* {userInfo.name} */} </span>
      </div>
    </div>
  );
};

export default UserOptions;
