'use strict';
import fs from 'fs';
import express from 'express';

// const { objects } = require('../helpers');
const indexRouter = express.Router();

// const { combine, errorHandler } = require('../middlewares');

// indexRouter.use(combine);

fs.readdirSync(__dirname)
    .forEach(file => {
        if (objects.isJSFileAndNotIndex(file)) {
            indexRouter.use(require(`./${file}`));
        }
    });

// indexRouter.use(errorHandler);

export default  indexRouter;