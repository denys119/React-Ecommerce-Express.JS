import { RequestHandler } from "express";
import { generateToken, generateRefreshToken } from "../functions/token";
import CryptoJS from "crypto-js";
import config from "../config/config";
import User from "../models/user";
import Jwt from "../models/jwt";

export const registerUser: RequestHandler = async (req, res, next) => {
  const newUser = new User({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      config.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    //destructure the object because we dont want to send back the password
    const { password, ...rest } = savedUser._doc;
    //get the id in a new variable
    const { _id, ...restData } = savedUser._doc;
    //generate an accessToken
    const accessToken = generateToken(rest);
    //generate a refreshToken
    const refreshToken = generateRefreshToken(rest);
    //this will be the user that we want to send as a response
    const userSend = { ...rest, accessToken };
    //create and store into database a new refresh token for the specific user
    const newUserRefreshToken = new Jwt({
      userId: _id,
      token: refreshToken,
    });
    await newUserRefreshToken.save();
    //send the response to frontend with a status 201 success and the json object
    res.status(201).json({
      userSend,
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message, err });
  }
};

export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      res.status(401).json({ message: "Username or password incorrect!" });
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        config.PASS_SEC
      );
      const dbPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      dbPassword !== req.body.password &&
        res.status(401).json({ message: "Wrong password" });
      const { password, ...rest } = user._doc;
      const accessToken = generateToken(rest);
      const userSend = { ...rest, accessToken };
      res.status(200).json(userSend);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message, err });
  }
};

export const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const token = await Jwt.findOne({ userId: req.params.id.toString() });
    const user = await User.findById(req.params.id);
    if (!token || !user) {
      res.status(401).json({ message: "Token or user not found" });
    } else {
      const { password, ...rest } = user._doc;
      const accessToken = generateToken(rest);
      const userSend = { ...rest, accessToken };
      res.status(201).json(userSend);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
