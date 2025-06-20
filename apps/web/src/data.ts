import { InfoOutlined, HelpOutline } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { IHeaderIcon, HeaderIconType } from "@repo/ui";

export const iconData: Array<IHeaderIcon> = [
  {
    svgIcon: InfoOutlined,
    alt: "Manual",
    tooltiptext: "Manual",
    isShown: true,
    type: HeaderIconType.LINK,
    url: "http://www.google.com",
  },
  {
    svgIcon: HelpOutline,
    alt: "QnA",
    tooltiptext: "QnA",
    isShown: true,
    type: HeaderIconType.LINK,
    url: "/qna",
  },
];

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
