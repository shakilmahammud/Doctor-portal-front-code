import { Grid } from '@material-ui/core';
import React from 'react';
import LeftNavbar from './LeftNavbar/LeftNavbar';
import MainDashboard from './MainDashboard/MainDashboard';

const Dashboard = () => {
    return (
        <div>
            <Grid container item xs={12}>
                <Grid item xs={2} >
                    <LeftNavbar></LeftNavbar>
                </Grid>
                <Grid item xs={10}>
                    <MainDashboard></MainDashboard>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;