import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' :'none',
            borderBottom: '1px #ccc dotted'
        }
    }

     render() {
        //console.log(this.props.todo);
        //Desctucture
        const { id, title } = this.props.todo;
        
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> { ' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={buttonStyle}>Delete</button>
                </p>
            </div>
        );
    }    
}

const buttonStyle = {
    backgroundColor: '#ff0000',
    color:'#ffffff',
    borderRadius:'30%',
    float: 'right',
    border: 'none',
    cursor: 'pointer'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;