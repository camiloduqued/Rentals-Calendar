import React, { createContext, useState } from 'react';

/**
 * Creates the context
 */
export const SummaryContext = createContext()

const SummaryProvider = (props) => {
    const [summary, setSummary] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [paymentCompleted, setPaymentCompleted] = useState(false)
    return (
        <SummaryContext.Provider value={{summary, setSummary, isFetching, setIsFetching, paymentCompleted, setPaymentCompleted}}>
            {props.children}
        </SummaryContext.Provider>
    )
}

export default SummaryProvider