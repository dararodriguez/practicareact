import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.backgroundColor='#00000'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '70vh' }}>

      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>0</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  1
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  2
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  3
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="secondary">
  +
</Button></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  4
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  5
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  6
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="secondary">
  -
</Button></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  7
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  8
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  9
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="secondary">
  *
</Button></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  0
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="primary">
  ,
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="secondary">
  =
</Button></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Button variant="contained" color="secondary">
  /
</Button></Paper>
        </Grid>
      </Grid>
      </Typography>
      </Container>
    </div>
  );
}