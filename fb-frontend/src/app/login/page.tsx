"use client";

import { Box, Button } from "@mui/material";
import Card from "../../components/Card";
import TextField from "../../components/TextField";
import Link from "@mui/material/Link";

export default function LoginPage() {
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
      <Card
      >
        <Box>
          <h2 style={{ margin: 0, textAlign: "center" }}>Login</h2>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField id="email" label="Email" icon = {true}/>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField id="password" label="Password" type="password" icon = {true} />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" fullWidth>
            LOGIN
          </Button>
        </Box>

        <Box sx={{ mt: 1, textAlign: "center", fontSize: 14, color: "gray" }}>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </Box>
      </Card>
    </Box>
  );
}
