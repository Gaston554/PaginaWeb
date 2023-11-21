import express from "express";
import { modeloProducto } from "./modeloProducto.js";

export const tiendaProductos = express.Router();

tiendaProductos.get("/", async(req, res) => {
    let productos = await modeloProducto.find()
    res.send({estado: "conectado", datos:{productos}})
})