import React from "react";
import Employee from "../employee";

const db = require("../../models");
const mongoose = require("mongoose");

// add sorts here if or switch coming from html el.
// have two methods here list and class.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emplist", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// let empList = db.Employee.find({}).then( (emp) => {
//     emp.map( (el) => {
//         <tr>
//         <td>{el.firstName}</td>
//         <td>{el.lastName}</td>
//         <td>{el.email}</td>
//         <td>{el.role}</td>
//         <td>{el.department}</td>
//         </tr>
//     });
// });

function Home() {
    return (
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Department</th>
            </tr>
            {/* {empList} */}
            
            <Employee />
        </table>
    ); 
}

export default Home;