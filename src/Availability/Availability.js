import React, {useContext, useEffect, useState} from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import './Availability.scss';
import {PackagesContext} from "../Contexts/PackagesContext";
import PackageItem from "./components/PackageItem";
import {TimePicker} from "antd";
import {motion} from "framer-motion"
import { SummaryContext } from "../Contexts/SummaryContext";
import Service from '../service.lib'
import Spinner from "../components/Spinner";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

function Availability() {
  const {packages, setPackages} = useContext(PackagesContext);
  const {summary, setSummary} = useContext(SummaryContext);
  const [isFetching, setIsFetching] = useState(false);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [category, setCategory] = useState();
  const [rentalDate, setRentalDate] = useState();

  const handleDateClick = (elem) =>{
    let calendarCells = document.getElementsByClassName("fc-daygrid-day");
    if(elem.dayEl.classList.contains("fc-day-past")) return;

    for(let cell of calendarCells){ 
      cell.classList.remove("day-selected")
    }
    elem.dayEl.classList.add("day-selected")
    setRentalDate(elem.date);
    summary.date = elem.date;
    summary.dateString = elem.dateStr;
    setSummary(summary);
  }

  const handleNumberOfGuests = (numGuests) =>{
    summary.numberOfGuests = numGuests;
    setNumberOfGuests(numGuests);
    setSummary(summary);
  }

  useEffect(() => {
    const validFilters = () =>{
      if(numberOfGuests != null && numberOfGuests.trim() !== "" && 
      category != null && category.trim() !== "" &&
      rentalDate != null && 
      startTime != null && 
      endTime != null) {
        return true;
      }
      return false
    }
    if(validFilters()){
      setIsFetching(true);
    }
    const fetchTemplates = async () => {
      if (validFilters()) 
      {
        const service = new Service();
        const packages = await service.getRentals(parseInt(numberOfGuests), category, rentalDate.getTime(), startTime, endTime);
        setPackages(packages)
        setIsFetching(false);
      }
      setIsFetching(false);
    }
    fetchTemplates()
  }, [numberOfGuests, category, rentalDate, startTime, endTime])

  const handleSelectTime = (momentObj) =>{
    summary.timeRange = momentObj;
    setStartTime(momentObj[0])
    setEndTime(momentObj[1])
    setSummary(summary);
  }

  const onChangeCategory = (category) => {
    summary.category = category;
    setCategory(category);
    setSummary(summary);
  }

  useEffect(()=>{
    let calendarCells = document.getElementsByClassName("fc-daygrid-day");
    let foundCell
    for(let cell of calendarCells){ 
      cell.classList.remove("day-selected")
      if(cell.getAttribute('data-date') === summary.dateString){
        foundCell = cell;
      }
    }
    if(foundCell){
      foundCell.classList.add("day-selected")
    }
  },[])
  return (
    <div className="availability-cmp">
        <section className='availability-cmp_wrapper'>
            <article className='availability-cmp_calendar-col'>
              <div className="availability-cmp_type-wrapper">
                <label className="step-title" htmlFor="categorySelector">1. Select a category according to your category</label>
                <select id="categorySelector" onChange={(event) => onChangeCategory(event.target.value)} value={summary?.category}>
                  <option value=""> Select a category </option>
                  <option value="Birthday Party" defaultValue={summary?.category === "Birthday Party" ? true:false}>Birthday Party</option>
                  <option value="Weddings" defaultValue={summary?.category === "Weddings" ? true:false}>Wedding</option>
                  <option value="Reception Only" defaultValue={summary?.category === "Reception Only" ? true:false}>Reception Only</option>
                </select>
              </div>
              <div className='availability-cmp_calendar_wrapper'>
                <div className="step-title">2. Select the day you want for your activity</div>
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin ]}
                  initialView="dayGridMonth"
                  initialDate={summary.dateString}
                  dateClick={handleDateClick}
                  headerToolbar={{start: 'title', center: '', right: 'prev,next'}}
                />
                <div className="availability-cmp_steps-wrapper">
                  <div className="availability-cmp_timerange-wrapper">
                    <div className="availability-cmp_timerange-cont">
                      <div className="step-title">3. Select the time frame for your activity</div>
                      <TimePicker.RangePicker 
                        use12Hours 
                        onChange={(time) => handleSelectTime(time)} 
                        format="hh:mm a"
                        minuteStep={5}
                        defaultValue={summary.timeRange}/>
                    </div>
                  </div>

                  <div className="availability-cmp_guests-wrapper">
                    <div className="step-title">4. Number of guests</div>
                    <input className="guests-input" type="number" 
                      onChange={(event) => handleNumberOfGuests(event.target.value)}
                      defaultValue={summary.numberOfGuests}/>
                  </div>
                </div>
              </div>
            </article>
            
            <article className='availability-cmp_packages-col'>
            <div className="list-wrapper">
              {isFetching && <Spinner/>}
                <motion.ul
                  variants={container}
                  initial="hidden"
                  animate="show">
                  <li className="step-title">5. Choose the package for you</li>
                  {!packages || packages.length === 0 ? (
                    <li className="packages-warning">The packages will be available once you fill out all the fields</li>
                  ):(
                    packages.map((pack, index) => {
                      return (
                        <PackageItem rentalPackage={pack} key={index} variants={item}/>
                      );
                    })
                  )}
                </motion.ul>
            </div>
            </article>
        </section>
    </div>
  );
}

export default Availability;