function FinishingUp({ selectedPlan, selectedAddOns, pricedYearly, dispatch }) {
    console.log(selectedAddOns)
    console.log(selectedPlan)
    const getTotalPrice = () => {
        let totalAddOnPrice = 0
        selectedAddOns.forEach((i) => {
            console.log(i)
            totalAddOnPrice += i.price
        })
        console.log('totalAddOnPrice', totalAddOnPrice)
        return totalAddOnPrice + selectedPlan.price
    }
    const totalPrice = getTotalPrice()
    console.log(totalPrice)
    return (
        <div className="form">
            <div className="header">
                <h2>Finishing up</h2>
                <p>Double check everything looks OK before confirming.</p>
            </div>
            <div className="finishing-up">
                <div className="all-details">
                    <div className="plan-finish">
                        <div>
                            <h3>
                                {selectedPlan.name} (
                                {pricedYearly ? 'Yearly' : 'Monthly'})
                            </h3>
                            <button
                                onClick={() => dispatch({ type: 'changePlan' })}
                            >
                                Change
                            </button>
                        </div>
                        <p>
                            ${selectedPlan.price}/{pricedYearly ? 'yr' : 'mo'}
                        </p>
                    </div>
                    <div className="add-ons-finish">
                        {selectedAddOns.map((addon) => {
                            return (
                                <div key={addon.name}>
                                    <h3>{addon.name}</h3>
                                    <p>+${addon.price}/mo</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="total">
                    <div>
                        <h3>Total (per {pricedYearly ? 'year' : 'month'})</h3>
                        <p>
                            +${totalPrice}/{pricedYearly ? 'yr' : 'mo'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishingUp
