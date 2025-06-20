import React from "react";
import { IHeaderIcon } from "@/models/interfaces";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  icon: IHeaderIcon;
};

export default function HeaderIconLink({ icon }: Props) {
  const navigate = useNavigate();

  const handleOpenUrl = (url: string) => {
    if (url && url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
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
            {React.createElement(icon.svgIcon)}
          </Badge>
        ) : (
          React.createElement(icon.svgIcon)
        )}
      </IconButton>
    </Tooltip>
  );
}
