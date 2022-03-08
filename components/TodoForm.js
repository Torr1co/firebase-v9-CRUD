import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
export default function TodoForm() {
  const [todo, setTodo] = useState({ title: "", detail: "" });

  const onSubmit = async () => {
    const collectionRef = collection(db, "todos");
    const docRef = await addDoc(collectionRef, {
      ...todo,
      timestamp: serverTimestamp(),
    });
    toast.success(`Todo with id ${docRef.id} added`);
    setTodo({ title: "", detail: "" });
  };
  return (
    <div>
      <pre>{JSON.stringify(todo)}</pre>
      <TextField
        fullWidth
        label="title"
        margin="normal"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <TextField
        fullWidth
        label="detail"
        multiline
        maxRows={4}
        value={todo.detail}
        onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
      />
      <Button onClick={onSubmit} sx={{ mt: 3 }} variant={"contained"}>
        Add new todo
      </Button>
    </div>
  );
}
