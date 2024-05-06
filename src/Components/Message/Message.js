import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js';

export default function Message({message, isError}) {
    if (isError) {
      return (
      <div className='messageContainerError'><i className="fa-solid fa-circle-info"></i> {message}</div>
      )
    } 
    else {
      return (
        <div className='messageContainerSuccess'><i className="fa-solid fa-check"></i> {message}</div>
        )
    }
  }