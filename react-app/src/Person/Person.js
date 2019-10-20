import React from 'react'

const person = (props) => {
    return <p onClick={props.clck}>fetched from Person.js by {props.name}</p>
}

export default person;