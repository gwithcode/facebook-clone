"use client"

import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface BirthdayPickerProps {
  value: any;
  onChange: (newValue: any) => void;
}

export default function BirthdayPicker({ value, onChange }: BirthdayPickerProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", mt: 2, width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Birthday"
            value={value}
            onChange={onChange}
            slotProps={{
              textField: {
                fullWidth: true,
                variant: "standard",
                InputProps: {
                  sx: {
                    "& input": { color: "#E2E8F0" },
                    "&:before": { borderBottomColor: "#E2E8F0" },
                    "&:hover:not(.Mui-disabled):before": { borderBottomColor: "#3B82F6" },
                    "&:after": { borderBottomColor: "#3B82F6" },
                  },
                },
                InputLabelProps: {
                  sx: {
                    color: "#E2E8F0",
                    "&.Mui-focused": { color: "#3B82F6" },
                  },
                },
              },
              openPickerButton: {
                sx: {
                  color: "#E2E8F0", // calendar icon color
                },
              },
            }
          }
        />
      </LocalizationProvider>
    </Box>
  );
}
