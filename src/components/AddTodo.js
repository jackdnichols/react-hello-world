import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        title: e.target.value
    }

    );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);

        // Clear the field
        this.setState({ title: '' })
    }

    render() {        
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >                 
                <input 
                    type='text' 
                    name='title' 
                    placeholder="Add Todo ..."
                    style={{ flex: '10' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>    
        )
    }
}

const buttonStyle = {
    backgroundColor: '#ff0000',
    color:'#ffffff',
    borderRadius:'20%',
    float: 'right',
    border: 'none',
    cursor: 'pointer',    
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;