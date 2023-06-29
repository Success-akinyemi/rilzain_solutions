import React, { useEffect, useState, useRef } from 'react'
import './House.css'
//import Image from '../../images/imageOne.jpg'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { request } from '../../axios'
import {BiArrowFromLeft, BiArrowFromRight} from 'react-icons/bi'
//import ArrowLeft from '@mui/icons-material/ArrowLeftRounded'
//import ArrowRight from '@mui/icons-material/ArrowRightOutlined'
//import zIndex from '@mui/material/styles/zIndex'

function House() {
  const [house, setHouse] = useState({ imgArray: [], title: '', price: '', desc: '', address: '', location: '' });
  const location = useLocation()
  const id = location.pathname.split("/")[2]


  const [current, setCurrent] = useState(0);



  useEffect(() => {
    const getHouse = async () => {
      try {
        const res = await request.get(`/v1/house/${id}`)
        setHouse(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getHouse()
  }, [id])

  const houseImgArray = house.imgArray
  console.log('houseImgArray', houseImgArray)
  const length = houseImgArray.length
  console.log('data length >>', length)
  const timeout =useRef(null)

{ /**  useEffect(() =>{
      const nextSlide= () => {
          setCurrent(current => (current === length - 1 ? 0 : current + 1))
      }

      timeout.current = setTimeout(nextSlide, 2000)
      return function(){
          if(timeout.current){
              clearTimeout(timeout.current)
          }
      }
  },[current, length])
*/}

useEffect(() => {
  const nextSlide = () => {
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  const timeout = setTimeout(nextSlide, 2000);

  return () => {
    clearTimeout(timeout);
  };
}, [current, length]);



  const nextSlide = () => {
      if(timeout.current){
          clearTimeout(timeout.current)
      }

      setCurrent(current === length - 1 ? 0 : current + 1)

      console.log(current)
  }

  const prevSlide = () =>{
      if(timeout.current){
          clearTimeout(timeout.current)
      }

      setCurrent(current === 0 ? length -1 : current - 1)
      
      console.log(current)
  }

{/**   if(!Array.isArray(houseImgArray) || houseImgArray.length <= 0){
      return null
  }*/}






  return (
    <div className='house'>
      <div className='top' >

        <div className='houseImg'>
          <img src={house?.img} alt='house' className='mainImg' />
          <div className='imageSlider'>
            <span>House Images</span>
           
            <div className='imageSliderContent'>
              {length > 0 ?
                <>

              <div className='imageSliderItem' style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                
                  houseImgArray.map((item, idx) => {
                    return(
                      <img src={item} alt='house' key={idx}/>
                    )
                  }) 
                }
              </div>
                <div className='arrow_control'>
                  <BiArrowFromRight className='arrow left' onClick={prevSlide}/>
                  <BiArrowFromLeft className='arrow right' onClick={nextSlide}/>
                </div>
                </> :
                <span style={{color: 'red', font: '35px'}}>Not Display Images Yet</span>
                }
            </div>
           
            <span style={{
              width: '100%',
              fontSize: '19px',
              fontWeight: 'bolder',
              marginTop: '5px'
            }}>
              House ID: {id}
            </span>
          </div>
        </div>

        <div className='houseInfo'>
          <div className='infoContent'>
            <div className='item'>
              <h2>Title:</h2>
              <span>{house?.title}</span>
            </div>

            <div className='item'>
              <h2>Price:</h2>
              <span className='price'>NGN {house?.price}</span>
            </div>            
            
            <div className='item'>
              <h2>Description:</h2>
              <span>{house?.desc}</span>
            </div>            
            
            <div className='item'>
              <h2>Address:</h2>
              <span>{house?.address}</span>
            </div>

            <div className='item'>
              <h2>Location:</h2>
              <span>{house?.location}</span>
            </div>            

          </div>

          <button className='button'>
            <a target='_blank' href="https://wa.me/2347025073509?text=Hello Rilzain solutions">
              Contact us now via Whatsapp
            </a>
          </button>
        </div>
      </div>

      <Contact />

      <div className="h-footer">
        <Footer />
      </div>

    </div>
  )
}

export default House