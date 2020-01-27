import React, { Component } from 'react'


class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        event.preventDefault()
        //console.log(this.state)
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = event => {

        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Titulo una tarea"
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <br /><br />
                <textarea
                    type="text"
                    name="description"
                    placeholder="Describe la tarea" 
                    onChange={this.onChange}>
                </textarea>
                <br /><br />
                <button type="submit">
                    Guardar Nota
                </button>
            </form>
        )
    }


}

export default TaskForm;