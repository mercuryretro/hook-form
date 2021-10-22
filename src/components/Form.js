import React, { useState } from 'react';
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [studentList, setStudentList] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setStudentList([...studentList, {
            firstName, lastName, email, password
        }])
    }


    return (
        <div>
            <h1>Hook Form</h1>

            <form onSubmit={submitHandler}>
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
                <input type='submit' value='Add Student'></input>

            </form>

            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                <tr>
                    {
                        studentList.map((student, index) => (
                            <>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                            </>
                        ))
                    }
                </tr>
            </table>
        </div>
    )
}
export default Form