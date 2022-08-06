
import './Layout.scss';
import React, { useContext } from 'react';
import Availability from "../Availability/Availability";
import Registration from "../Registration/Registration";
import Payment from "../Payment/Payment";
import {StepsContext} from "../Contexts/StepsContext";
import StepsHeader from "../components/StepsHeader"
import { motion, AnimatePresence } from "framer-motion";
/**
 *  Global variables for animations and transitions
*/
const transition = { type: "tween", ease: "anticipate", duration: .8 }
const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -30 }
}
const stepsVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 30 }
}

const Layout = (props) => {
  const {step, setStep} = useContext(StepsContext)
  const renderComponents = () =>{
    switch(step){
      case "Registration":
        return (
          <motion.div 
            key="0"
            initial="hidden"
            animate="visible"
            exit="out"
            variants={stepsVariants}
            transition={transition}>
            <Registration/>
          </motion.div>
        )
      case "Payment":
        return (
          <motion.div 
            key="1"
            initial="hidden"
            animate="visible"
            exit="out"
            variants={stepsVariants}
            transition={transition}>
            <Payment/>
          </motion.div>
        )
      default:
        return (
          <motion.div 
            key="2"
            initial="hidden"
            animate="visible"
            exit="out"
            variants={stepsVariants}
            transition={transition}>
              <Availability/>
          </motion.div>
        )
    }
  }

  return (
    <div className="layout">
    <StepsHeader step={step} changeStep={setStep}/>
    <AnimatePresence exitBeforeEnter>
        {renderComponents()}
    </AnimatePresence>
    </div>
  );
}

export default Layout;