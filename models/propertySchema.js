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

    areaSqft: { type: Number },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    floorNumber: { type: Number },
    totalFloors: { type: Number },

    price: { type: Number },
    pricePerSqft: { type: Number },

    images: { type: String },
    videoUrl: { type: String },
    floorPlan: { type: String },

    contactName: { type: String },
    contactPhone: { type: Number },
    contactEmail: { type: String }
},

{ timestamps: true }

);



module.exports = mongoose.model('property', propertySchema)
