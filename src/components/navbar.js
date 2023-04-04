import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
        <div class="nav">

            <a href="./">
                <button className="nav_btn"><b>Home</b></button>
            </a>

            <a href='/showDetails'>
                <button className="nav_btn"><b>Show Details</b></button>
            </a>
            
            
            
        </div>
    </div>
  )
}
