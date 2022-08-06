import React, { useState } from 'react'
import {omit} from 'lodash'

const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState({});

    const [error, setError] = useState()
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'firstname' || 'lastName':
                if(!value){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        [name]: `${name === 'firstname' ? 'First Name': 'Last Name'} is required`
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, name);
                    setErrors(newObj);
                    
                }
                break;
            case 'lastName' || 'firstName':
                    if(!value){
                        // we will set the error state
    
                        setErrors({
                            ...errors,
                            lastName:'Last Name is required'
                        })
                    }else{
                        // set the error state empty or remove the error for username input
    
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "lastName");
                        setErrors(newObj);
                        
                    }
                    break;
        
            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{

                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'mobilePhone':
                if(!value){
                    setErrors({
                        ...errors,
                        mobilePhone:'Mobile Phone is required'
                    })
                }else{

                    let newObj = omit(errors, "mobilePhone");
                    setErrors(newObj);
                    
                }
            break;
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            setError(null)
            if(callback) callback();
        }else{
            setError("Please fill out the required fields")
            return;
        }
    }


    return {
        values,
        setValues,
        errors,
        error,
        handleChange,
        handleSubmit
    }
}

export default useForm