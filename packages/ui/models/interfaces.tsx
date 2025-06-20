import { SvgIconComponent, THeaderIconType } from "./types";

/* Header */
export interface IHeaderIcon {
  svgIcon: SvgIconComponent;
  alt: string;
  tooltiptext: string;
  isShown: boolean;
  type: THeaderIconType;
  onClick?: () => void;
}
