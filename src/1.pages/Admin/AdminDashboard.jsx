import React, { Component } from 'react';

class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3></h3>
                            </div>
                            <div className="card-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-6"></div>
                                    <div className="col-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;