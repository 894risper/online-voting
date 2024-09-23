import React, { useState } from 'react';

const VoterRegistration = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
// first name validation
    if (!inputs.fname || inputs.fname.trim() === "") {
      newErrors.fname = "Your first name is required";
    } else if (!/^[a-zA-Z]+$/.test(inputs.fname)) {
      newErrors.fname = "The name should only contain letters";
    }
//middle name validation
    if (!inputs.mname || inputs.mname.trim() === "") {
      newErrors.mname = "Your middle name is required";
    } else if (!/^[a-zA-Z]+$/.test(inputs.mname)) {
      newErrors.mname = "The middle name should only contain letters";
    }
// last name validation
    if(!inputs.lname ||inputs.lname.trim()===""){
        newErrors.lname="your last name is required";
    }else if(!/^[a-zA-Z]+$/.test(inputs.lname)){
        newErrors.lname= " The last name should only contain letters"
    }

//password validation 
if(! inputs.password || inputs.password.trim()===""){
    newErrors.password="your password is required"
}else if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(inputs.password)){
    newErrors.password="the password should contain at least one uppercase,lowercase letters,numbers and speacial character"
}

    setErrors(newErrors);

    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setInputs({ fname: "", mname: "",lname:"" ,email:"",password:""});
    }
  };

  return (
    <div>
      Voter Registration
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname " >
          First Name
          <input
          id='fname'
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
            value={inputs.fname || ""}
          />
          {errors.fname && <p className="text-red-600">{errors.fname}</p>}
        </label>

        <label htmlFor="mname" >
          Middle Name
          <input
            type="text"
            id='mname'
            name="mname"
            placeholder="Middle Name"
            onChange={handleChange}
            value={inputs.mname || ""}
          />
          {errors.mname && <p className="text-red-600">{errors.mname}</p>}
        </label>
<label htmlFor="lname" id='lname'>Last Name
    <input type="text"
    value={inputs.lname}
    name='lname'
    id='lname'
onChange={handleChange}
placeholder='Last Name'

    />
</label>
<label htmlFor="email">Email
    <input type="email"
    id='email'
    name='email'
    onChange={handleChange}
    value={inputs.email}
    placeholder='email address'
    />
</label>
<label htmlFor="password"> Password
    <input type="text" 
    id='password'
    name='password'
    placeholder='Password'
    value={inputs.password}
    onChange={handleChange}
    />

    {errors.password &&<p className='text-red-600'>{errors.password}</p>}
</label>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VoterRegistration;
