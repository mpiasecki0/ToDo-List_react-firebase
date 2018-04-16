import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    // this class handles most of the notes creation (front-end)

    // init the notes content
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // get the userinput from the field, set the newNoteContent to the value of what's in the input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent of a note to the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string (resets the textfield)
        this.setState({
            newNoteContent: '',
        })
    }

    // footnote structure
    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput"
                placeholder="Write a new note here..."
                value={this.state.newNoteContent} 
                onChange={this.handleUserInput} />
                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;
