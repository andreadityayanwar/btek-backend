const {body, param, query, validationResult} = require("express-validator");

exports.basicUserCreds = [
  body("email").isEmail().withMessage("Email is Invalid"),
  body("password").isStrongPassword({minLength: 8}).withMessage("Password length must be 8 char or more")
    .isStrongPassword({minUppercase: 1}).withMessage("Password must contain Uppercase 1 or more")
    .isStrongPassword({minNumbers: 1}).withMessage("Password must contain number 1 or more")
    .isStrongPassword({minSymbol: 1}).withMessage("Password must contain symbol 1 or more")
];

exports.paramUUID = [
  param("id").isUUID(4).withMessage("Invalid ID")
];

exports.paging = [
  (req, res, next) => {
    req.query.page = req.query.page || "1";
    req.query.limit = req.query.limit || "5";
    req.query.sortBy = req.query.sortBy || "createdAt";
    req.query.searchBy = req.query.searchBy || "email";
    req.query.search = req.query.search || "";
    req.query.reverse = req.query.reverse || "0";
    return next();
  },

  query("page").optional().toInt(15),
  query("limit").optional().toInt(15),
  query("reverse").optional().toBoolean(),
  query("searchBy").isIn(["email"]).withMessage("Data Not Found"),
  query("search").optional().trim(),
  query("sortBy").isIn(["email", "createdAt", "updateAt"]).withMessage("Data Not Found")
];

exports.check = (req, res, next) => {
  const errorValidation = validationResult(req);
  if(!errorValidation.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      result : errorValidation.array()
    });
  }
  return next();
};
