import { Button, Grid } from "@mui/material";
import { Google } from "@mui/icons-material";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";
export default function Loading({ type, color }) {
  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent={"center"}
      style={{ minHeight: "100vh" }}
    >
      <Button
        variant="contained"
        startIcon={<Google />}
        onClick={LoginWithGoogle}
      >
        Sign in with Google
      </Button>
    </Grid>
  );
}
