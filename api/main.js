// ./api/main.js

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json());

import getItemsRouter from './items/getItems.js';
import setItemsRouter from './items/setItem.js';
import getOrdersRouter from './orders/getOrder.js';
import setOrdersRouter from './orders/setOrder.js';
import deleteOrderRouter from './orders/deleteOrder.js';

app.use('/getItemsRouter', getItemsRouter);
app.use('/setItemsRouter', setItemsRouter);
app.use('/getOrdersRouter', getOrdersRouter);
app.use('/setOrdersRouter', setOrdersRouter);
app.use('/deleteOrderRouter', deleteOrderRouter);


export default app;