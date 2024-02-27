require("dotenv").config();

const Server = require("./models/server.js");
const { comparePassword, hashPassword } = require("./helpers/validator.js");
const User = require("./models/user.js");

const createUserByDefault = async () => {
  try {
    const user = new User({
      name: "admin",
      lastName: "admin",
      username: "admin",
      password: await hashPassword("admin"),
      courses: [],
      role: "TEACHER",
    });

    let users = await User.find({});

    if (users.length > 0) {
      return;
    }

    return await user.save();
  } catch (error) {
    console.log(error);
  }
};

createUserByDefault();

const server = new Server();

server.listen();
