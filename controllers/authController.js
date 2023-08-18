import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

// Register Controller
const register = async (req, res, next) => {
  // retrieving all the values from client side
  const { name, email, password } = req.body;
  // checking all the field has value or not
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  // checking input email is already present or not
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  // creating user into db
  const user = await User.create({ name, email, password });
  // invoke the JsonWebToken function
  const token = user.createJWT();
  // send the user data after created
  res.status(StatusCodes.CREATED).json({
    user: {
      _id: user._id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      location: user.location,
    },
    location: user.location,
    token,
  });
};

// Login Controller
const login = async (req, res) => {
  // retrieving all the values from client side
  const { email, password } = req.body;
  // checking all the field has value or not
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  // finding input email in db
  const user = await User.findOne({ email }).select("+password");
  // checking input email is found or not in db
  if (!user) {
    throw new UnauthenticatedError("Invalid Email");
  }
  // comparing input password with db password
  const isUserPasswordCorrect = await user.comparePassword(password);
  if (!isUserPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Password");
  }
  // invoke the JsonWebToken function
  const token = user.createJWT();
  // make sure after login, password should be undefined
  user.password = undefined;
  // sending response to client side
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

// Update Controller
const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Please provide all values");
  }
  // find the user in db
  const user = await User.findOne({ _id: req.user.userId });
  // update the user details
  (user.email = email),
    (user.name = name),
    (user.lastName = lastName),
    (user.location = location);
  // save the user details
  await user.save();

  // generate a new token for updated user
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

export { register, login, updateUser };
