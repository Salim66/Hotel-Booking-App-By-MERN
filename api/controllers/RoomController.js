import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';

// CREATE
export const createRoom = async (req, res, next) => {
    let hotelId = req.params.hotelid;
    let newRoom = new Room(req.body);
    
    try {
        
        let saveRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: saveRoom._id } });
        } catch (error) {
            next(error);
        }

        res.status(201).json(saveRoom);

    } catch (error) {
        next(error);
    }
}

// UPDATE
export const updateRoom = async (req, res) => {

    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, 
            { new: true }
        );
        res.status(202).json(updateRoom);
    } catch (error) {
        res.status(500).json(error);
    }

}

// DELETE
export const deleteRoom = async (req, res) => {

    let hotelId = req.params.hotelid;

    try {
        await Room.findByIdAndDelete(
            req.params.id,
        );

        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });
        } catch (error) {
            next(error);
        }

        res.status(202).json("Hotel has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET
export const getRoom = async (req, res) => {

    try {
        const room = await Room.findById(
            req.params.id
        );
        res.status(202).json(room);
    } catch (error) {
        res.status(500).json(error);
    }

}

// GET ALL
export const getAllRoom = async (req, res, next) => {
 
    try {
        const rooms = await Room.find();
        res.status(202).json(rooms);
    } catch (error) {
        next(error);
    }

}