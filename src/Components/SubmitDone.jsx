import iconThankYou from '../images/icon-thank-you.svg'
function SubmitDone() {
    return (
        <div className="submit-done-container">
            <div className="submit-done">
                <img src={iconThankYou} alt="" />
                <h2>Thank You</h2>
                <p>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default SubmitDone
