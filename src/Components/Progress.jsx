import bgMobile from '../images/bg-sidebar-mobile.svg'
import bgDesktop from '../images/bg-sidebar-desktop.svg'
import StepItem from './StepItem'
function Progress({ step, stepDetails }) {
    console.log(step)
    return (
        <div className="progress-main">
            <img className="bg-desktop" src={bgDesktop} alt="" />
            <img className="bg-mobile" src={bgMobile} alt="" />
            <div className="progress-container">
                {stepDetails.map((s) => {
                    return <StepItem key={s.name} s={s} stepActive={step} />
                })}
                {/* <div className="progress">
                    <div className="step active">
                        <span>1</span>
                    </div>
                    <div className="step-info">
                        <h2>step 1</h2>
                        <h3>your info</h3>
                    </div>
                </div>
                <div className="progress">
                    <div className="step">
                        <span>2</span>
                    </div>
                    <div className="step-info">
                        <h2>step 2</h2>
                        <h3>select plan</h3>
                    </div>
                </div>
                <div className="progress">
                    <div className="step">
                        <span>3</span>
                    </div>
                    <div className="step-info">
                        <h2>step 3</h2>
                        <h3>add-ons</h3>
                    </div>
                </div>
                <div className="progress">
                    <div className="step">
                        <span>4</span>
                    </div>
                    <div className="step-info">
                        <h2>step 4</h2>
                        <h3>summary</h3>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Progress
