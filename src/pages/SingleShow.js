import React, { useState, useEffect } from 'react'

import ShowSingleLocation from '../components/ShowAllLocation'
import ShowDevice from '../components/ShowSingle'

export default function SingleShow() {

  const [showLD, setShowLD] = useState(null) //To show Specific Location
  const [showdevice, setShowDevice] = useState(null) //To show all devices in Specific Location

  //To show Specific Location
  useEffect(() => {
    const fetchLD = async () => {
       
        
        const search = window.location.search; // returns the URL query String
        const params = new URLSearchParams(search); 
        const locationFromURL = params.get('l_name');
        console.log(locationFromURL)

        const res = await fetch(`/location/${locationFromURL}` )
        const json = await res.json()
        console.log(json)

        if (res.ok) {
          setShowLD(json)
        }
    }

    fetchLD()
  }, [])

  //To show all devices in Specific Location
  useEffect(() => {
    const fetchLD = async () => {

      const search = window.location.search; // returns the URL query String
      const params = new URLSearchParams(search); 
      const locationFromURL = params.get('l_name');
      console.log(locationFromURL)

        const res = await fetch(`/device/${locationFromURL}` )
        const json = await res.json()
        console.log(json)

        if (res.ok) {
          setShowDevice(json)
        }
    }

    fetchLD()
  }, [])


  return (
    <>
        <div className='locationMain'>

              <div>
              <   h1 className='show_h1'>All Locations</h1>
              </div>
              {/* To show Specific Location */}
              <div className='form'>

                  {showLD &&
                          <ShowSingleLocation key={showLD._id} detail={showLD}/>
                  }  
 
              </div>
              <br/>
              {/* To show all devices in Specific Location */}
              <div className='form'>

                  {showdevice && showdevice.map((detail) => (
                          <ShowDevice key={detail._id} detail={detail}/>
                  ))}   
                    
              </div>

                  
        </div>
    </>
  )
}
