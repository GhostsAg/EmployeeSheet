import React from "react";
import Employee from "../employee";

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emplist", {
//     useNewUrlParser: true,
//     useFindAndModify: false
// });

// add sorts here if or switch coming from html el.

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
            <Employee />
        </table>
    ); 
}

export default Home;