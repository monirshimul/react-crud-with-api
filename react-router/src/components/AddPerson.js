import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


export class AddPerson extends Component {
    state = {
        name: "",
        organization: "",
        designation: ""
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const { name, organization, designation } = this.state;
        const person = {
            name: name,
            organization: organization,
            designation: designation
        }

        await axios.post("http://localhost:5000/add", person);
        console.log("Success")
        this.setState({
            name: "",
            organization: "",
            designation: ""
        })

        this.props.history.push('/person');

    }

    render() {
        const { name, organization, designation } = this.state;

        return (
            <div className="card mb-3 col-sm-6 shadow" style={{ margin: "auto" }}>
                <div className="card-header display-4 text-center shadow">
                    Add Person
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input
                                type="text"
                                value={name}
                                className="form-control"
                                name="name"
                                placeholder="Enter Name"
                                onChange={this.onChange} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="organization"><strong>Organization</strong></label>
                            <input
                                type="text"
                                value={organization}
                                className="form-control"
                                name="organization"
                                placeholder="Enter Organization"
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation"><strong>Designation</strong></label>
                            <input
                                type="text"
                                value={designation}
                                className="form-control"
                                name="designation"
                                placeholder="Enter Designation"
                                onChange={this.onChange} />
                        </div>
                        <input type="submit" value="Add Person" className="btn btn-primary btn-block" />
                    </form>
                </div>



            </div>
        )
    }
}

export default withRouter(AddPerson);
