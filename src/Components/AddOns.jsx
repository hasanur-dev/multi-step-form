import AddOnItem from './AddOnItem'

function AddOns({ addOnDetails, pricedYearly, dispatch, selectedAddOns }) {
    return (
        <div className="form">
            <div className="header">
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="inputs">
                <div className="add-on-input-main">
                    {addOnDetails.map((addOn) => (
                        <AddOnItem
                            key={addOn.name}
                            addOn={addOn}
                            pricedYearly={pricedYearly}
                            dispatch={dispatch}
                            selectedAddOns={selectedAddOns}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddOns
