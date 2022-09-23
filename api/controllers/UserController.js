import User from "../models/User.js";
import { createError } from "../utils/error.js";


// UPDATE
export const updateUser = async (req, res) => {

    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true }
        );
        res.status(202).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }

}

// DELETE
export const deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(202).json("User has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET
export const getUser = async (req, res) => {

    try {
        const user = await User.findById(
            req.params.id
        );
        res.status(202).json(user);
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET ALL
export const getAllUser = async (req, res, next) => {
 
    try {
        const users = await User.find();
        res.status(202).json(users);
    } catch (error) {
        next(error);
    }

}