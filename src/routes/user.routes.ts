import express from "express";
import prisma from "../database/prisma.db";

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  const users = await prisma.usuario.findMany({});

  return res.json({ users: users });
});

UserRouter.post("/", async (req, res) => {
  const { username, password, name } = req.body;

  if (username === undefined) {
    return res.json({ error: "Username is required" });
  }
  if (password === undefined) {
    return res.json({ error: "password is required" });
  }
  if (name === undefined) {
    return res.json({ error: "name is required" });
  }

  const user = await prisma.usuario.create({
    data: {
      nombre: name,
      password: password,
      username: username,
    },
  });

  return res.json({ user: user });
});

export default UserRouter;
