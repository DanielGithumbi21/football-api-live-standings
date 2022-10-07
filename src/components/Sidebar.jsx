import React, { Suspense, lazy, useEffect, useState } from "react";
import { makeStyles, styled, ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";

import LeagueDetails from "./LeagueDetails";

import Leagues from "./Leagues";

import clsx from "clsx";
import Banner from "./Banner";

const Sidebar = () => {
  const classes = useStyles();
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className={clsx("App", classes.root)}>
        <>
          <CssBaseline />
          <div className="side-menu">
            <Leagues />
          </div>
        </>

        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-3">
              <div
                className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/league/:id" element={<LeagueDetails />} />
              </Routes>
            </Container>
          </main>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {},
}));

export default Sidebar;
