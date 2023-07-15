import mongoose from 'mongoose';

// A Simple User Config
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },

  username: { type: String, required: true },

  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
  
});

export const UserModel = mongoose.model('User', UserSchema);

// CRUD Operations 
//READ
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);

//CREATE
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());

//DELETE
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });

//UPDATE
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);