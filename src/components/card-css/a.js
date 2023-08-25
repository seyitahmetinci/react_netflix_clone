import React from "react";

export const Foo = () => (
    <div className="slider-box">
        <div className="container-fluid slider">
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div
                    className="carousel-inner"
                    style={{ position: "relative", overflow: "visible" }}
                >
                    <div className="carousel-item">
                        <section className="d-flex">
                            <div className="card">
                                <img
                                    src="./images/trending/img1.webp"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <section className="d-flex justify-content-between">
                                        <div>
                                            <i className="bi bi-play-circle-fill card-icon" />
                                            <i className="bi bi-plus-circle card-icon" />
                                        </div>
                                        <div>
                                            <i className="bi bi-arrow-down-circle card-icon" />
                                        </div>
                                    </section>
                                    <section className="d-flex align-items-center justify-content-between">
                                        <p
                                            className="netflix-card-text m-0"
                                            style={{ color: "rgb(0, 186, 0)" }}
                                        >
                                            97% match
                                        </p>
                                        <span className="m-2 netflix-card-text text-white">
                      Limited Series
                    </span>{" "}
                                        <span className="border netflix-card-text p-1 text-white">
                      HD
                    </span>
                                    </section>
                                    <span className="netflix-card-text text-white">
                    Provocative • Psychological • Thriller
                  </span>
                                </div>
                            </div>
                            <div className="card">
                                <img src={props.movieImage} alt="Movie Image"/>
                                <div className="card-body">
                                    <section className="d-flex justify-content-between">
                                        <div>
                                            <i className="bi bi-play-circle-fill card-icon" />
                                            <i className="bi bi-plus-circle card-icon" />
                                        </div>
                                        <div>
                                            <i className="bi bi-arrow-down-circle card-icon" />
                                        </div>
                                    </section>
                                    <section className="d-flex align-items-center justify-content-between">
                                        <p
                                            className="netflix-card-text m-0"
                                            style={{ color: "rgb(0, 186, 0)" }}
                                        >{props.releaseDate}</p>
                                        <span className="m-2 netflix-card-text text-white">
                      Limited Series
                    </span>{" "}
                                        <span className="border netflix-card-text p-1 text-white">
                      HD
                    </span>
                                    </section>
                                    <span className="netflix-card-text text-white">{props.title}</span>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="carousel-item">
                        <section className="d-flex">
                            <div className="card">
                                <img
                                    src="./images/trending/img7.webp"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <section className="d-flex justify-content-between">
                                        <div>
                                            <i className="bi bi-play-circle-fill card-icon" />
                                            <i className="bi bi-plus-circle card-icon" />
                                        </div>
                                        <div>
                                            <i className="bi bi-arrow-down-circle card-icon" />
                                        </div>
                                    </section>
                                    <section className="d-flex align-items-center justify-content-between">
                                        <p
                                            className="netflix-card-text m-0"
                                            style={{ color: "rgb(0, 186, 0)" }}
                                        >
                                            97% match
                                        </p>
                                        <span className="m-2 netflix-card-text text-white">
                      Limited Series
                    </span>{" "}
                                        <span className="border netflix-card-text p-1 text-white">
                      HD
                    </span>
                                    </section>
                                    <span className="netflix-card-text text-white">
                    Provocative • Psychological • Thriller
                  </span>
                                </div>
                            </div>
                            <div className="card">
                                <img
                                    src="./images/trending/img2.jpeg"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <section className="d-flex justify-content-between">
                                        <div>
                                            <i className="bi bi-play-circle-fill card-icon" />
                                            <i className="bi bi-plus-circle card-icon" />
                                        </div>
                                        <div>
                                            <i className="bi bi-arrow-down-circle card-icon" />
                                        </div>
                                    </section>
                                    <section className="d-flex align-items-center justify-content-between">
                                        <p
                                            className="netflix-card-text m-0"
                                            style={{ color: "rgb(0, 186, 0)" }}
                                        >
                                            97% match
                                        </p>
                                        <span className="m-2 netflix-card-text text-white">
                      Limited Series
                    </span>{" "}
                                        <span className="border netflix-card-text p-1 text-white">
                      HD
                    </span>
                                    </section>
                                    <span className="netflix-card-text text-white">
                    Provocative • Psychological • Thriller
                  </span>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
)
