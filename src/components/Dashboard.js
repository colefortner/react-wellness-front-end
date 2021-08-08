import React from 'react';
import Line from './Line';

const Dashboard = props => {
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <h2>Status: { props.loggedInStatus }</h2>
            </div>
            {/* <Line /> */}
        </div>
    )
}

export default Dashboard;

