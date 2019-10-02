import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';



export class Search extends Component {

    state = {
        name: ""
    }

    search = (e) => {
        console.log(this.props.routeComp);
        console.log(this.state.name);
        if (this.state.name === "") {
            alert("Please Enter a Name")
        } else {
            this.props.history.push(this.props.routeComp, { name: this.state.name });
        }

    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" onChange={this.handleChange} />
                    <button className="btn btn-secondary my-2 my-sm-0" type="button" onClick={this.search}>Search</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Search);
