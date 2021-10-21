import React, { useState } from 'react';
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <h1>Hook Form</h1>

            <form>
                <p>
                    <label htmlFor='firstName'>First Name: </label>
                    <input value={firstName} name='firstName' onChange={(e) => setFirstName(e.target.value)}></input>
                </p>
                <p>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input value={lastName} name='lastName' onChange={(e) => setLastName(e.target.value)}></input>
                </p>
                <p>
                    <label htmlFor='email'>Email: </label>
                    <input value={email} name='email' onChange={(e) => setEmail(e.target.value)}></input>
                </p>
                <p>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}></input>
                </p>
            </form>

            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    )
}
export default Form