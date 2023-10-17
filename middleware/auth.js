const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
    console.log("token", token);
    const decoded = jwt.verify(token, "secret");
    console.log("deco", decoded, "req.userId", req.userId, "req.params.userId", req.params.userId);
    User.findById(decoded.userId)
      .then((user) => {
        next();
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
