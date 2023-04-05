const LDList = ({detail}) => {
    return(
        <div className="DeviceForm">
            
            
            <p> <strong>&#9898; Device Serial number :</strong>{detail.s_number} </p>
            <p> <strong>Device Type :</strong>{detail.d_type} </p>
            
        </div>
    )
}

export default LDList