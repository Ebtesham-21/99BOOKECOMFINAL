import mongoose, {Schema, model, models} from "mongoose";


interface Feature {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const featureSchema = new Schema<Feature> ({
    id: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
});

const FeatureModel = models.Feature || model<Feature>('Feature', featureSchema);

export default FeatureModel;