'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorieSchemas = new Schema(
    {
        nameCategorie: {
            type: String,
            // required: true,
        }
        
    }, {collection: 'categories'}
);

const categorie= mongoose.model('categorie', categorieSchemas);

module.exports = categorie;