import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";


// CREATE
export const createHotel = async (req, res) => {

    // create class instance
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);
    }

}

// UPDATE
export const updateHotel = async (req, res) => {

    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true }
        );
        res.status(202).json(updateHotel);
    } catch (error) {
        res.status(500).json(error);
    }

}

// DELETE
export const deleteHotel = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(
            req.params.id,
        );
        res.status(202).json("Hotel has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET
export const getHotel = async (req, res) => {

    try {
        const hotel = await Hotel.findById(
            req.params.id
        );
        res.status(202).json(hotel);
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET ALL
export const getAllHotel = async (req, res, next) => {
 
    try {
        const hotels = await Hotel.find();
        res.status(202).json(hotels);
    } catch (error) {
        next(error);
    }

}

// count by city
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',');

    try {
        const hotels = await Hotel.find();
        res.status(202).json(hotels);
    } catch (error) {
        next(error);
    }

}