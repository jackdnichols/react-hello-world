import React, { Component } from 'react';
import Header from '../components/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class Home extends Component {

    state = {
        todos: [
            {
                id:uuidv4(),
                title: 'Take out the trash',
                completed: false
            },
            {
                id:uuidv4(),
                title: 'Pack the truck',
                completed: false
            },
            {
                id:uuidv4(),
                title: 'Go up north',
                completed: false
            },
            {
                id:uuidv4(),
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

    // Add Todo
    addTodo = (title) => {
        console.log(title)
        const newTodo = {
            id:uuidv4(),
            title:title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render () {
        //console.log(this.state.todos)
        return (
            <div className="container">
                <Header></Header>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
            </div>
        );
    }
}

export default Home;
