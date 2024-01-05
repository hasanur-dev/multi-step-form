function Buttons({ dispatch, step }) {
    return (
        <div className="buttons">
            {step > 0 && (
                <button
                    className={`btn back`}
                    onClick={() => dispatch({ type: 'back' })}
                >
                    Go Back
                </button>
            )}
            <button
                className={`btn next ${step === 3 ? 'confirm' : ''}`}
                onClick={() => dispatch({ type: 'next' })}
            >
                {step === 3 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    )
}

export default Buttons
