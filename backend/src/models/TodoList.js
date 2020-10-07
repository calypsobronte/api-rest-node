const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Database creation
const TodoListSchema = Schema({
    name: {type: String, required: true, max: 30},
    isComplete: { type: Boolean, default: false }
});

module.exports = mongoose.model('TodoList', TodoListSchema);
