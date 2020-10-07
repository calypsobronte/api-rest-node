const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const indexTodoList = require('./routes/todoList');

// connection to db
mongoose.connect('mongodb://127.0.0.1:27017/todolist')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// import routestodoList
app.use('/api/todolist', indexTodoList);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
