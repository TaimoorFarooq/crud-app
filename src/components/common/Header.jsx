import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Banana App</h1>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <nav className="top">
                                <ul>
                                    <li><a href="javascript:;">My Profile</a></li>
                                    <li><a href="javascript:;">Logout</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;