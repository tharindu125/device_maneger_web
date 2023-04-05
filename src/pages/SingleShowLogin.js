import React, { useState } from 'react'

export default function SingleShowLogin() {

    const [l_name, setName] = useState('')

    const SrarchLocation = async() => {
      try {
        const res = await fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({l_name})
        })
        const data = await res.json()
        if (!res.ok) {
            const {error} = data;
            throw Error(error)
        }
        if (res.ok) {
          alert("success")
          window.location.href = `/SingleShow?l_name=${l_name}`
        }
    } catch (error) {
        console.log(error);
        
    }
    }



  return (
    <div>

        <div className='locationMain'>

          <div>
          <h1 className='SingleShowLogin_H'>What location Do you want to search?</h1>
            <input type='text' placeholder='Type here' value={l_name} onChange={e => setName(e.target.value)} />
            
            <button className='location_btn' onClick={SrarchLocation} >Search</button>
           
          </div>
            
        </div>

    </div>
  )
}
