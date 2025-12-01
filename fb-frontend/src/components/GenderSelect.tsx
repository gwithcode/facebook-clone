"use client";

import { Box, TextField, MenuItem } from "@mui/material";

interface GenderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function GenderSelect({ value, onChange }: GenderSelectProps) {
  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      <TextField select fullWidth label="Gender" value={value} onChange={(e) => onChange(e.target.value)}>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
    </Box>
  );
}
