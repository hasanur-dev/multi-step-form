function PersonalDetails({ name, email, phoneNumber, dispatch }) {
    return (
        <div className="form">
            <div className="header">
                <h2>Personal Info</h2>
                <p>Please provide your name, email address and phone number</p>
            </div>
            <div className="inputs">
                <div className="input-main-personal-details">
                    <div className="input-container">
                        <div>
                            <label htmlFor="name">Name</label>
                            <p className="required-error">
                                This field is required
                            </p>
                        </div>
                        <input
                            type="text"
                            id="name"
                            placeholder="e.g. Stephen King"
                            value={name}
                            onChange={(e) =>
                                dispatch({
                                    type: 'name',
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input-container">
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <p className="required-error">
                                This field is required
                            </p>
                        </div>
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. stephenking@lorem.com"
                            value={email}
                            onChange={(e) =>
                                dispatch({
                                    type: 'email',
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input-container">
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <p className="required-error">
                                This field is required
                            </p>
                        </div>
                        <input
                            type="phone"
                            id="phone"
                            placeholder="e.g. +1 234 567 890"
                            value={phoneNumber}
                            onChange={(e) =>
                                dispatch({
                                    type: 'phoneNumber',
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
