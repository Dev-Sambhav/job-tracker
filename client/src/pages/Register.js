import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const {showAlert, displayAlert, setupUser, isLoading, user} = useAppContext();
  // toggle member
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  // handle change
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, isMember} = values;
    if(!email || !password || (!isMember && !name)){
      displayAlert();
      return;
    }
    const currentUser = {name, email, password};
    if(isMember){
      setupUser({
        currentUser,
        endPoint:'login',
        alertText:'Login Successful! Redirecting...'
      });
    }else{
      setupUser({
        currentUser,
        endPoint:'register',
        alertText:'User Created! Redirecting...'
      });
    }
  };

  // if user is already login/register then it will be automatically redirect to stats page
  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  },[user, navigate])

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        {/* control h3 */}
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
