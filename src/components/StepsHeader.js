import { useContext, useEffect, useState } from "react";
import { SummaryContext } from "../Contexts/SummaryContext";
import "./StepsHeader.scss";

const StepsHeader = ({step, changeStep}) =>{
    const {summary} = useContext(SummaryContext);
    const [width, setWidth] = useState("0%")
    const isValidStep = () =>{
        console.log("summary >>> ", summary);
        if(summary){
            if(summary.category 
                && summary.date 
                && summary.timeRange 
                && summary.numberOfGuests 
                && summary.item){
                return true;
            }
        }
        return false
    }

    useEffect(()=>{
        switch(step){
            case "Registration":
                setWidth("50%");
                break;
            case "Payment":
                setWidth("100%");
                 break;
            default:
                setWidth("0%");
        }
    }, [step])
    return (
        <section className='steps-header'>
            <ul>
                <li onClick={() => changeStep("Availability")}>
                    <div className="circle"></div>
                    <div className="label">Availability</div>
                </li>
                <li onClick={() => changeStep("Registration")} className={isValidStep() ? '': 'disabled'}>
                    <div className="circle"></div>
                    <div className="label">Registration</div>
                </li>
                <li  onClick={() => changeStep("Payment")} className={summary?.item && summary?.contact ? '': 'disabled'}>
                    <div className="circle"></div>
                    <div className="label">Payment</div>
                </li>
                <li className="progress-indicator">
                    <div className="bar" style={{width: width}}></div>
                </li>
            </ul>
        </section>
    )
}

export default StepsHeader