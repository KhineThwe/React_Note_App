import React,{useEffect, useState} from 'react'
//import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {
    useParams
  } from "react-router-dom";

const NotePage = ({history}) => {
  let { id } = useParams();

  //let note = notes.find(note=>note.id===Number(id))
  let [note,setNote] = useState(null)

  useEffect(()=>{
    getNote()
  },[id])

  let getNote = async ()=>{
    let response = await fetch(`http://localhost:8000/notes/${id}`)
    let data = await response.json()
    console.log(data)
    setNote(data)
  }

  let updateNote =async () =>{
      await fetch(`http://localhost:8000/notes/${id}`,{
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({...note,'updated':new Date()})
      })
  }

  let handleSubmit = ()=>{
    updateNote()
    history.push('/')
  }
  return (
    <div className='note'>
        <div className='note-header'>
           <h3>
              <Link to="/">
                <ArrowLeft onClick={handleSubmit}/>
              </Link>
           </h3>
        </div>
        <textarea  onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}>

        </textarea>
    </div>
  )
}

export default NotePage

//mumbleui.com for icons
