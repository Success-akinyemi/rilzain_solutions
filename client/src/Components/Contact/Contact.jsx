import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {toast, Toaster} from 'react-hot-toast'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gb7l223', 'template_9avjkpd', form.current, 'ZuCHPV3PtsUz67lmJ')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
            e.target.reset()
            toast.success('Message sent')
        }, (error) => {
            console.log(error.text);
            toast.error('We are sorry Message not sent please try again')
        });
    };


  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact</span>
                <span className='secondaryText'>beleive a good place to live can make your life better</span>
            
                <div className="flexColStart contactModes">
                        {/**Frist Row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+2347025073509</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a target='_blank' href='tel:+2347025073509'>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/**Second Item */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <IoLogoWhatsapp size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Whatsapp</span>
                                    <span className='secondaryText'>0702 507 3509</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a target='_blank' href="https://wa.me/2347025073509?text=Hello Rilzain solutions">
                                    Chat Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/**Second Row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <AiFillInstagram size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Instagram</span>
                                    <span className='secondaryText'>rilzainsolutions</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="https://www.instagram.com/rilzainsolutions" target='_blank'>
                                Dm Us on Instagram
                                </a>
                            </div>
                        </div>

                        {/**Fourth Item */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>0702 507 3509</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                <a href="sms:+2347025073509" target='_blank'>
                                    Message Now 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>



            <div className="c-right">
                <div className="form">
                    <Toaster position="top-center" reverseOrder={false}></Toaster>
                    <h2>Have any Question? We Love To Hear You.</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" className='button'/>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact