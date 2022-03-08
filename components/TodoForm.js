import { TextField, Button } from "@mui/material";
import { useState } from "react";
import {
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import toast from "react-hot-toast";
import TodoContext from "./TodoContext";
import { useContext } from "react";
export default function TodoForm() {
  const { todo, setTodo } = useContext(TodoContext);

  const onSubmit = async () => {
    if (todo?.hasOwnProperty("timestamp")) {
      //update todo
      const docRef = doc(db, "todos", todo.id);
      const todoUpdated = {
        ...todo,
        timestamp: serverTimestamp(),
      };
      updateDoc(docRef, todoUpdated);
      setTodo({ title: "", detail: "" });
      toast.success(`Todo with id ${docRef.id} updated!`);
    } else {
      //create new todo
      const collectionRef = collection(db, "todos");
      const docRef = await addDoc(collectionRef, {
        ...todo,
        timestamp: serverTimestamp(),
      });
      setTodo({ title: "", detail: "" });
      toast.success(`Todo with id ${docRef.id} added!`);
    }
  };
  return (
    <div>
      <pre>{JSON.stringify(todo, null, "\t")}</pre>
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
      <Button
        onClick={() => setTodo({ title: "", detail: "" })}
        sx={{ mt: 3, mr: 3 }}
        variant={"contained"}
      >
        Renew
      </Button>
      <Button onClick={onSubmit} sx={{ mt: 3 }} variant={"contained"}>
        {todo.hasOwnProperty("timestamp") ? "Update todo" : "Add new todo"}
      </Button>
    </div>
  );
}
