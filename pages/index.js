import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import TodoList from "../components/Todolist";
import TodoForm from "../components/TodoForm";
import { useAuth } from "../components/Auth";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={3}>
        <IconButton onClick={() => signOut(auth)}>
          <Avatar src={currentUser.photoURL} />
        </IconButton>
        <Typography variant="h5">{currentUser.displayName}</Typography>
      </Box>
      <TodoForm />
      <TodoList />
    </Container>
  );
}
