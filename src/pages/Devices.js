import React, { useState } from 'react'

export default function Devices() {

    const [l_name, setName] = useState('')
    const [s_number, setNumber] = useState('')
    const [d_type,setType] = useState('')

    //Add one ddevice No loop
    const addDevice = async() => {
        try {
            
            const res = await fetch('/device',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                
                body:JSON.stringify({l_name, s_number, d_type})              
            })
            
            const data = await res.json()
            if (!res.ok) {
                const {error} = data;
                throw Error(error)
            }
            if (res.ok) alert("Successful added your device.")
            
            } catch (error) {
            console.log(error);
            
            }
    }

    //Add multiple devices with loop
    const reAddDevice = async() => {
      try {
          
          const res = await fetch('/device',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json'
              },
              
              body:JSON.stringify({l_name, s_number, d_type})              
          })
          
          const data = await res.json()
          if (!res.ok) {
              const {error} = data;
              throw Error(error)
          }
          if (res.ok) {
            alert("Successful added your device.")
            window.location.href = "/Device"
          }
          } catch (error) {
          console.log(error);
          
          }
  }

  return (
    <div>
        <div className='deviceMain'>
          
          <div>
              <h1 className='device_H'>IMPORTENT</h1>
              <p className='device_p'>If you didn't save your Location, Please Add your Location before add Device.</p>
              
              <a href="./location" className='a'>
                <button class="device_btn"><b>Add Location</b></button>
              </a>
          </div>

          <div>
          <h1 className='location_H'>Add Your Device</h1>
            <input type='text' placeholder='Device Location' value={l_name} onChange={e => setName(e.target.value)} /><br/>
            <input type='text' placeholder='Serial Number' value={s_number} onChange={e => setNumber(e.target.value)} /><br/>
            <input type='textarea' placeholder='Device type' value={d_type} onChange={e => setType(e.target.value)} /><br/>
            
            <button className='location_btn' onClick={addDevice}>Add Device</button> {/*Add one ddevice No loop*/}
            <button className='location_btn' onClick={reAddDevice}>Add & Reenter</button>  {/*Add muitiple ddevices with loop*/}
          </div>
            
        </div>
    </div>
  )
}
