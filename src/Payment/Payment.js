import { useContext, useState } from "react"
import { SummaryContext } from "../Contexts/SummaryContext"
import "./Payment.scss"

import Service from '../service.lib'
import useForm from "../Hooks/useForm"
import Spinner from "../components/Spinner"

const Payment = () =>{
    const {summary, setSummary} = useContext(SummaryContext);
    const [isSameInformation, setIsSameInformation] = useState(false);
    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'});

    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })

    const deposit = summary.item.Auctifera__Rental_Event__r?.Auctifera__Minimum_Deposit_Amount__c;
    const totalAmount = summary.item.Auctifera__Rental_Event__r?.Auctifera__Event_Rental_Total_Amount__c;
    const handleChangeCheckbox = (event) =>{
        setIsSameInformation(event.target.checked);
    }

    const payTotal = (event) =>{
        handleSubmit(event)
        pay(event, totalAmount)
    }
    const payDeposit = (event) =>{
        handleSubmit(event)
        pay(event, deposit)
    }

    const pay = (event, amountToPay)=>{
        event.preventDefault();
        console.log('summary', summary);
        const body = {

        }
        return
        const response = Service.purchase(body);
    }

    const getContact =()=>{
        summary.contact = values;
        setSummary(summary)
    }

    const {handleChange, values, errors, handleSubmit} = useForm(getContact)

    return(
        <div className="payment-cmp">
            <section className="payment-cmp_wrapper">
                <div className="payment-cmp_event-col">
                    <h2>Personal Information</h2>
                    <div className="contact-info-checkbox">
                        <input type="checkbox" onChange={handleChangeCheckbox}/>
                        <label>Same information as the Host</label>
                    </div>
                    <div>
                        <form>
                            <div className="form-grid">
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="firstName">* First Name</label>
                                    <input
                                        className={errors.firstName ? 'error-input': ''} 
                                        defaultValue={isSameInformation ? summary.contact.firstName : ''} type="text" name="firstName" id="firstName" required onChange={handleChange}/>
                                    {errors.firstName && <h5>{errors.firstName}</h5>}
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="lastName">* Last Name</label>
                                    <input
                                        className={errors.lastName ? 'error-input': ''}  
                                        value={isSameInformation ? summary.contact.lastName : undefined} type="text" name="lastName" id="lastName" required onChange={handleChange}/>
                                    {errors.lastName && <h5>{errors.lastName}</h5>}
                                </div>
                                <div className="form-grid_col form-grid_col-100">
                                    <label htmlFor="email">* Email</label>
                                    <input
                                        className={errors.email ? 'error-input': ''}  
                                        value={isSameInformation ? summary.contact.email : null} type="email" name="email" id="email" required onChange={handleChange}/>
                                    {errors.email && <h5>{errors.email}</h5>}
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="phone">Phone</label>
                                    <input value={isSameInformation ? summary.contact.mobilePhone : null} type="phone" name="phone" id="phone" onChange={handleChange}/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="address">Address</label>
                                    <input type="phone" name="address" id="address" required onChange={handleChange}/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city" onChange={handleChange}/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" id="state" required onChange={handleChange}/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="postalCode">ZIP/Postal Code</label>
                                    <input type="text" name="postalCode" id="postalCode" onChange={handleChange}/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" required onChange={handleChange}/>
                                </div>
                                <div className={`form-grid_col form-grid_col-${deposit && deposit > 0 ? '50': '100'}`}>
                                    <button value="Reserve " onClick={(event) => payTotal(event)}>Pay Total <b>{currencyFormatter.format(totalAmount)}</b></button>
                                </div>
                                {deposit && deposit > 0 ? (
                                    <div className="form-grid_col form-grid_col-50">
                                        <button className="deposit-button" value="Reserve " onClick={(event) => payDeposit(event)}>Pay Deposit {currencyFormatter.format(deposit)}</button>
                                    </div>
                                    ) : null}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="payment-cmp_summary-col">
                    <h2>Summary</h2>
                    <div className="line"></div>
                    { summary ? (
                        <div className="summary-item">
                            <div className="date-container">
                                {summary.date ? formatter.format(summary.date) : null}
                            </div>
                            <div>
                                {summary.item?.Auctifera__Location__r?.Name}
                            </div>
                            <div>
                                Capacity: {summary.item?.Auctifera__Location__r?.Auctifera__Capacity__c}
                            </div>
                            <div className="line"></div>
                            <div className="totals">
                                Total: {currencyFormatter.format(totalAmount)}
                            </div>
                        </div>
                        ) : null
                    }

                </div>
            </section>
        </div>
    )
}

export default Payment