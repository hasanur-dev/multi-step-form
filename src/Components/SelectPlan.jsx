import Plan from './Plan'

function SelectPlan({ planDetails, pricedYearly, dispatch, selectedPlan }) {
    return (
        <div className="form">
            <div className="header">
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="inputs">
                <div className="input-main-select-plan">
                    {planDetails.map((plan) => {
                        console.log(plan)
                        return (
                            <Plan
                                key={plan.name}
                                plan={plan}
                                dispatch={dispatch}
                                pricedYearly={pricedYearly}
                                selectedPlan={selectedPlan}
                            />
                        )
                    })}
                    {/* <div className="plan-input-container">
                        <div className="plan-icon">
                            <img src={iconArcade} alt="" />
                        </div>
                        <div className="plan-details">
                            <h2 className="plan-name">Arcade</h2>
                            <p className="plan-price">$90/yr</p>
                            <p className="plan-free">2 months free</p>
                        </div>
                    </div>
                    */}
                </div>
                <div
                    className="option-toggle "
                    onClick={() => {
                        dispatch({ type: 'toggle' })
                    }}
                >
                    <p>Monthly</p>
                    <div className={`toggle ${pricedYearly ? 'active' : ''}`}>
                        <div className="toggle-circle"></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>
        </div>
    )
}

export default SelectPlan
