import checkMark from '../images/icon-checkmark.svg'
function AddOnItem({ addOn, pricedYearly, dispatch, selectedAddOns }) {
    const { name, monthly, yearly } = addOn
    const price = pricedYearly ? yearly : monthly
    const exists = selectedAddOns.filter((i) => i.name === name)
    // console.log(exists)
    return (
        <div
            className={`add-on-input-container ${
                exists.length > 0 ? 'active' : ''
            }`}
            onClick={() =>
                dispatch({ type: 'addOn', payload: { name, price } })
            }
        >
            <div className="checkbox">
                <img src={checkMark} alt="" />
            </div>
            <div className="add-on-details">
                <p className="add-on-title">{name}</p>
                <p className="add-on-info">Access to multiplayer games</p>
            </div>
            <div className="add-on-price">+${price}/mo</div>
        </div>
    )
}

export default AddOnItem
