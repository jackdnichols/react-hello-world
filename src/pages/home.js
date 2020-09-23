import React, { Component } from 'react';
import Header from '../components/Header';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class Home extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }))    
            //.then(res => console.log(res.data))
    }

    // Delete todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter
                (todo => todo.id !== id)] }))
       
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
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState ({ todos: 
                [...this.state.todos, res.data] }));
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
