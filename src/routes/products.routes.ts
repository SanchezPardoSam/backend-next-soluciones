import express from "express";
import prisma from "../database/prisma.db";

const ProductsRouter = express.Router();

ProductsRouter.get("/", async (req, res) => {
  const products = await prisma.producto.findMany();
  console.log(products);

  return res.json({ products: products });
});

ProductsRouter.post("/", async (req, res) => {
  const { imagen, nombre, precio } = req.body;
  if (imagen === "" || imagen === undefined) {
    return res.json({ error: "imagen is required" });
  }
  if (nombre === "" || nombre === undefined) {
    return res.json({ error: "nombre is required" });
  }
  if (precio === "" || precio === undefined) {
    return res.json({ error: "precio is required" });
  }

  const product = await prisma.producto.create({
    data: {
      nombre: nombre,
      imagen: imagen,
      precio: precio,
    },
  });

  return res.json({ product: product });
});

ProductsRouter.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { imagen, nombre, precio } = req.body;

  if (!id) {
    return res.json({ error: "ID is required" });
  }

  const product = await prisma.producto.update({
    data: {
      imagen: imagen,
      nombre: nombre,
      precio: precio,
    },
    where: {
      id: Number(id),
    },
  });

  return res.send().json({ product: product });
});

ProductsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json({ error: "ID is required" });
  }

  const product = await prisma.producto.delete({
    where: {
      id: Number(id),
    },
  });

  return res.json({ product: product });
});

export default ProductsRouter;
