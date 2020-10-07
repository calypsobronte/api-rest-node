const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoListSchema = Schema({
    name: {type: String, required: true, max: 30},
    isComplete: { type: Boolean, default: false }
});

module.exports = mongoose.model('TodoList', TodoListSchema);
