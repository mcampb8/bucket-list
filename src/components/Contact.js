import React, {useState} from 'react';
import validator from 'validator';

export default function Contact() {
    const linkStyle = { border: '1px black', padding: '5px' };
   
        // Create state variables for the fields in the form
        // We are also setting their initial values to an empty string
        const [email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [message, setMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
      
        const handleInputChange = (e) => {
          // Getting the value and name of the input which triggered the change
          const { target } = e;
          const inputType = target.name;
          const inputValue = target.value;
      
          // Based on the input type, we set the state of either email, username, and password
          if (inputType === 'email') {
            setEmail(inputValue);
          } else if (inputType === 'name') {
            setName(inputValue);
          } else if (inputType === "message"){
            setMessage(inputValue);
          }
        }
        const verifyEmail = (email)=>{
          if(!validator.isEmail(email)){
            setErrorMessage('You must enter a valid email');
          }
          
        }
        const handleBlur = (e)=>{
          if(!e.target.value){
            setErrorMessage(`${e.target.name} field is required`)
          }else{
            setErrorMessage('');
          }
          if(e.target.name === "email"){
          verifyEmail(e.target.value);
        }
      }
      
    return (
        <>
        {
          errorMessage
        }
        {/* <form>
            <label>
                Name
            <input onBlur={handleBlur} name="name" required type = "text"/>
            </label>
            <label>
                Email
            <input onBlur={handleBlur} name="email"required type = "text"/>
            </label>
            <label>
                Message
            <input onBlur={handleBlur} name="message"required type = "text"/>
            </label>
        </form> */}
        <form>
  <div class="form-group">
    <label for="Name">Name</label>
    <input onBlur={handleBlur} name ="name"type="text" class="form-control" id="Name" placeholder="Name"/>
  </div>
  <div class="form-group">
    <label >Email address</label>
    <input onBlur={handleBlur} name ="email"type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Message</label>
    <input onBlur={handleBlur} name ="message"type="text" class="form-control" id="Message" placeholder="Message"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </>
    )
}