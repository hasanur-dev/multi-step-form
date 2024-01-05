import Buttons from './Buttons'

function Form({ children, dispatch, step }) {
    return (
        <div className="right">
            {children}
            {step < 4 && <Buttons dispatch={dispatch} step={step} />}
        </div>
    )
}

export default Form
