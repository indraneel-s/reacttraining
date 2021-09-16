import React, { useState } from "react";


import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"





 function App() {
  
  
    const { register, handleSubmit, formState: { errors },reset  } = useForm();
    let [setName] = useState("");
    let [setEmail] = useState("");
    let [setPhoneNumber]=useState("")
    let [password,setPassword] = useState("");
    let [confirmpassword,setConfirmPassword] = useState("");
    let [message, setMessage] = useState("");
    

    //On Change methods
    const changeName = (e)=>{
        
        setName=e.target.value;
    }
    const changeEmail = (e)=>{
        
        setEmail=e.target.value;
    }
    

    const changePassword = (e)=>{
       
        setPassword(e.target.value)
        console.log("Change Password",setPassword)
    }
    const changeConfirmPassword =(e)=>{
     
      const passwordval=e.target.value;
      setConfirmPassword(passwordval);
     
      if( password !==passwordval)
      {
           setMessage("Password Doesnot Match")
           
      }
      else 
      {
        setMessage("")
      }
      
    
  }
  const changePhoneNumber=(e)=>{
    setPhoneNumber=e.target.value;
  }
  


    //Method to create a employee entry
    function createUser() {
       
      

      if(message.length<=1)
      {
        alert("data Submitted")

      }

      
      
    }

    return (

        
            
              

                <Form onSubmit={handleSubmit(createUser)} onReset={reset}>
                <div className="fields">
                        <div>
                            <label>Name</label>
                            <input id="username" name="name"
                                placeholder="name"
                                className="default"
                                onChange={e => changeName(e)}
                                {...register('name', ({
                                    required: '*Name is required',
                                    
                                }))}
                               
                            />
                            <br/>
                            {errors.name && (
                                <span style={{color:"red"}}>{errors.name?.message}</span>
                            )}
                        </div>
                         <div> 
                            <label>Email:</label>
                            <input id="email" name="email"
                                
                                
                                placeholder="email"
                                onChange={e => changeEmail(e)}
                                {...register('email', ({
                                    required: '*Email is required',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: "*Please enter a valid Email"
                                    }
                                }))}
                               
                            />
                            <br/>
                            {errors.email && (
                                <span style={{color:"red"}}>{errors.email.message}</span>
                            )}
                        </div>
                        <div> 
                            <label>Phone Number:</label>
                            <input id="phonenumber" name="phonenumber"
                                
                                
                                placeholder="Phone Number"
                                onChange={e => changePhoneNumber(e)}
                                {...register('phonenumber', ({
                                    required: '*Phone Number is required',
                                    pattern: {
                                        value:/^(\+\d{1,3}[- ]?)?\d{10}$/,
                                        message: "*Please enter a valid phone  number"
                                    }
                                }))}
                                className={`${errors.email ? 'alert' : 'b'}`}
                            />
                            <br/>
                            {errors.phonenumber && (
                                <span style={{color:"red"}}>{errors.phonenumber.message}</span>
                            )}
                        </div>
                       
                     
                        <div>
                            <label>Password:</label>
                            <input type="text" name="password" id="password"
                            
                                
                                {...register('password', ({
                                    required: '*Password is required.',
                                    pattern: {
                                        value: "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/",
                                        message: "*Please enter a valid password"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "*Password should have atleast 8 characters."
                                    }
                                }))}
                               
                                placeholder="Password" onChange={e => changePassword(e)} /><br />
                            {errors.password && (
                              <span style={{color:"red"}}>{errors.password.message}</span>
                            )}
                        </div>
                      
                        <div>
                            <label>Confirm Password:</label>
                            <input type="text" name="confirmpassword" id="confirmpassword"
                               value={confirmpassword}
                               
                                {...register('confirmpassword', ({
                                    required: '*Password is required.',
                                   
                                   
                                }))}
                               
                                placeholder="Password" onChange={e => changeConfirmPassword(e)} /><br />
                                
                                {errors.confirmpassword && (
                              <span style={{color:"red"}}>{errors.confirmpassword.message}</span>
                            )}
                             <span style={{color:"red"}}>{message}</span>
                           
                        </div>

                        <button type="submit">Submit</button>
                        </div>
                        
                       
                </Form>

            
        
    )

}
export default App
