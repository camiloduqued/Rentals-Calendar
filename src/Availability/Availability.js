import React, {useContext, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import './Availability.scss';
import {PackagesContext} from "../Contexts/PackagesContext";
import PackageItem from "./components/PackageItem"

/*
  Time picker library
*/
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Availability() {
  const {packages} = useContext(PackagesContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date().setHours(new Date().getHours() + 1));

  const handleDateClick = (elem) =>{
    let calendarCells = document.getElementsByClassName("fc-daygrid-day");
    for(let cell of calendarCells){ 
      cell.classList.remove("day-selected")
    }
    elem.dayEl.classList.add("day-selected")
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="availability-cmp">
        <section className='availability-cmp_warapper'>
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
                    <TimePicker
                      value={startDate}
                      onChange={(newValue) => {
                        setStartDate(newValue);
                        console.log(newValue)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <span className="to-label">To</span>
                    <TimePicker
                      value={endDate}
                      onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </div>

                <div className="availability-cmp_guests-wrapper">
                  <div>5. Number of guests</div>
                  <input/>
                </div>
              </div>
            </article>
            
            <article className='availability-cmp_packages-col'>
              <ul>
                {packages.map((pack, index) => {
                  return <PackageItem rentalPackage={pack} key={index}/>;
                })}
              </ul>
            </article>
        </section>
    </div>
    </LocalizationProvider>
  );
}

export default Availability;