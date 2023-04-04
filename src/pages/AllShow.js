import React, { useState, useEffect } from 'react'
import ShowAll from '../components/ShowAll'

export default function AllShow() {

    const [showLocation, setShowLocation] = useState(null)

    useEffect(() => {
        const fetchLocation = async () => {
  
            const res = await fetch('/location' )
            const json = await res.json()
            console.log(json)
  
            if (res.ok) {
              setShowLocation(json)
            }
        }
  
        fetchLocation()
      }, [])


  return (
    <>
        <div className='locationMain'>

            <div>
                <h1 className='show_h1'>All Locations</h1>
                </div>
                <div className='form'>

                {showLocation && showLocation.map((detail) => (
                        <ShowAll key={detail._id} detail={detail}/>
                ))}   
                        
            </div>
                    
        </div>
    </>
  )
}
