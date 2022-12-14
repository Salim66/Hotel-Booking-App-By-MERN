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
 
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }

}

// count by city
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
};

export const countByType = async (req, res, next) => {
    try {
      const hotelCount = await Hotel.countDocuments({ type: "hotel" });
      const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
      const resortCount = await Hotel.countDocuments({ type: "resort" });
      const villaCount = await Hotel.countDocuments({ type: "villa" });
      const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  
      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
};
  
export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };