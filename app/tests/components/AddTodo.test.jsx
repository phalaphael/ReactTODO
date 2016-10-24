var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');
var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should call on onAddTodo if valid data (not empty) entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addtodo.value = 'test todo';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith('test todo');
  });

  it('should NOT call on onAddTodo if invalid data (empty) entered', () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.addtodo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

  // it('should call onSetCountdown if valid seconds entered', () => {
  //   var spy = expect.createSpy();
  //   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(countdownForm));
  //
  //   countdownForm.refs.seconds.value = '109';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //   expect(spy).toHaveBeenCalledWith(109);
  // });
  // it('should NOT call onSetCountdown if invalid seconds entered', () => {
  //   var spy = expect.createSpy();
  //   var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
  //   var $el = $(ReactDOM.findDOMNode(countdownForm));
  //
  //   countdownForm.refs.seconds.value = 'dupa';
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //   expect(spy).toNotHaveBeenCalled();
  // });
});
