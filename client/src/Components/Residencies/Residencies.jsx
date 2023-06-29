import React, { useEffect, useState } from 'react'
import './Residencies.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import { request } from '../../axios'

function Residencies() {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        const getHouses = async () => {
          try {
            const res = await request.get('/v1/house');
            const latestHouses = res.data.slice(0, 6); // Limit the houses to the latest six
            setHouses(latestHouses);
          } catch (error) {
            console.log(error);
          }
        };
      
        getHouses();
      }, []);

      console.log('houses slider', houses)


  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings} >
                <SliderButtons />
                {
                    houses.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Link to={`/house/${item._id}`} className='link'>
                            <div className="flexColStart r-card">
                                <img src={item.img} alt="home" />

                                <span className='secondaryText r-price'>
                                    <span style={{color: 'orange'}}>$</span>
                                    <span>{item.price}</span>
                                </span>

                                <span className="primaryText">{item.title}</span>
                                <span className="secondaryText">{item.desc}</span>
                            </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}