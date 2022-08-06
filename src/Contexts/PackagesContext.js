import React, { createContext, useState } from 'react';

/**
 * Creates the context
 */
export const PackagesContext = createContext()

const PackagesProvider = (props) => {
    
    const useMockData = true;

    const [packages, setPackages] = useState(useMockData ? [
        {
            id: "0", 
            Auctifera__Location__r: {
                Name: 'Conference Room',
                Auctifera__Capacity__c: 30
            },
            Auctifera__Rental_Event__r: {
                Auctifera__Event_Rental_Total_Amount__c: 300,
                Auctifera__Minimum_Deposit_Amount__c: 100,
                Auctifera__Description__c: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh.",
                Auctifera__Disclaimers__c: "The information on this website is for general informational purposes only. [Business name] makes no representation or warranty, express or implied. Your use of the site is solely at your own risk.",
                Auctifera__Insurance_Information__c: "Insurance is a subject matter of solicitation. The information provided in this website cannot substitute for the advice of a licensed professional.",
                Auctifera__Rental_Type__c: "Weddings;Birthday Party",
                Auctifera__Primary_File_Link__c: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
            }
        },
        {
            id: "1", 
            Auctifera__Location__r: {
                Name: 'Conference Room 2',
                Auctifera__Capacity__c: 6
            },
            Auctifera__Rental_Event__r: {
                Auctifera__Event_Rental_Total_Amount__c: 200,
                Auctifera__Minimum_Deposit_Amount__c: 100,
                Auctifera__Description__c: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh.",    
                Auctifera__Disclaimers__c: "The information on this website is for general informational purposes only. [Business name] makes no representation or warranty, express or implied. Your use of the site is solely at your own risk.",
                Auctifera__Insurance_Information__c: "Insurance is a subject matter of solicitation. The information provided in this website cannot substitute for the advice of a licensed professional.",
                Auctifera__Rental_Type__c: "Weddings",
                Auctifera__Primary_File_Link__c: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
            }
        },
        {
            id: "2", 
            Auctifera__Location__r: {
                Name: 'Conference Room 3',
                Auctifera__Capacity__c: 10
            },
            Auctifera__Rental_Event__r: {
                Auctifera__Event_Rental_Total_Amount__c: 100,
                Auctifera__Minimum_Deposit_Amount__c: 50,
                Auctifera__Description__c: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh.",
                Auctifera__Disclaimers__c: "The information on this website is for general informational purposes only. [Business name] makes no representation or warranty, express or implied. Your use of the site is solely at your own risk.",
                Auctifera__Insurance_Information__c: "Insurance is a subject matter of solicitation. The information provided in this website cannot substitute for the advice of a licensed professional.",
                Auctifera__Rental_Type__c: "Birthday Party",
                Auctifera__Primary_File_Link__c: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
            }
        },
        {
            id: "3", 
            Auctifera__Location__r: {
                Name: 'Conference Room 4',
                Auctifera__Capacity__c: 300
            },
            Auctifera__Rental_Event__r: {
                Auctifera__Event_Rental_Total_Amount__c: 600,
                Auctifera__Minimum_Deposit_Amount__c: 10,
                Auctifera__Description__c: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh.",
                Auctifera__Disclaimers__c: "The information on this website is for general informational purposes only. [Business name] makes no representation or warranty, express or implied. Your use of the site is solely at your own risk.",
                Auctifera__Insurance_Information__c: "Insurance is a subject matter of solicitation. The information provided in this website cannot substitute for the advice of a licensed professional.",
                Auctifera__Rental_Type__c: "Reception Only;Birthday Party",
                Auctifera__Primary_File_Link__c: 'https://assets.puzzlefactory.pl/puzzle/254/191/original.jpg'
            }
        },
    ] : [])
    return (
        <PackagesContext.Provider value={{packages, setPackages}}>
            {props.children}
        </PackagesContext.Provider>
    )
}

export default PackagesProvider