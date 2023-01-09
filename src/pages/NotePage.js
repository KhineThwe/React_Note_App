import React from 'react'
import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {
    useParams
  } from "react-router-dom";

const NotePage = ({}) => {
  let { id } = useParams();

  let note = notes.find(note=>note.id===Number(id))

  return (
    <div className='note'>
        <div className='note-header'>
           <h3>
              <Link to="/">
                <ArrowLeft/>
              </Link>
           </h3>
        </div>
        <textarea value={note?.body}>

        </textarea>
    </div>
  )
}

export default NotePage

//mumbleui.com for icons
