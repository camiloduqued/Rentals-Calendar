import React, { createContext, useState } from 'react';

/**
 * Creates the context
 */
export const StepsContext = createContext()

const StepsProvider = (props) => {
    const [step, setStep] = useState("Availability")
    return (
        <StepsContext.Provider value={{step, setStep}}>
            {props.children}
        </StepsContext.Provider>
    )
}

export default StepsProvider