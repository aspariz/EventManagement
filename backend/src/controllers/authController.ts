import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, nim, password } = req.body;

    // validasi input
    if (!name || !nim || !password) {
      return res.status(400).json({
        message: "Name, NIM, dan password wajib diisi",
      });
    }

    // cek user sudah ada atau belum
    const existingUser = await prisma.user.findUnique({
      where: {
        nim,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "NIM sudah terdaftar",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // simpan user
    const newUser = await prisma.user.create({
      data: {
        name,
        nim,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: "Register berhasil",
      user: {
        id: newUser.id,
        name: newUser.name,
        nim: newUser.nim,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Terjadi kesalahan server",
    });
  }
};


export const login = async (req: Request, res: Response) => {
  try {
    const { nim, password } = req.body;

    // validasi
    if (!nim || !password) {
      return res.status(400).json({
        message: "NIM dan password wajib diisi",
      });
    }

    // cek user
    const user = await prisma.user.findUnique({
      where: {
        nim,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    // cek password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password salah",
      });
    }

    // buat token
    const token = jwt.sign(
      {
        id: user.id,
        nim: user.nim,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        name: user.name,
        nim: user.nim,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Terjadi kesalahan server",
    });
  }
};