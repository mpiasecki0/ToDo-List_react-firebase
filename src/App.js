import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  // this class handles most database activities including (back-end) CRUD-operations
  
  constructor(props){
    // initialize things...
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    // the DB_CONFIG is defined in the Config folder and contains the firebase-DB access data
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    // setup the State of the Notes (supposed to be filled with text on action)
    this.state = {
      notes: [],
    }
  }

  // DataBase Handler
  componentWillMount(){
    const previousNotes = this.state.notes;

    // Push content into the DB
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    // Delete content from the DB using the PK (id)
    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);  // remove element from the array
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  // CRUD Functions for the DB...
  addNote(note){
    this.database.push().set({ noteContent: note});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  // set the visual structure of the website (simple div containers for head,body,foot)
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
