import React, { Component } from 'react';
import axios from 'axios';
import NotFound from './NotFound';

export class Update extends Component {

    state = {
        _id: "",
        name: "",
        organization: "",
        designation: ""
    }

    async componentDidMount() {
        if (this.props.location.state) {
            const { name } = this.props.location.state;
            console.log("Name : From ComponentDidMount of Update :", name);
            const result = await axios.post(`http://localhost:5000/search/${name}`);


            this.setState({
                _id: result.data._id,
                name: result.data.name,
                organization: result.data.organization,
                designation: result.data.designation
            })

            console.log("From ComponentDidMount of Update :", this.state);

            // console.log("designation :", this.state.designation);
            // console.log("id :", this.state._id);
        }


    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onSubmit = async (e) => {

        e.preventDefault();
        const data = {
            name: this.state.name,
            organization: this.state.organization,
            designation: this.state.designation
        }

        //console.log("In On Submit");
        const result = await axios.post(`http://localhost:5000/update/${this.state._id}`, data);
        console.log("Update Result :", result);
        this.props.history.push("/person");
    }

    render() {
        if (this.props.location.state) {
            console.log("history", this.props.history);
            console.log("location", this.props.location);
            console.log("Props", this.props);
            const { name, organization, designation } = this.state;

            return (
                <div>
                    <div className="card mb-3 col-sm-6 shadow" style={{ margin: "auto" }}>
                        <div className="card-header display-4 text-center shadow">
                            Update Person
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
                                <input type="submit" value="Update" className="btn btn-primary btn-block" />
                            </form>
                        </div>



                    </div>
                </div>

            )
        }
        else {
            return (
                <div>
                    <NotFound />
                </div>
            )
        }

    }
}

export default Update
