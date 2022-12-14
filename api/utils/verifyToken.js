import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import cookies from 'cookie-parser';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(res.user.id === req.params.id || res.user.isAdmin){
            next();
        }else {
            return next(createError(403, "Token is not a!"));
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if(res.user.isAdmin){
            next();
        }else {
            return next(createError(403, "Token is not a!"));
        }
    })
}