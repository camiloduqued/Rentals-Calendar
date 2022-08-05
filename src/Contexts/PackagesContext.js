import React, { createContext, useState } from 'react';

/**
 * Creates the context
 */
export const PackagesContext = createContext()

const PackagesProvider = (props) => {
    const [packages, setPackages] = useState([
        {
            id: "0", 
            capacity: 30, 
            price: 300, rentalType: "Weddings",
            minimumDeposit: 100,
            description: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh. Nullam bibendum dolor et urna hendrerit, vel vulputate turpis posuere. Integer ultrices odio a lacus scelerisque, nec aliquam lacus rutrum. Morbi tempus felis at tincidunt vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porttitor, risus quis ullamcorper eleifend, eros augue aliquam ipsum, sit amet tincidunt velit metus in sapien. Pellentesque bibendum sapien dui, vitae tempus augue fringilla eu."
        },
        {
            id: "1", 
            capacity: 20, 
            price: 300, 
            rentalType: "Weddings;Birthdays", 
            minimumDeposit: 100,
            description: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh. Nullam bibendum dolor et urna hendrerit, vel vulputate turpis posuere. Integer ultrices odio a lacus scelerisque, nec aliquam lacus rutrum. Morbi tempus felis at tincidunt vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porttitor, risus quis ullamcorper eleifend, eros augue aliquam ipsum, sit amet tincidunt velit metus in sapien. Pellentesque bibendum sapien dui, vitae tempus augue fringilla eu."
        },
        {
            id: "2", 
            capacity: 10, 
            price: 350, 
            rentalType: "Birthdays", 
            minimumDeposit: 150,
            description: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh. Nullam bibendum dolor et urna hendrerit, vel vulputate turpis posuere. Integer ultrices odio a lacus scelerisque, nec aliquam lacus rutrum. Morbi tempus felis at tincidunt vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porttitor, risus quis ullamcorper eleifend, eros augue aliquam ipsum, sit amet tincidunt velit metus in sapien. Pellentesque bibendum sapien dui, vitae tempus augue fringilla eu."
        },
        {
            id: "3",
            capacity: 100, 
            price: 300, 
            rentalType: "Reception Only", 
            minimumDeposit: 100,
            description: "Maecenas volutpat ipsum ut semper eleifend. Pellentesque mattis non quam nec tincidunt. Mauris consequat luctus sapien sed facilisis. Aliquam egestas dapibus quam eget rhoncus. Fusce ut luctus nibh, ut sollicitudin dui. Integer tortor lacus, rutrum non diam ut, elementum suscipit nibh. Nullam bibendum dolor et urna hendrerit, vel vulputate turpis posuere. Integer ultrices odio a lacus scelerisque, nec aliquam lacus rutrum. Morbi tempus felis at tincidunt vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur porttitor, risus quis ullamcorper eleifend, eros augue aliquam ipsum, sit amet tincidunt velit metus in sapien. Pellentesque bibendum sapien dui, vitae tempus augue fringilla eu."
        },
    ])
    return (
        <PackagesContext.Provider value={{packages, setPackages}}>
            {props.children}
        </PackagesContext.Provider>
    )
}

export default PackagesProvider