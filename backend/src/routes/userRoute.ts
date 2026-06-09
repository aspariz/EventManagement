import express from "express";

import {
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
} from "../controllers/userController";

const router = express.Router();

// GET semua user
router.get("/", getUsers);

// GET user by id
router.get("/:id", getUserById);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;