import React, { Component } from 'react';
import TodoItem from '../components/TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {


    render() {
        //console.log(this.props.Todos);
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} 
                markComplete={this.props.markComplete} 
                delTodo={this.props.delTodo} />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;