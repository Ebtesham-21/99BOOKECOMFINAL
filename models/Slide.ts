import {Schema, model, models} from "mongoose";

const slideSchema = new Schema({
    imageUrl: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
});

const Slide = models.Slide || model ("Slide", slideSchema);

export default Slide;