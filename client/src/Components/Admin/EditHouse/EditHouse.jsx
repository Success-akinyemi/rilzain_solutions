import React, { useState, useEffect } from 'react'
import './EditHouse.css'
import { useLocation } from 'react-router-dom' 
import { request } from '../../../axios';
import { State } from '../../../data/States';
import { Toaster, toast } from 'react-hot-toast';

function EditHouse() {
  const location = useLocation();
  const id = location.pathname.split('/')[2]
  const [house, setHouse] = useState({})

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [address, setAddress] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [img, setImg] = useState('')
  const [imgArray, setImgArray] = useState('')
  const [desc, setDesc] = useState('')


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
  console.log('house', house)

  const updateForm = async () =>{
    const data = {};

    if (title !== '') data.title = title;
    if (price !== '') data.price = price;
    if (address !== '') data.address = address;
    if (newLocation !== '') data.location = newLocation;
    if (img !== '') data.img = img;
    if (imgArray !== '') data.imgArray = imgArray;
    if (desc !== '') data.desc = desc;
    
    try {
      toast.loading('Updating Please Wait...')
      const updatedData = await request.put(`/v1/house/${id}`, data)

      console.log('updated successfully', updatedData)
      toast.success('House Updated Successfull')
    } catch (error) {
      console.log(error)
      toast.error('Failed to upload House')
    }

  }

  const setNewLocationValue = (value) => {
    setNewLocation(value);
  };

  console.log('new location', newLocation)

  return (
    <div className='editHouse pages'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="left">
        <h2>EDIT HOUSE</h2>

        <div className="content">
          <form onSubmit={updateForm} >
            <div className='item'>
              <label>Title:</label>
              <input  type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder={house.title} />
            </div>

            <div className='item'>
              <label>Price:</label>
              <input  type="number"  name='price' value={price} onChange={(e) => setPrice(e.target.value)}  placeholder={house.price} />
            </div>

            <div className='item'>
              <label>Address</label>
              <input  type="text" name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder={house.address} />
            </div>

            <div className='item'>
              <label>Location: (Current Location:  {house.location})</label>
              <select  name="location" value={newLocation} onChange={(e) => setNewLocationValue(e.target.value)}>
              <option >Select State</option>
                {State.map((item, idx) => (
                  <option key={idx} value={item.value}>
                    {item.location}
                  </option>
                ))}
                </select>
            </div>

            <div className='item'>
              <label htmlFor='img'>Main Image:</label>
              <input  type="file"  name='img' value={img} onChange={(e) => setImg(e.target.value)} accept='image/jpeg image/png' style={{border: 'none'}}/>
            </div>

            <div className='item'>
              <label htmlFor='imgArray'>Showcase Images:</label>
              <input type="file"  multiple name='imgArray' value={imgArray} onChange={(e) => setImgArray(e.target.value)} accept='image/jpeg image/png' style={{border: 'none'}}/>
            </div>

            <div className='item desc'>
              <label>Description:</label>
              <textarea  type="text" name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder={house.desc} rows='1' cols='1' ></textarea>
            </div>

            <button>Edit House</button>
          </form>
        </div>

        </div>
        
        <div className="right">
          <div className="top">
            <span>Current House Image</span>
            <img className='image' src={house.img} alt={`house in ${house.address}`} />
          </div>
        </div>
    </div>
  )
}

export default EditHouse