import express from "express";

import {
    getAllPembicara,
    getPembicaraById,
    createPembicara,
    updatePembicara,
    deletePembicara,
} from "../controllers/pembicaraController";

const router = express.Router();

// menampilkan semua pembicara
router.get("/", getAllPembicara);

// mengambil pembicara berdasarkan id
router.get("/:id", getPembicaraById);

// menyimpan data pembicara
router.post("/", createPembicara);

// mengupdate data pembicara berdasarkan id
router.put("/:id", updatePembicara);

// menghapus data pembicara berdasarkan id
router.delete("/:id", deletePembicara);


export default router;