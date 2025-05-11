import User from "../../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const Login = async (req, res) => {
  const { emailId, password } = req.body;

  if (!validator.isEmail(emailId)) {
    return res.status(400).send("Invalid Email");
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send("Not a good password");
  }
  try {
    const user = await User.findOne({ emailId });
    if (!user) {
      return res.status(400).send("User not found");
    } else {
      const passwordHash = await bcrypt.compare(password, user.password);
      if (passwordHash) {
        return res.status(200).send("User logged in successfully");
      } else {
        return res.status(400).send("Invalid password");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error logging in user");
  }
};
