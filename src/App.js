import React, { Component } from "react";
import "./style.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/dashboard/posts/CreatePost";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Dashboard path="/dashboard/:userName" />
        <CreatePost path="/dashboard/create-post" />
        <SinglePost path="/post/:id" />
      </Router>
    );
  }
}
