import React, { useState } from 'react'

export default function Devices() {

    const [s_number, setNumber] = useState('')
    const [d_type,setType] = useState('')


    const addLocation = async() => {
        try {
            
            const res = await fetch('/device',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                
                body:JSON.stringify({s_number, d_type})              
            })
            
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) window.location.href = "/"
            
            } catch (error) {
            console.log(error);
            
            }
    }

  return (
    <div>
        <div>
            <input type='text' placeholder='Serial Number' value={s_number} onChange={e => setNumber(e.target.value)} /><br/>
            <input type='textarea' placeholder='Device type' value={d_type} onChange={e => setType(e.target.value)} /><br/>
            
            <button onClick={addLocation}>Save Device</button>
        </div>
    </div>
  )
}
