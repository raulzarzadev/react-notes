import React, { Component } from 'react'


//el tipado de elementos es importante para identificar errores, herramientas como flow, TypeScrip o prop-types(no es lenguaje) ayudan
//import PropsTypes from 'prop-types' 





class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render() {

        const { task } = this.props



        return <div key={task.id}>
            <h1>{task.title}</h1>
            <p style={this.StyleCompleted()}>{task.description}</p>
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task