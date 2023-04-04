import React, { useState } from 'react'

export default function SingleShowLogin() {

    const [l_name, setName] = useState('')


  return (
    <div>

        <div className='locationMain'>

          <div>
          <h1 className='SingleShowLogin_H'>What location Do you want to search?</h1>
            <input type='text' placeholder='Type here' value={l_name} onChange={e => setName(e.target.value)} />
            
            <button className='location_btn' >Search</button>
           
          </div>
            
        </div>

    </div>
  )
}
