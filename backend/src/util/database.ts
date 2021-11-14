import config from "../config/config";
import mongoose from "mongoose";

const connect = (): void => {
  mongoose
    .connect(config.DB)
    .then(() => {
      console.log("DB connection successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;
