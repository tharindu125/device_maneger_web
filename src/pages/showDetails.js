import React from 'react'

export default function showDetails() {
  return (
    <div>
         <div className='locationMain'>
              
              <div>
                    <h1 className='show_h1'>To Show All Locations</h1>
                    
                    <a href="./AllShow" className='a'>
                        <button class="show_btn"><b>Click</b></button>
                    </a>
              </div>
              
              <div>
                    <h1 className='show_h1'>To Show a Location & Devices</h1>
                    
                    <a href="./SingleShow" className='a'>
                        <button class="show_btn"><b>Click</b></button>
                    </a>
              </div>

          </div>
    </div>
  )
}
