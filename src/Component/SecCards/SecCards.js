import React from 'react'
import MainCard from './MainCard';
import Img_One from './images/savan.png'
import Img_Two from './images/deepak.png'

function SecCards() {

  const userDetails = [{
    name: 'Sawan Kumar Yadav',
    professional: 'Frontend Developer',
    userImg: Img_One,
  },
  {
    name: 'Deepak Kumawat',
    professional: 'Frontend Developer',
    userImg: Img_Two,
  },
  {
    name: 'Rahul Yadav',
    professional: 'Frontend Developer',
    userImg: Img_Two,
  },
  {
    name: 'raosaab',
    professional: 'Frontend Developer',
    userImg: Img_Two,
  }


  ];

  const data = [];
  for (let i = 0; i < 1; i++) {
    data.push(
      <MainCard userName={userDetails[0].name} userimages={userDetails[0].userImg} userProfessional={userDetails[0].professional} />

    )
  }

  const shoot = (a) => {
    alert(a);
  }
  

  return (
    <>
      <div>
        <div className='d-flex justify-content-center'>
          {userDetails.map((item) => (
            <MainCard userName={item.name} userimages={item.userImg} userProfessional={item.professional} />
          ))}
        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          {data}
        </div>

        <div>
          <button onClick={() => shoot("Goal!")}>Take the shot!</button>
        </div>

        <div>
          
        </div>
      </div>
    </>
  )
}

export default SecCards;
