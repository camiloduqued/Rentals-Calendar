import React, { createContext, useState } from 'react';

/**
 * Creates the context
 */
export const SummaryContext = createContext()

const SummaryProvider = (props) => {
    const [summary, setSummary] = useState({})
    return (
        <SummaryContext.Provider value={{summary, setSummary}}>
            {props.children}
        </SummaryContext.Provider>
    )
}

export default SummaryProvider