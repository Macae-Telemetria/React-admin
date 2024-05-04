import { StylesConfig } from "react-select";

export const defaultStyle: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    paddingLeft: 26,
    height: "46px",
    borderRadius: 12,
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,

    fontSize: 12,
  }),
  menuPortal: (baseStyles) => ({
    ...baseStyles,

    fontSize: 12,
    Index: 9999,
  }),
};
