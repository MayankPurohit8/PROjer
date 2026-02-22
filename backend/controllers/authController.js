import User from "../models/userModel.js";
import Account from "../models/accountModel.js";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email) {
      return res.status(401).json({ message: "email not provided" });
    }
    if (!password) {
      return res.status(401).json({ message: "password not provided" });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(401)
        .json({ message: "Email already registered login instead" });
    }

    const newUser = await User.create(
      {
        email: email,
        name: name,
      },
      { new: true }
    );

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newAccount = await Account.create({
      userId: newUser._id,
      provider: "local",
      providerId: email,
      password: hash,
    });

    return res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: "token not provided" });
    }
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOneAndUpdate(
      {
        tokenExpiry: { $gt: Date.now() },
        verificationToken: hashedToken,
      },
      {
        isVerified: true,
        tokenExpiry: null,
        verificationToken: null,
      }
    );
    if (!user) {
      return res.status(400).json({ message: "invalid to expired token" });
    }
    return res.status(200).json({ message: "User verified" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Fill all the fields" });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (!user.isVerified) {
      return res.status(400).json({ message: "User not verified" });
    }
    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });
    return res.status(200).json({ message: "User logged in" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
