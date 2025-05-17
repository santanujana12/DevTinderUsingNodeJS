import User from "../../Models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

export const Register = async (req, res) => {
  const { firstName, lastName, emailId, password, age, gender } = req.body;

  // if (!validator.isEmail(emailId)) {
  //   return res.status(400).send("Invalid email");
  // }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send("Not a good password");
  }
  try {
    const alreadyExistingEmail = await User.findOne({ emailId });
    if (alreadyExistingEmail) {
      return res.status(400).send("Email already exists");
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      age,
      gender,
    });
    await user.save();
    res.status(200).send("User registered successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering user");
  }
};
