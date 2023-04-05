const LocationList = ({detail}) => {
    return(
        <div>

            <div className="DeviceForm">
            
                <p><strong>Location Name : </strong>{detail.l_name}</p>
                <a href="./Device" className="Add_device">
                    <button ><b>Add Device</b></button>
                </a>
            
            </div>


        </div>
        
    )
}

export default LocationList