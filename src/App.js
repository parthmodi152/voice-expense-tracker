import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/Main";

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid xs={12} sm={3}>
          <Details title="Income" />
        </Grid>
        <Grid xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid xs={12} sm={3}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
