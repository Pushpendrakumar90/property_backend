const mongoose = require('mongoose');
const express = require('express');

const propertySchema = new mongoose.Schema({
    propertyType: {type: String},
    propertyName: {type: String},
    listingType: { type: String },
   
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },

    areaSqft: { type: String },
    bedrooms: { type: String },
    bathrooms: { type: String },
    floorNumber: { type: String },
    totalFloors: { type: String },

    price: { type: String },
    pricePerSqft: { type: String },

    images: { type: String },
    videoUrl: { type: String },
    floorPlan: { type: String },

    contactName: { type: String },
    contactPhone: { type: String },
    contactEmail: { type: String }
},

{ timestamps: true }

);


module.exports = mongoose.model('property', propertySchema)