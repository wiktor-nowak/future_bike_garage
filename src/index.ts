import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routing/content";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "pages");

// middleware & static files
app.use(express.static("public")); // other way express cannot see css files

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: server running on port ${port}`);
});
