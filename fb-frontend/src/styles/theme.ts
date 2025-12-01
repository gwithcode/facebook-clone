import { createTheme } from "@mui/material/styles";
import { transform } from "next/dist/build/swc/generated-native";

export const theme = createTheme({
  palette: {
    mode: "dark", // dark mode default
    primary: {
      main: "#1E90FF", // your accent blue
    },
    background: {
      default: "#121212", // dark background
      paper: "#1E1E1E",   // card background
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#AAAAAA",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    allVariants: {
      color: "#E2E8F0", // Default text color for all text
    },
  },
  components: {
    /* ==========================
       Text Fields
       ========================== */
    MuiTextField: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": { color: "#E2E8F0" },
          "& .MuiInputLabel-root": { color: "#E2E8F0", /*transform: "translate(0, 10px)"},
          "& .MuiInputLabel-root.MuiInputLabel-shrink": { transform: "translate(0, -12px)" */},
          "& .MuiInputLabel-root.Mui-focused": { color: "#3B82F6" },
          "& .MuiInput-underline:before": { borderBottomColor: "#E2E8F0" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "#3B82F6" },
          "& .MuiInput-underline:after": { borderBottomColor: "#3B82F6" },
        },
      },
    },
    /* ==========================
       Select Dropdowns
       ========================== */
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#E2E8F0",
        },
        icon: {
          color: "#E2E8F0",
        },
      },
    },
    /* ==========================
       Buttons
       ========================== */
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // keep normal case
          fontWeight: 500,
        },
      },
    },
    /* ==========================
       Links
       ========================== */
    MuiLink: {
        styleOverrides: {
          root: {
            color: "#3B82F6",           // accent color for links
            textDecoration: "none",      // no underline by default
            fontWeight: 500,             // slightly bolder than normal text
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline", // underline on hover (industry standard)
              opacity: 0.9,                // subtle effect
            },
            "&:visited": {
              color: "#3B82F6",           // maintain accent color after visit
            },
            "&:focus-visible": {
              outline: "2px solid #3B82F6", // keyboard focus indicator for accessibility
              outlineOffset: 2,
      },
    },
  },
},
    /* ==========================
       Card
       ========================== */
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E293B", // Use card background
        },
      },
    },
  },
});
