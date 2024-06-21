import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productCollectionName = "products";

const productSchema = new Schema({
    title: { type: String, required: true },
    code: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },

});

productSchema.plugin(mongoosePaginate);

export const ProductModel = model( productCollectionName, productSchema);