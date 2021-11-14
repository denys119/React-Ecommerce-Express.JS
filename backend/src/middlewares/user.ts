import { RequestHandler } from "express";
import Jwt from "jsonwebtoken";
import config from "../config/config";

export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.token as string;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    Jwt.verify(token, config.JWT_SEC, (err, user) => {
      if (err)
        res.status(403).json({ message: "Token is invalid", error: err });
      req.user = user as {};
      next();
      return;
    });
  } else {
    return res.status(401).json({ message: "You are not authenticated." });
  }
};

export const verifyTokenAndAdmin: RequestHandler = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin && req.params.id === (req.user._id as string)) {
      next();
      return;
    } else {
      res.status(403).json({ message: "You are not allowed to do that" });
    }
  });
};

export const verifyTokenAndUser: RequestHandler = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.params.id === (req.user._id as string)) {
      next();
      return;
    } else {
      res.status(403).json({ message: "You are not allowed to do that" });
    }
  });
};
