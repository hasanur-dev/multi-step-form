function Plan({ plan, dispatch, pricedYearly, selectedPlan }) {
    const { name, monthly, yearly, icon } = plan
    const price = pricedYearly ? yearly : monthly
    return (
        <div
            className={`plan-input-container  ${
                selectedPlan.name === name ? 'active' : ''
            }`}
            onClick={() =>
                dispatch({
                    type: 'plan',
                    payload: {
                        name,
                        price,
                    },
                })
            }
        >
            <div className="plan-icon">
                <img src={icon} alt="" />
            </div>
            <div className="plan-details">
                <h2 className="plan-name">
                    {`${name.split('')[0].toUpperCase()}${name
                        .split('')
                        .slice(1)
                        .join('')}`}
                </h2>
                <p className="plan-price">${price}/yr</p>
                {pricedYearly && <p className="plan-free">2 months free</p>}
            </div>
        </div>
    )
}

export default Plan
