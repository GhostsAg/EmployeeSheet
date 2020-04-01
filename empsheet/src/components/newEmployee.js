import React from "react";


// inputs for employee info

class EmpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: new String(),
            lastName: new String(),
            email: new String(),
            role: new String(),
            department: new String()
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Employee inserted: " + this.state.firstName + " " + this.state.lastName + ".");
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input name="firstName" placeholder="Placeholder" id="first_name" type="text" class="validate" onChange={this.handleChange} value={this.state.firstName} />
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input name="lastName" id="last_name" type="text" class="validate" onChange={this.handleChange} value={this.state.lastName} />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="email" id="email" type="text" class="validate" onChange={this.handleChange} value={this.state.email} />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="role" id="role" type="text" class="validate" onChange={this.handleChange} value={this.state.role} />
                        <label for="role">Role</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input name="department" id="department" type="text" class="validate" onChange={this.handleChange} value={this.state.department} />
                        <label for="department">Department</label>
                    </div>
                </div>
                <input type="submit" value="Submit">Submit</input>
            </form>
        );
    }
}

export default EmpForm;