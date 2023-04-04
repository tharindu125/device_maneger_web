const LocationList = ({detail}) => {
    return(
        <div className="detailForm">
            
            <p><strong>Location Name : </strong>{detail.l_name}</p>
            {/* <p><strong>User Second Name :</strong>{detail.l_name}</p>
            <p><strong>User Mobile Number :</strong>{detail.m_number}</p>
            <p><strong>User E-mail :</strong>{detail.email}</p>
            <p><strong>Created Date :</strong>{detail.createdAt}</p> */}
            
        </div>
    )
}

export default LocationList