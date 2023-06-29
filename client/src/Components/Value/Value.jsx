import React, { useState } from 'react'
import './Value.css'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'

function Value() {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>

        <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give To You</span>
            <span className='secondaryText'>
              We always ready to help by providing the best services for You
              <br />
              We believe a good place to live will make your life better.
            </span>

            <Accordion
              allowMultipleExpanded={false}
              preExpanded={[0]}
              className='accordion'
            >
              {
                data.map((item,idx) => {
                  const [className, setClassName] =useState(null);
                  return(
                    <AccordionItem
                      className={`accordionItem ${className}`}
                      key={idx}
                      uuid={idx}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionButton'>
                          
                          <AccordionItemState>
                            {({expanded}) => expanded ? setClassName('expanded') : setClassName('collased')}
                          </AccordionItemState>

                          <div className="flexCenter icon">
                            {item.icon}
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value