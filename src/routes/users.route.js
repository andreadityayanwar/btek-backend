const users = require ("express").Router();

const userController = require("../controllers/users.controller");

const {check, paramUUID, basicUserCreds, paging} = require("../middlewares/validator.middleware");

users.post("/", basicUserCreds, check, userController.createUser);
users.get("/", paging, check, userController.readAllUsers);
users.get("/:id", paramUUID, check, userController.readUserById);
users.put("/:id", paramUUID, basicUserCreds, check, userController.editUserById);
users.delete("/:id", userController.deleteUserById);

module.exports = users;
