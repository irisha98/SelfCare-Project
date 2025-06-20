import Buttons from './Buttons';
import './mood.css'
import { data } from './data';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

function Mood () {

   const [selectedCategory, setSelectedCategory] = useState();
   const categories = data.map((item) => item.category);
   const selectedData = data.find((item) => item.category ===selectedCategory );

    return (
    <div className='mood-page'
    >
        <h1>SelfCare Collections</h1>
        <Buttons categories={categories} onClick={setSelectedCategory} />
        {selectedData && (
            <div className='slider-wrapper'>
            <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
                {
                    breakpoint:768,
                    settings:{
                        slidesToShow:2,
                    },
                },
                {
                    breakpoint:480,
                    settings:{
                        slidesToShow:1,
                    },
                }
            ]}
            >
                {selectedData.items.map((item, index) => (
                    <div key={index} className='slide-card'>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}

</Slider>
</div>
        )}
    </div>
   )
}
 export default Mood;