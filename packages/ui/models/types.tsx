import { SvgIcon } from "@mui/material";
import { HeaderIconType } from "./consts";

/* Mui */
export type SvgIconComponent = typeof SvgIcon;

/* Header */
export type THeaderIconType =
  (typeof HeaderIconType)[keyof typeof HeaderIconType];
