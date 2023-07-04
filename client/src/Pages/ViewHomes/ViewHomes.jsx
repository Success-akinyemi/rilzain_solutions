import React, { useEffect, useState } from 'react'
import './ViewHomes.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import HouseList from '../../Components/HouseList/HouseList'
import Footer from '../../Components/Footer/Footer'
//import { ViewHomesData } from '../../data/ViewHomesData'
import { request } from '../../axios'


function ViewHomes() {
    const urlLocation = useLocation() 
    const cat = urlLocation.pathname.split("/")[2]
    const navigate = useNavigate()
    const [ filter, setFilter] = useState({})
    const [select, setSelect] = useState([])


    useEffect(() => {
        const getOptions = async () => {
            try {
                const res = await request.get('/v1/house')
                setSelect(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getOptions()
    },[])

    const handleFilter = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
          ...prevFilter,
          [name]: value,
        }));
    
        // Update the URL with the selected filter options
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(name, value);
        navigate(`?${searchParams.toString()}`);
      };
    console.log(filter)

    const handleReset = () => {
        setFilter({});
      };
    

      const uniqueLocations = Array.from(new Set(select.map(item => item?.location)));

  return (
    <div className='viewHomes'>
        <div className="paddings innerWidth flexCenter div">
                <div className='nav'>
                <h2>
                    <Link to='/' className='link logo'>Rilzain Solutions</Link>
                </h2>
                </div>
                <div className='top'>
                    View Our Home Collections <b>{cat}</b>
                </div>
                
                <div className='sort'>
                    <div className='range'>
                        <span>Select State</span>
                        <select name='location' onChange={handleFilter}>
                            <option >Location</option>
                            {
                                uniqueLocations.map((location) => {
                                    return(
                                        <option value={location} key={location}>{location}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='range'>
                        <span>Selecte Price Range</span>
                        <select name='price' onChange={handleFilter}>
                            <option >Price</option>
                            <option value={5}>Less than five(5) Million</option>
                            <option value={7}>Less than seven(7) Million</option>
                            <option value={10}>Less than ten(10) Million</option>
                            <option value={15}>Less than fifteen(15) Million</option>
                            <option value={1}>Higher Value</option>
                        </select>
                    </div>
                </div>

                <div className='container'>
                {Object.keys(filter).length > 0 ? (
                <div className="filterOptions">
                    Your Filter Option(s): Location: {filter.location} and Price: {filter.price}
                    <button  
                        onClick={handleReset}
                        style={{padding: '5px',
                                color: 'white',
                                background: 'orange',
                                border: 'none',
                                outline: 'none',
                                borderRadius: '6px'}}
                    >
                        Reset Option(s)
                    </button>
                </div>
                ) : (
                <div>All houses</div>
                )}
                    <HouseList cat={cat} filter={filter} />
                </div>

                <div className=" v-footer">
                    <Footer />
                </div>
        </div>
    </div>
  )
}

export default ViewHomes