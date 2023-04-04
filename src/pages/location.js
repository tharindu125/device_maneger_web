import React, { useState } from 'react'

export default function Location() {

    const [l_name,setName] = useState('')
    const [address, setAddress] = useState('')
    const [p_number, setNumber] = useState('')

    const addLocation = async() => {
        try {
            
            const res = await fetch('/location',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                
                body:JSON.stringify({l_name, address, p_number})              
            })
            
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) {
                alert("Successful added your Location.")
                window.location.href = "/Device"
            }
            } catch (error) {
            console.log(error);
            
            }
    }

  return (
    <div>
        <div className='locationMain'>
            <h1 className='location_H'>Add Your Location</h1>
            <input type='text' placeholder='Location Name' value={l_name} onChange={e => setName(e.target.value)} /><br/>
            <input type='textarea' placeholder='Location Address' value={address} onChange={e => setAddress(e.target.value)} /><br/>
            <input type='string' placeholder='mobile Number' value={p_number} onChange={e => setNumber(e.target.value)} /><br/>

            <button className='location_btn' onClick={addLocation}>Save Location</button>
        </div>
    </div>
  )
}
