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
        <div className='locationMain'>
          <div>
              <h1 className='device_H'>IMPORTENT</h1>
              <p className='device_p'>If you didn't save your Location, Please Add your Location before add Device.</p>
              
              <a href="./location">
                <button class="device_btn"><b>Add Location</b></button>
              </a>
          </div>

          <div>
          <h1 className='location_H'>Add Your Device</h1>
            <input type='text' placeholder='Serial Number' value={s_number} onChange={e => setNumber(e.target.value)} /><br/>
            <input type='textarea' placeholder='Device type' value={d_type} onChange={e => setType(e.target.value)} /><br/>
            
            <button className='location_btn' onClick={addLocation}>Save Device</button>
          </div>
            
        </div>
    </div>
  )
}
