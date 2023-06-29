import mongoose, { Schema, model } from 'mongoose';

const HouseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    imgArray: {
        type: Array
    }
},
{ timestamps: true });

const House = model('RilzainSolution', HouseSchema);

export default House;