var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });
  it('should render one Todo component for each todo item', ()=>{
    var todos = [
      {id: 1, text: "1st item"},
      {id: 2, text: "2nd item"},
      {id: 3, text: "3rd item"},
      {id: 4, text: "4th item"}
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  });
});
