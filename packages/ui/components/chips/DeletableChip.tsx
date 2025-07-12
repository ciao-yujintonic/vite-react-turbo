import { IDeletableChip } from "../../models/interfaces";
import { Chip, Tooltip } from "@mui/material";

export default function DeletableChip({
  key,
  label,
  tooltip,
  onDelete,
}: IDeletableChip) {
  return tooltip ? (
    <Tooltip title={tooltip}>
      <Chip key={key} label={label} variant="filled" onDelete={onDelete} />
    </Tooltip>
  ) : (
    <Chip key={key} label={label} variant="filled" onDelete={onDelete} />
  );
}
