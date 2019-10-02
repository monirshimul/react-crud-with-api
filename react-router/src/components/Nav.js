import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from './Search';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <Link to="/">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to="/add">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Add Person</a>
                                </li>
                            </Link>
                            <Link to="/person">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">All Person</a>
                                </li>
                            </Link>


                        </ul>
                        <Search routeComp={"/update"} history={this.props.history} />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav
