import React, { Component } from 'react';
import Header from '../components/Header';
import Todos from '../components/Todos'

class Home extends Component {

    state = {
        todos: [
            {
                id:1,
                title: 'Take out the trash',
                completed: false
            },
            {
                id:2,
                title: 'Pack the truck',
                completed: false
            },
            {
                id:3,
                title: 'Go up north',
                completed: false
            },
            {
                id:4,
                title: 'Grab a beer',
                completed: false
            }
        ]
    }

    // Delete todo
    delTodo = (id) => {
        console.log(id)
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // Mark this task complete
    markComplete = (id) => {
        //console.log(id);
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }) })
    }

    render () {
        //console.log(this.state.todos)
        return (
            <div>
                <Header></Header>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
            </div>
        );
    }
}

export default Home;
