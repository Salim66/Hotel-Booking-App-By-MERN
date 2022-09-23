import User from "../models/User.js";
import bcrypt from 'bcryptjs';

// user register method
export const register = async (req, res, next) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({ ...req.body, password: hash });
        await newUser.save();
        res.status(201).send('User registration successfully'); 
    } catch (error) {
        next(error);
    }

}