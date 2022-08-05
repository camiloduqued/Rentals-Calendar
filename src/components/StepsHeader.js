
const StepsHeader = ({step, changeStep}) =>{
    return (
        <section className='steps-header'>
            <button onClick={() => changeStep("Availability")}>Availability</button>
            <button onClick={() => changeStep("Registration")}>Registration</button>
            <button onClick={() => changeStep("Payment")}>Payment</button>
          </section>
    )
}

export default StepsHeader