import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const token = jwt.sign({ userId: user._id , role: user.role }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};