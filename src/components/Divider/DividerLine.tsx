import { Divider } from "@mui/material";
import React, { FC } from "react";

type PrimaryButtonProps = {
  sx?: Object;
};

const DividerLine: FC<PrimaryButtonProps> = ({
  sx,
}) => {
  return <Divider sx={sx} />
};
export default DividerLine;
