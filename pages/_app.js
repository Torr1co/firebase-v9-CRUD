import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import TodoContext from "../components/TodoContext";
import { AuthProvider } from "../components/Auth";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [todo, setTodo] = useState({ title: "", detail: "" });
  return (
    <AuthProvider>
      <TodoContext.Provider value={{ todo, setTodo }}>
        <Component {...pageProps} />
        <Toaster />
      </TodoContext.Provider>
    </AuthProvider>
  );
}

export default MyApp;
