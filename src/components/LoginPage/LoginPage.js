import "./style.css"
import MainPage from "../MainPage/MainPage";
import React from "react";
import "./responsive.css"
import NetflixLogo from "../images/logo.png"
import FaceBooklogo from "../images/fb.png"


const loginPage = () => {

    return (
        <>
            {/* Required meta tags */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Bootstrap CSS */}
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossOrigin="anonymous"
            />
            <title>Hello, world!</title>
            <link rel="stylesheet" href="./style.css" />
            <div className="login-top">
                <img src={NetflixLogo} alt={"Netflix logo"} />
            </div>
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: "100vw" }}
            >
                <section className="login-box">
                    <h2 className="text-white">Sign In</h2>
                    <form className="mt-4">
                        <div className="mb-3 bg-white rounded px-2">
                            <label htmlFor="exampleInputEmail1" className="form-label small-text">
                                Email or Phone Number
                            </label>
                            <input
                                type="email"
                                className="form-control border-0 p-0"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3 bg-white rounded px-2">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label small-text"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control border-0 p-0"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <a
                            href="/mainpage"
                            type="submit"
                            className="btn btn-danger mt-3"
                            style={{ width: "100%" }}
                        >
                            Sign In
                        </a>
                        <div className="mb-3 mt-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label text-white small-text"
                                htmlFor="exampleCheck1"
                            >
                                Remember Me
                            </label>
                        </div>
                        <div className="mt-3 d-flex">
                            <img width="20px" src={FaceBooklogo} alt=""/>
                            <p className="m-0 small-text text-white mx-2">Login with Facebook</p>
                        </div>
                        <div className="mt-3 ">

                            <p className="m-0  text-white">
                                {" "}
                                <span style={{ color: "rgba(212, 212, 212, 0.75)" }}>
              New to Netflix?
            </span>{" "}
                                Sign up now.
                            </p>
                            <p className="m-0 small-text text-white  mt-2">
                                {" "}
                                <span style={{ color: "rgba(212, 212, 212, 0.75)" }}>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#"> Learn more.</a>{" "}
            </span>{" "}
                            </p>
                        </div>
                    </form>
                </section>
            </div>

        </>

    )};
export default loginPage;