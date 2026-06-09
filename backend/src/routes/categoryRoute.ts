import {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
} from '../controllers/categoryController';
import express from 'express';

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/:id', getCategoryById);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

export default router;