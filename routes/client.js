import express from 'express';
import { getProducts, getCusomers, getTransactions, getGeography } from '../controllers/client.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/customers', getCusomers);
router.get('/transactions', getTransactions);
router.get('/geography', getGeography);

export default router;