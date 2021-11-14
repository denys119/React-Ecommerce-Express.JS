import { RequestHandler } from "express";
import config from "../config/config";
import CryptoJS from "crypto-js";
import User from "../models/user";
import { verifyTokenAndAdmin, verifyTokenAndUser } from "../middlewares/user";

export const getAllUsers: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    //check if we have new query, if it is return the last 5 users that joined, if not, return all users
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find({});
      if (users) {
        let userSend: {}[] = [];
        for (let user of users) {
          const { password, ...rest } = user._doc;
          userSend.push(rest);
        }
        res.status(200).json(userSend);
      } else {
        res.status(500).json({ message: "No users found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const getUser: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    try {
      const user = await User.findById(req.query.userIdSearched);
      if (user) {
        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
      } else {
        res.status(500).json({ message: "No user found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const updateAdmin: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.query.userIdUpdated as string,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const deleteUser: RequestHandler = async (req, res) => {
  verifyTokenAndAdmin(req, res, async () => {
    try {
      const deletedUser = await User.findByIdAndDelete(
        req.query.userIdDeleted as string
      );
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};

export const updateUserProfile: RequestHandler = async (req, res) => {
  verifyTokenAndUser(req, res, async () => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        config.PASS_SEC
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id as string,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: "Something went wrong", err: err });
    }
  });
};
