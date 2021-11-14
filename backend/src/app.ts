import express, { Application } from "express";
import cors from "cors";
import config from "./config/config";
import connect from "./util/database";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";

const app: Application = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
connect();

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);

app.listen(config.PORT, () => {
  console.log("Server is running");
});
