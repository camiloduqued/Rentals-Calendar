import React, { useContext, useEffect} from "react";
import { StepsContext } from "../Contexts/StepsContext";
import { SummaryContext } from "../Contexts/SummaryContext";
import useForm from "../Hooks/useForm";
import "./Registration.scss"

const Registration = () =>{
    const {summary, setSummary} = useContext(SummaryContext);
    const {setStep} = useContext(StepsContext);
    const currencyFormatter = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    const getContact =()=>{
        summary.contact = values;
        setSummary(summary)
        setStep("Payment");
    }
    const {handleChange, values, setValues, errors, handleSubmit} = useForm(getContact)
    useEffect(() =>{
        if(summary && summary.contact){
            setValues(summary.contact)
        }
    }, [])
    return(
        <div className="registration-cmp">
            <section className="registration-cmp_wrapper">
                <div className="registration-cmp_event-col">
                    <article>
                        <div className="rental-image">
                            <img src={summary.item.Auctifera__Rental_Event__r.Auctifera__Primary_File_Link__c} alt="Placeholder"/> 
                        </div>
                        <div className="rental-package-info">
                            <h2>Package Information</h2>
                            <div>
                                <h4>{summary.item.Auctifera__Location__r.Name}</h4>
                                <p>{summary.dateString} | { summary.timeRange && summary.timeRange[0] && summary.timeRange[0].format('LT') } - { summary.timeRange && summary.timeRange[1] && summary.timeRange[1].format('LT') }</p>
                                <p>Capacity: {summary.item.Auctifera__Location__r.Auctifera__Capacity__c}</p>
                                <p>Cost: {currencyFormatter.format(summary.item.Auctifera__Rental_Event__r.Auctifera__Event_Rental_Total_Amount__c)}</p>
                            </div>
                            <div className="rental-description-disclaimers">
                                <h3>Description</h3>
                                <div dangerouslySetInnerHTML={{__html: summary.item.Auctifera__Rental_Event__r.Auctifera__Description__c}}/>
                                <h3>Disclaimers</h3>
                                <div dangerouslySetInnerHTML={{__html: summary.item.Auctifera__Rental_Event__r.Auctifera__Disclaimers__c}}/>
                                <h3>Insurance Information</h3>
                                <div dangerouslySetInnerHTML={{__html: summary.item.Auctifera__Rental_Event__r.Auctifera__Insurance_Information__c}}/>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="registration-cmp_registration-col">
                    <div className="registration-cmp_registration-wrapper">
                        <h2>Host Information</h2>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="form-grid_col form-grid_col-50">
                                        <label htmlFor="firstName">* First Name</label>
                                        <input 
                                            value={values.firstName}
                                            className={errors.firstName ? 'error-input': ''} 
                                            type="text" name="firstName" 
                                            id="firstName" 
                                            required onChange={handleChange}/>
                                        {errors.firstName && <h5>{errors.firstName}</h5>}
                                    </div>
                                    <div className="form-grid_col form-grid_col-50">
                                        <label htmlFor="lastName">* Last Name</label>
                                        <input 
                                            value={values.lastName}
                                            className={errors.lastName ? 'error-input': ''} type="text" name="lastName" id="lastName" required onChange={handleChange}/>
                                        {errors.lastName && <h5>{errors.lastName}</h5>}
                                    </div>
                                    <div className="form-grid_col form-grid_col-100">
                                        <label htmlFor="email">* Email</label>
                                        <input 
                                            value={values.email}
                                            className={errors.email ? 'error-input': ''} type="email" name="email" id="email" required onChange={handleChange}/>
                                        {errors.email && <h5>{errors.email}</h5>}
                                    </div>
                                    <div className="form-grid_col form-grid_col-50">
                                        <label htmlFor="homePhone">Home Phone</label>
                                        <input
                                            value={values.homePhone} 
                                            type="phone" name="homePhone" id="homePhone" onChange={handleChange}/>
                                    </div>
                                    <div className="form-grid_col form-grid_col-50">
                                        <label htmlFor="mobilePhone">* Mobile Phone</label>
                                        <input 
                                            value={values.mobilePhone}
                                            className={errors.mobilePhone ? 'error-input': ''} type="phone" name="mobilePhone" id="mobilePhone" required onChange={handleChange}/>
                                        {errors.mobilePhone && <h5>{errors.mobilePhone}</h5>}
                                    </div>

                                    <div className="form-grid_col form-grid_col-100">
                                        <input type="submit" value="Go to Payment"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration