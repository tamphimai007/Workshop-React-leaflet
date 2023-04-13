<>
            <div className="container container-fluid">
                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-10 col-lg-5 ">
                        <form
                            className="border border-secondary rounded p-4"

                        >
                            <h1 className="mb-4">Login</h1>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email_field">
                                    Email address
                                </label>
                                <input
                                    type="email"

                                    className="form-control"
                                    value={email}

                                />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password_field">
                                    Password
                                </label>
                                <input
                                    type="password"

                                    className="form-control"
                                    value={password}

                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-block w-100 btn-primary btn-block mb-4"
                            >
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
