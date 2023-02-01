import { Tooltip } from "@mui/material";
import React from "react";

export const ToolTip=({title, children})=><Tooltip title={title}>{children}</Tooltip>