import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;
  const n = JSON.parse(token) || req?.body?.jwt;
  console.log(n.jwt);
  if (!n) return res.status(401).send("You are not authenticated!");
  jwt.verify(n.jwt, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send("Token is not valid!");
    req.userId = payload?.userId;
    next();
  });
};
