import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default function Home({ avatar,setAvatar,details, setDetails }) {

    const handleChange = e => {
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        });
    }
    function loadAvatar({ target }) {
        const file = target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          setAvatar(reader.result);
        };
    
        reader.readAsDataURL(file);
      }

    return (
        <>  
       <div className="avatar">
          <img className='img' src={avatar} alt="avatar" />
          <input type="file" accept="image/*" onChange={loadAvatar} />
        </div>
            
            <br/>
            <input name="name" value={details.name} onChange={handleChange} />
            <input name="email" value={details.email} onChange={handleChange} />
            <Link className='link' to="/register"><button>Go to Register</button></Link>
        </>
    )
}