import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Text = (props) => {
  const classes = useStyles();

  return (
    <div className="styleOne">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={props.field1}
          name="fieldOne"
          onChange={props.onChange}
          id="standard-basic"
          label="Standard"
        />
        <TextField
          value={props.field2}
          name="fieldTwo"
          onChange={props.onChange}
          id="filled-basic"
          label="Filled"
          variant="filled"
        />
        <TextField
          value={props.field3}
          name="fieldThree"
          onChange={props.onChange}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </form>
    </div>

  );
}

export default Text;
