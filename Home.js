import React, { useState } from "react";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <div
        className="pt-5"
        style={{
          textAlign: "center",
          marginTop: "8rem",
        }}
      >
        <p
          style={{
            color: "blue",
          }}
        >
          WELCOME{" "}
        </p>
        <h1>Complaint Handling Management System</h1>
      </div>

      <div
        style={{
          alignItems: "center",
          marginTop: "2rem"
        }}>
        <input type="submit" value="Login" className="btn btn-primary"></input>
      </div>
    </>
  );
};

export default Home;
