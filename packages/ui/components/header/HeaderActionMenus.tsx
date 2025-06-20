import { HeaderIconType } from "@/models/consts";
import { IHeaderIcon } from "@/models/interfaces";
import { Stack } from "@mui/material";

type Props = {
  iconData: Array<IHeaderIcon>;
};
export default function HeaderActionMenus({ iconData }: Props) {
  return (
    <Stack direction="row">
      {iconData.map((icon: IHeaderIcon, index) => {
        switch (icon.type) {
          case HeaderIconType.LINK:
            return <div>link</div>;
        }
        <div></div>;
      })}
    </Stack>
  );
}
