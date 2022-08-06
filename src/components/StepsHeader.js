import "./StepsHeader.scss";

const StepsHeader = ({step, changeStep}) =>{
    return (
        <section className='steps-header'>
            <ul>
                <li onClick={() => changeStep("Availability")}>
                    <div className="circle"></div>
                    <div className="label">Availability</div>
                </li>
                <li onClick={() => changeStep("Registration")}>
                    <div className="circle"></div>
                    <div className="label">Registration</div>
                </li>
                <li  onClick={() => changeStep("Payment")}>
                    <div className="circle"></div>
                    <div className="label">Payment</div>
                </li>
                <li className="progress-indicator"></li>
            </ul>
        </section>
    )
}

export default StepsHeader