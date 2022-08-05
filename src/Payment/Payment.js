import "./Payment.scss"
const Payment = () =>{
    return(
        <div className="payment-cmp">
            <section className="payment-cmp_wrapper">
                <div className="payment-cmp_event-col">
                    <h2>Personal Information</h2>
                    <div>
                        <form>
                            <div className="form-grid">
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="firstName">* First Name</label>
                                    <input type="text" name="firstName" id="firstName" required/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="firstName">* First Name</label>
                                    <input type="text" name="firstName" id="firstName" required/>
                                </div>
                                <div className="form-grid_col form-grid_col-100">
                                    <label htmlFor="email">* Email</label>
                                    <input type="email" name="email" id="email" required/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="phone" name="phone" id="phone"/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="address">Address</label>
                                    <input type="phone" name="address" id="address" required/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="city">City</label>
                                    <input type="text" name="city" id="city"/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="state">State</label>
                                    <input type="text" name="state" id="state" required/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="postalCode">ZIP/Postal Code</label>
                                    <input type="text" name="postalCode" id="postalCode"/>
                                </div>
                                <div className="form-grid_col form-grid_col-50">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" name="country" id="country" required/>
                                </div>

                                <div className="form-grid_col form-grid_col-100">
                                <input type="submit" value="Reserve "/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="payment-cmp_summary-col">
                    <h2>Summary</h2>
                       
                </div>
            </section>
        </div>
    )
}

export default Payment