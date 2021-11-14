import Jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (user: {}): string => {
  return Jwt.sign(user, config.JWT_SEC, { expiresIn: "1d" });
};

export const generateRefreshToken = (user: {}): string => {
  return Jwt.sign(user, config.JWT_VERIFY_SEC);
};
