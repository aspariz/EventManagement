import { Request, Response } from "express";
import { prisma } from "../lib/db";

// =======================
// GET ALL USER
// =======================
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                nim: true,
            },
        });

        res.status(200).json({
            message: "Berhasil mengambil data user",
            data: users,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Terjadi kesalahan server",
        });
    }
};

// =======================
// GET USER BY ID
// =======================
export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                name: true,
                nim: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
            });
        }

        res.status(200).json({
            message: "Berhasil mengambil detail user",
            data: user,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Terjadi kesalahan server",
        });
    }
};

// =======================
// UPDATE USER
// =======================
export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const { name, nim } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
            });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id,
            },
            data: {
                name,
                nim,
            },
        });

        res.status(200).json({
            message: "User berhasil diupdate",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Terjadi kesalahan server",
        });
    }
};

// =======================
// DELETE USER
// =======================
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
            });
        }

        await prisma.user.delete({
            where: {
                id,
            },
        });

        res.status(200).json({
            message: "User berhasil dihapus",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Terjadi kesalahan server",
        });
    }
};