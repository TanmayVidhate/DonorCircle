import { model, Schema } from "mongoose";

const stru = new Schema({
    name:String,
    mobile:Number,
    address:String,
    bloodGroup:String
},{timestamps: true});

const Donor = model('Donor',stru);

export default Donor;