
import './Layout.scss';
import React, { useContext } from 'react';
import Availability from "../Availability/Availability";
import Registration from "../Registration/Registration";
import Payment from "../Payment/Payment";
import {StepsContext} from "../Contexts/StepsContext";
import StepsHeader from "../components/StepsHeader"

const Layout = (props) => {
  const {step, setStep} = useContext(StepsContext)
  const renderComponents = () =>{
    switch(step){
      case "Registration":
        return <Registration/>
      case "Payment":
        return <Payment/>
      default:
        return <Availability/>
    }
  }

  return (
    <div className="layout">
    <StepsHeader step={step} changeStep={setStep}/>
        {renderComponents()}
    </div>
  );
}

export default Layout;