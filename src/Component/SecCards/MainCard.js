import React from 'react'

function MainCard(props ) {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.userimages} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{
            color: 'red',
          }} className="card-title">{props.userName}</h5>
          <p className="card-text">{props.userProfessional}</p>
        </div>
      </div>
    </>
  )
}

export default MainCard;
