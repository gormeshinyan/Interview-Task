import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function Register({ avatar,details }){
    return(
        <>
            <Link to="/">Home</Link>
            <br/>
            <div>
            <img className='img' src={avatar} alt="avatar"/>
            </div>
            <div>
            <h1> name:{details.name}</h1>
            <h1> email:{details.email}</h1>
            </div>
        </>
    )
}