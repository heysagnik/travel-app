import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.body.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
