import express from "express";
import mongoose from "mongoose";
import { tiendaProductos } from "./productos.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery", false)
mongoose.connect("mongodb://root:example@192.168.44.113:27017/tienda?authSource=admin", (error) => {
    if(error){
        console.log("Cannot connect to database", error);
    }
    console.log("conectado ");
})
app.use("/tienda", tiendaProductos)

app.listen(8080, () => {
    console.log("Server escuchando en el puerto 8080")
})