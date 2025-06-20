import { HeaderIconType } from "@/models/consts";
import { IHeaderIcon } from "@/models/interfaces";
import { Stack } from "@mui/material";
import HeaderIconLink from "./HeaderIconLink";

type Props = {
  iconData: Array<IHeaderIcon>;
};

export function HeaderActionMenus({ iconData }: Props) {
  return (
    <Stack direction="row">
      {iconData.map((icon: IHeaderIcon, index) => {
        switch (icon.type) {
          case HeaderIconType.LINK:
            return <HeaderIconLink key={icon.alt} icon={icon} />;
        }
        <div></div>;
      })}
    </Stack>
  );
}

export default HeaderActionMenus;
