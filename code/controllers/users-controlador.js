const User = require("../models/user.js");
const { hashPassword, comparePassword } = require("../helpers/validator.js");
const { generateToken } = require("../helpers/jwt.js");

const perfil = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user._id })
      .select("-_id")
      .populate({
        path: "courses",
        select: "name description teacher -_id",
        populate: {
          path: "teacher",
          model: "User",
          select: "name lastName role -_id",
        },
      });

    return res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const actualizar = async (req, res) => {
  try {
    const { name, lastName, username, password } = req.body;

    await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        name,
        lastName,
        username,
        password: await hashPassword(password),
      },
      { new: true }
    );

    return res.json({ message: "Profile updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordValid = await comparePassword(password, user.password);

    if (user && isPasswordValid) {
      let loggedUser = {
        uid: user._id,
        username: username,
        role: user.role,
      };

      const token = await generateToken(loggedUser);

      return res.send({
        message: "Logged in",
        token,
      });
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const eliminar = async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.user._id });

    return res.json({ message: "Profile deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { perfil, actualizar, login, eliminar };
