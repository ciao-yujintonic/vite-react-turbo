import { HeaderIconType } from "@/models/consts";
import { IHeaderIcon } from "@/models/interfaces";
import { Badge, IconButton, Tooltip } from "@mui/material";

type Props = {
  icon: IHeaderIcon;
};

export default function HeaderIcon({ icon }: Props) {
  const handleOpenUrl = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleClick = () => {
    if (icon.onClick) {
      icon.onClick();
    }

    switch (icon.type) {
      case HeaderIconType.LINK:
        if (icon.url) {
          handleOpenUrl(icon.url);
        }
        break;
      case HeaderIconType.DROPDOWN:
        //TODO: Implement dropdown logic
        break;
      case HeaderIconType.USER:
        //TODO: Implement user profile logic
        break;
      default:
        console.warn("Unhandled icon type:", icon.type);
        return;
    }
  };

  return (
    <Tooltip title={icon.tooltiptext} key={icon.alt} arrow>
      <IconButton
        onClick={() => handleClick()}
        sx={{ padding: "4px" }}
        aria-labelledby={icon.alt}
      >
        {icon.badgeContent ? (
          <Badge
            badgeContent={icon.badgeContent}
            color="primary"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={{ textTransform: "uppercase" }}
          >
            {icon.svgIcon}
          </Badge>
        ) : (
          icon.svgIcon
        )}
      </IconButton>
    </Tooltip>
  );
}
