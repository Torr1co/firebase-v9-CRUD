import { Grid } from "@mui/material";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function TodoId({ todoProps }) {
  const todo = JSON.parse(todoProps);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent={"center"}
      style={{ minHeight: "100vh" }}
    >
      {todo.title}: {todo.detail}
    </Grid>
  );
}

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "todos"));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { id: doc.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);

  return { props: { todoProps: JSON.stringify(docSnap.data()) || null } };
};
