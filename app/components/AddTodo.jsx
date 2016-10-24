var React = require('react');

var AddTodo=React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.addtodo.value;
    if (todo.length > 0) {
      this.props.onAddTodo(todo);
      this.refs.addtodo.value='';
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit} ref="form">
          <input type='text' placeholder='Type a Todo to add' ref="addtodo"></input>
          <button type="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports=AddTodo;
