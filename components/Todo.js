import { ListItem, ListItemText } from "@mui/material";
import { IconButton } from "@mui/material";
import { db } from "../lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import toast from "react-hot-toast";
import { SettingsInputSvideoOutlined } from "@mui/icons-material";

export default function Todo({ id, timestamp, title, detail }) {
  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    const docRef = doc(db, "todos", id);
    await deleteDoc(docRef);
    toast("todo deleted ", { icon: "🗑️" });
  };
  return (
    <ListItem
      onClick={() =>
        SettingsInputSvideoOutlined({ id, title, detail, timestamp })
      }
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: "#FAFAFA" }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format("MMMM dd, yyyy")}
      />
    </ListItem>
  );
}
