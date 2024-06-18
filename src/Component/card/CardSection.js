import React from 'react'
import Card from './Card';
// import '../Data.js';

function CardSection() {
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg',
    buttnn: 'Spin'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717632000&semt=sph',
    buttnn: 'Now'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    buttnn: 'Trun'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
    buttnn: 'Lose'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    image: 'https://www.creativefabrica.com/wp-content/uploads/2022/11/16/The-Most-Beautiful-Nature-Photos-46877249-1-1.png',
    buttnn: 'Yadev'
  }
];

  return (
    <div className='d-flex '>

      {people.map((item) => (
        <Card image={item.image} cardTitle={item.name} cardPrag={item.accomplishment} cardBtnn={item.buttnn} />
      ))}

    </div>
  )
}

export default CardSection
