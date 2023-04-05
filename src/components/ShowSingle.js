const LDList = ({detail, deleteContact}) => {
    return(
        <div className="DeviceForm">
            
            <div>
                <p> <strong>&#9898; Device Serial number :</strong>{detail.s_number} </p>
                <p> <strong>Device Type :</strong>{detail.d_type} </p>
            </div>
            
            <div className="deletedevice">
                <button onClick={()=>{deleteContact()}}>Delete</button>
            </div>         
            
        </div>
    )
}

export default LDList