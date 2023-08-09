// import UserModel from "../model/User.Model";
// import bcrypt from "bcrypt";

export async function register(req, res) {
  try {
    const { password, email } = req.body;
    console.log(req.body);
    return res.status(200).json({ msg: "Registered successfully" });

    // const existingEmail = await UserModel.findOne({ email });
    // if (existingEmail) {
    //   return res.status(400).json({ error: "Email already exists" });
    // }

    // if (password) {
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = new UserModel({
    //     username,
    //     password: hashedPassword,
    //     email,
    //   });

    //   console.log(user);

    //   await user.save();

    //}
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
