import React from "react";

export default function Newsfeed(props) {
  let { title, disc, iurl, nurl, author, time, source } = props;

  return (
    <>
      <div className="container-fluid">
        <div className="col d-flex justify-content-center">
          <div className="card mt-2 mb-2" style={{ width: "20rem" }}>
            <img
              src={
                iurl
                  ? iurl
                  : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{disc}</p>

              {/* <div className="row"> */}
              <a
                href={nurl}
                target="_blank"
                className="btn btn-outline-info col-4 btn-sm"
              >
                Read More
              </a>
              <p className=" text-end ">
                <span className="fs-6 fw-lighter">By:{author}</span>
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
