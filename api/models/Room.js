import mongoose from "mongoose";

// create Room Schema
const roomSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    roomNumbers: [{
        number: Number,
        unavailableDatas: {type: [Date]}
    }]
},{
    timestamps: true
});

// export default 
export default mongoose.model('Room', roomSchema);