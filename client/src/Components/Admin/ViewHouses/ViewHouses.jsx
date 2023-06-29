import React, { useState, useEffect } from 'react'
import './ViewHouses.css'
import { ViewHomesData } from '../../../data/ViewHomesData'
import { Link } from 'react-router-dom'
import { request } from '../../../axios'

function ViewHouses() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const getHouse = async () => {
      try {
        const res = await request.get('/v1/house')
        setHouses(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getHouse()
  }, [])
  console.log('houses', houses)

  const handleDelete = async (houseId) => {
    const confirmed = window.confirm('Are you sure you wantto delete?')
    if(confirmed){
      try {
        await request.delete(`/v1/house/${houseId}`);
        setHouses((prevHouses) => prevHouses.filter((house) => house._id !== houseId));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='viewHouses pages'>
        <div className='top'><h2>All HOUSES ({houses.length} House(s))</h2></div>
        <div className='bottom'>
        {
                houses.map((item) => {
                    return(

                        <div className='card' key={item._id}>
                            <div className='cardContent'>
                              <img src={item.img} alt={`house ${item._id}`} />
                                <div className='content'>
                                    <h2>{item.title}</h2>
                                    <h3>Price (NGN): <span>{item.price}</span></h3>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <h3>Address: {item.address}</h3>
                                    <h3>Location: {item.location}</h3>
                                </div>
                            </div>
                            <div className='option'>
                              <Link to={`/editHouse/${item._id}`} className='btn'>Edit</Link>
                              <Link className='btn' style={{background: 'tomato'}} onClick={() => handleDelete(item._id)}>Delete</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ViewHouses