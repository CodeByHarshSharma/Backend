import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const [notes, setNotes] = useState([
    {
      title: "title 1",
      description: "description 1"
    }
  ])

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
      .then((res => {
        setNotes(res.data.message)
      }))
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function submitHandler(e) {
    e.preventDefault()

    const { title, description } = e.target.elements
    console.log(title.value, description.value)

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        fetchNotes()
      })
  }

  function NoteDEL(noteId){
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(res=>{
      console.log(res.data)
      fetchNotes()
    })
  }

  return (
    <div>

      <form className='note-create-form' onSubmit={submitHandler}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Create Note</button>
      </form>

      <div className="notes">
        {
          notes.map(note => {
            return <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => {NoteDEL(note._id)}}>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
