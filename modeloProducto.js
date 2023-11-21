import mongoose from "mongoose";


const Collection = "productos"

const productoSchema = new mongoose.Schema({
  title: String,
  price: Number,
})

export const modeloProducto = mongoose.model(Collection, productoSchema)