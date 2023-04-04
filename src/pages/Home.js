import React from 'react'


export default function Home() {
  return (
    <div>

        <div>
            <h1 className='heading_1'>BE SMART ,</h1>
            <h1 className='heading_2'>Manage Your Multiple devices with location</h1>
            
            <a href="./location" className='a'>
                <button class="block"><b>Add Location</b></button>
            </a>
            
            <a href="./Device" className='a'>
                <button class="block"><b>Add Device</b></button>
            </a>

        </div>

       
    </div>
  )
}
