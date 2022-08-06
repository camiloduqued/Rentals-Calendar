import React, {useContext, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import './Availability.scss';
import {PackagesContext} from "../Contexts/PackagesContext";
import PackageItem from "./components/PackageItem";
import moment from 'moment';
import {TimePicker} from "antd";
import {motion} from "framer-motion"


function Availability() {
  const {packages} = useContext(PackagesContext);

  const handleDateClick = (elem) =>{
    let calendarCells = document.getElementsByClassName("fc-daygrid-day");
    for(let cell of calendarCells){ 
      cell.classList.remove("day-selected")
    }
    elem.dayEl.classList.add("day-selected")
  }

  const handleSelectTime = (type, momentObj) =>{
    if(type === "startTime"){
      // execute when start time
      console.log(type + ": "+ momentObj)
    }else{
      // execute when end time
      console.log(type + ": "+ momentObj)
    }
  }
  return (
    <div className="availability-cmp">
        <section className='availability-cmp_wrapper'>
            <article className='availability-cmp_calendar-col'>
              <div className="availability-cmp_type-wrapper">
                <label htmlFor="categorySelector">1. Select a category according to your category</label>
                <select id="categorySelector">
                  <option value="Weddings">Weddings</option>
                  <option value="Birhdays">Birhdays</option>
                  <option value="Reception Only">Reception Only</option>
                </select>
              </div>
              <div className='availability-cmp_calendar_wrapper'>
                <div>2. Select the day you want for your activity</div>
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin ]}
                  initialView="dayGridMonth"
                  dateClick={handleDateClick}
                />
                <div className="availability-cmp_timerange-wrapper">
                  <div>3. Select the time frame for your activity</div>
                  <div className="availability-cmp_timerange-cont">
                   <TimePicker use12Hours onSelect={(time) => handleSelectTime("startTime", time)}/>
                    <span>To</span>
                   <TimePicker use12Hours onSelect={(time) => handleSelectTime("endTime", time)}/>
                  </div>
                </div>

                <div className="availability-cmp_guests-wrapper">
                  <div>4. Number of guests</div>
                  <input/>
                </div>
              </div>
            </article>
            
            <article className='availability-cmp_packages-col'>
              <motion.ul>
                {packages.map((pack, index) => {
                  return <PackageItem rentalPackage={pack} key={index}/>;
                })}
              </motion.ul>
            </article>
        </section>
    </div>
  );
}

export default Availability;