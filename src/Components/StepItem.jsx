function StepItem({ s, stepActive }) {
    const { step, name } = s
    return (
        <div className="progress">
            <div className={`step ${step === stepActive + 1 ? 'active' : ''} `}>
                <span>{step}</span>
            </div>
            <div className="step-info">
                <h2>step {step}</h2>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default StepItem
