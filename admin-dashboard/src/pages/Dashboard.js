import React from 'react';
import { Grid, Paper } from '@mui/material';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <h2 className='htwo'>Table</h2>
            <Table />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <h2>Chart</h2>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <h2>Calendar</h2>
            <Calendar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className="dashboard-paper">
            <h2>Kanban Board</h2>
            <KanbanBoard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
