"use client";

import { Box, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  icon?: boolean;
}

export default function TextInput({ icon = false, ...props }: TextInputProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2, width: "100%" }}>
      {icon && <AccountCircle sx={{ mr: 1, my: 0.5, color: "text.primary" }} />}
      <TextField {...props} fullWidth />
    </Box>
  );
}
