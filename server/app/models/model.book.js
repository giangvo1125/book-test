var mongoose = require('mongoose');

//model Book
var bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: false, 
    },
    is_active: {
        type: Boolean, 
        default: true,
    },
    create_date: {
        type: Date,
        default: Date.now, 
    }
});

// Export Book model
var Book = module.exports = mongoose.model('book', bookSchema)


module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}