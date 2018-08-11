import React from 'react'

export default function Open(props){
    return(
        <textarea onChange={(e)=> props.handleChange(e.target.value)} />
    )
}