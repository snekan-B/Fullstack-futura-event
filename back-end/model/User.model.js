import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "please provide unique email"],
    unique: true,
  },
});

export default mongoose.model.Users || mongoose.model("User", UserSchema);
