import React from "react";
// import React, { useEffect } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Aos from 'aos';
// import FetchApi from "./FetchApi";

export default function Newsfeed(props) {
  let { title, disc, iurl, nurl, author, time, source } = props;

  return (
    <>
      <p className="mt5"></p>
      <div className="container-fluid border border-primary">
        <div className="col d-flex justify-content-center">
          <div className="card mt-3 mb-3" style={{ width: "20rem" }}>
            <img src={iurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{disc}</p>
              <a href="#" className="btn btn-primary ">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
