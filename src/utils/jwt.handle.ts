import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01";

export const generateToken = (id: string) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return token
};

export const verifyToken = (token: string) => {
  const isOk = jwt.verify(token, JWT_SECRET);
  return isOk
};
