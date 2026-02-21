import { Resend } from "resend";
import User from "../models/userModel.js";
import crypto from "crypto";
import { VerificationEmailTemplate } from "./EmailTemplate.js";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationMail = async ({ id }) => {
  try {
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(verificationToken)
      .digest("hex");

    const user = await User.findById(id);

    if (!user) {
      throw new Error("User does not exist");
    }
    if (user.isVerified) {
      throw new Error("User already verified");
    }

    if (user.tokenExpiry && user.tokenExpiry > Date.now()) {
      throw new Error("Verification already sent. Please Check email");
    }

    const url = `${process.env.BACKEND_URL}/api/auth/verify?token=${verificationToken}`;
    await resend.emails.send({
      from: "name@domain.com",
      to: user.email,
      subject: "Verification Email for Projer Account",
      html: VerificationEmailTemplate(url, user.email, user.name, 5),
    });

    user.verificationToken = hashedToken;
    user.tokenExpiry = Date.now() + 1000 * 60 * 5;

    await user.save();
  } catch (err) {
    console.log(err);
  }
};
