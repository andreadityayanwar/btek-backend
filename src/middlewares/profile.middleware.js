const {body, param, validationResult, matchedData} = require("express-validator");

exports.paramsUUID = [
  param("id").isUUID(4).withMessage("Invalid ID")
];

exports.basicUserCreds = [
  body("fullName").isLength({min: 2}).withMessage("Full Name Length must be 2 char or more"),
  body("birthDate").isDate().withMessage("Input Birth Date correctly, format : YYYY-MM-DD")
];

exports.check = (req, res, next) => {
  const errorValidation = validationResult(req);
  console.log(matchedData(req, {includeOptional: true}));
  if(!errorValidation.isEmpty()){
    return res.status(400).json({
      success: false,
      message: "VALIDATION ERROR",
      result: errorValidation.array()
    });
  }
  return next();
};
