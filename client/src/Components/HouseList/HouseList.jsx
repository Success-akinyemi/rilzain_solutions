import React, { useEffect, useState } from 'react'
import './HouseList.css'
import { ViewHomesData } from '../../data/ViewHomesData'
import { Link } from 'react-router-dom'
import { request } from '../../axios'

function HouseList({cat, filter}) {
    const [houses, setHouses] = useState([]);
    const [filterHouses, setFilterHouses] = useState([]);

    useEffect(() => {
       const getHouses = async ()=> {
        try {
            const res = await request.get(cat ? `/v1/house?location=${cat}` : '/v1/house')
            setHouses(res.data)
        } catch (error) {
         console.log(error)   
        }
       };
       getHouses()
    }, [cat])

    console.log('house>', houses)
    console.log('house len>', houses.length)
    console.log('cat>>', cat)

    useEffect(() => {
        const filteredHouses = houses.filter((item) => {
          return Object.entries(filter).every(([key, value]) => {
            if (key === 'location') {
              return item.location.includes(value);
            }
            if (key === 'price') {
              if (value === '5') {
                return item.price <= 5000000;
              }else if (value === '7'){
                return item.price <= 7000000;
              }else if (value === '10'){
                return item.price <= 10000000;
              }else if (value === '15'){
                return item.price <= 15000000;
              }else if (value === '1'){
                return item.price > 15000000;
              }else {
                return item.price <= parseInt(value, 10);
              }
            }
            return true;
          });
        });
        setFilterHouses(filteredHouses);
      }, [houses, filter]);
    console.log('filter house', filterHouses)

    return (
        <div className="houseList">
            <div className="paddings innerWidth flexCenter houselistWrapper">
              {filterHouses.length > 0 ? (
              filterHouses.map((item) => (
                <div className="flexColStart r-card">
                  <img src={item.img} alt="home" />

                  <span className='secondaryText r-price'>
                      <span style={{color: 'orange'}}>$</span>
                      <span>{item.price}</span>
                  </span>

                  <span className="primaryText">{item.title}</span>
                  <span className="secondaryText">{item.desc}</span>

                  <Link to={`/house/${item._id}`} className="button">
                      SEE MORE
                  </Link>
                </div>
              ))
            ) : (
              <div>No houses match the selected filter options.</div>
            )}
            </div>
        </div>
      );
}

export default HouseList