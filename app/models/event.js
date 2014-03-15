'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Event Schema
 */
var EventSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date
    },
    address: {
        type: String,
        default: '',
        trim: true
    },
    author: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
    },
    latlng: {
        type: Array
    }
});

/**
 * Validations
 */
EventSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

EventSchema.path('tags').validate(function(tags) {
    return tags.length;
}, 'Tags cannot be empty');

EventSchema.path('content').validate(function(content) {
    return content.length;
}, 'Content cannot be empty');

EventSchema.path('author').validate(function(author) {
    return author !== null;
}, 'Author cannot be empty');

EventSchema.path('startTime').validate(function(startTime) {
    return startTime;
}, 'Start Time cannot be empty');

EventSchema.path('endTime').validate(function(endTime) {
    return endTime;
}, 'End Time cannot be empty');

EventSchema.path('address').validate(function(address) {
    return address.length;
}, 'End Time cannot be empty');

EventSchema.path('latlng').validate(function(latlng) {
    return latlng !== null && latlng.length;
}, 'Lat / Long cannot be empty');

EventSchema.path('latlng').validate(function(latlng) {
    return !isNaN(latlng[0]) && !isNaN(latlng[1]);
}, 'Lat / Long must be valid');

mongoose.model('Event', EventSchema);
