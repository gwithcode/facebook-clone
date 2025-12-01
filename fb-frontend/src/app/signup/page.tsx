"use client";

import { useState } from "react";
import { Box, Button, FormControl, InputLabel, Select, MenuItem, Stack } from "@mui/material";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import BirthdayPicker from "../../components/BirthdayPicker";
import GenderSelect from "../../components/GenderSelect";
import { theme } from "@/styles/theme";
import Link from "@mui/material/Link";

export default function SignupPage() {
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
      }}
    >
      <Card>
        {/* Header */}
        <Box>
          <h2 style={{ margin: 0, textAlign: "center" }}>Sign Up</h2>
        </Box>

        {/* Name Inputs */}
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <TextField id="first-name" label="First Name"  />
          <TextField id="last-name" label="Last Name" />
        </Stack>

        {/* Birthday Input */}
        <BirthdayPicker value={birthday} onChange={setBirthday} />

        {/* Gender Select */}
        <GenderSelect value={gender} onChange={setGender} />

        {/* Email or Phone Input */}
        <TextField id="email-phone" label="Email"  />

        {/* Password Input */}
        <TextField id="password" label="Password" type="password" />

        {/* Signup Button */}
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" fullWidth>
            SIGN UP
          </Button>
        </Box>

        {/* Footer link to Login */}
        <Box sx={{ mt: 1, textAlign: "center", fontSize: 14, color: "gray" }}>
          Already have an account? <Link href="/login">Login</Link>
        </Box>
      </Card>
    </Box>
  );
}
