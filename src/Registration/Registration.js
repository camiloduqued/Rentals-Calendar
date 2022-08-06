import "./Registration.scss"
const Registration = () =>{
    return(
        <div className="registration-cmp">
            <section className="registration-cmp_wrapper">
                <div className="registration-cmp_event-col">
                    <article>
                        <div className="rental-image">
                            <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                        </div>
                        <div className="rental-package-info">
                            <h2>Package Information</h2>
                            <div>
                                <h4>Location</h4>
                                <p>Tuesday April 8th, 2022 - 7:00am - 8:00am</p>
                                <p>Capacity: 30</p>
                                <p>Cost: $500</p>
                            </div>
                            <div className="rental-description-disclaimers">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend cursus lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper convallis eros quis volutpat. Vestibulum in diam in elit rutrum mattis luctus eu sem. Morbi semper venenatis pretium. Vestibulum eu dui tempus, commodo libero sed, vehicula ipsum. Praesent libero nibh, sodales id posuere non, lobortis sit amet arcu. Ut odio erat, suscipit a mi nec</p>
                                <h3>Disclaimers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend cursus lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper convallis eros quis volutpat. Vestibulum in diam in elit rutrum mattis luctus eu sem. Morbi semper venenatis pretium. Vestibulum eu dui tempus, commodo libero sed, vehicula ipsum. Praesent libero nibh, sodales id posuere non, lobortis sit amet arcu. Ut odio erat, suscipit a mi nec</p>
                                <h3>Insurance Information</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend cursus lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ullamcorper convallis eros quis volutpat. Vestibulum in diam in elit rutrum mattis luctus eu sem. Morbi semper venenatis pretium. Vestibulum eu dui tempus, commodo libero sed, vehicula ipsum. Praesent libero nibh, sodales id posuere non, lobortis sit amet arcu. Ut odio erat, suscipit a mi nec</p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="registration-cmp_registration-col">
                    <div className="registration-cmp_registration-wrapper">
                        <h2>Host Information</h2>
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
                                        <label htmlFor="homePhone">Home Phone</label>
                                        <input type="phone" name="homePhone" id="homePhone"/>
                                    </div>
                                    <div className="form-grid_col form-grid_col-50">
                                        <label htmlFor="mobilePhone">* Mobile Phone</label>
                                        <input type="phone" name="mobilePhone" id="mobilePhone" required/>
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