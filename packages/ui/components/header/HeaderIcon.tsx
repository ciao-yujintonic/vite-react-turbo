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

    if (icon.url) {
      handleOpenUrl(icon.url);
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
