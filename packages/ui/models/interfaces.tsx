import { SvgIconComponent, THeaderIconType } from "./types";

/* Header */
export interface IHeaderIcon {
  /** The SVG icon component to display */
  svgIcon: React.ComponentType<SvgIconComponent>;

  /** Alternative text for the icon (for accessibility) */
  alt: string;

  /** Tooltip text shown on hover */
  tooltiptext: string;

  /** Whether the icon is visible */
  isShown: boolean;

  /** The type/category of the header icon */
  type: THeaderIconType;

  /** The language type of the service.
   * This is used in Header version 1.0
   */
  badgeContent?: string | undefined;

  /** The URL to open when the icon is clicked (optional)
   * if type is 'link', this should be provided
   * if it only has a path, it will be treated as an internal route
   * @example "https://example.com or /admin-list"
   */
  url?: string | undefined;

  /** Callback function when the icon is clicked (optional) */
  onClick?: () => void;
}
