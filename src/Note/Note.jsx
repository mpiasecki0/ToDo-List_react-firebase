import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{
    // this class handles most of the notes deletion (front-end)

    // the structure of the todo-notes
    constructor(props){
        super(props);
        this.noteContent = props.noteContent; 
        this.noteId = props.noteId;    // crucial part for the crud functions!
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    // delete a note (seperate from other CRUD functions because of the needed render method)
    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    // delete a note by clicking on the "X"
    render(){
        return(
            <div className="note fade-in">
                <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
                <p className="noteContent">{ this.noteContent }</p>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
