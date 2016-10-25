var $ = require('jQuery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function (){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
        todos = JSON.parse(stringTodos);
    } catch (e) {
        console.log('Sth went fucky with parsing string to object.');
    }

    return $.isArray(todos) ? todos : [];


  }
};
