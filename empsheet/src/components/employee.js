import React from "react";

const db = require("../models");

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = new Array();
    }

    update() {
        this.setState({
            firstName: new String(),
            lastName: new String(),
            email: new String(),
            role: new String(),
            department: new String() 
        })
    }

    componentDidMount() {
        db.Employee.find({}).then( (emp) => {
            this.setState({
                firstName: emp.firstName,
                lastName: emp.lastName,
                email: emp.email,
                role: emp.role,
                department: emp.department   
            });
        });
    }

    render() {
        return (
        <tr>
        <td>{this.state.FirstName}</td>
        <td>{this.state.lastName}</td>
        <td>{this.state.email}</td>
        <td>{this.state.role}</td>
        <td>{this.state.department}</td>
        </tr>
        );
    }
}



export default Employee;