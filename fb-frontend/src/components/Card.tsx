"use client";

import { Box, BoxProps } from "@mui/material";

interface CardProps extends BoxProps {
  children: React.ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
  return (
    <Box
      {...props}
      sx={{
        width: 400,
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        bgcolor: "background.paper",
        color: "text.primary",
        borderRadius: 2,
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}
