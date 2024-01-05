import { useReducer } from 'react'
import AddOns from './Components/AddOns'
import FinishingUp from './Components/FinishingUp'
import Form from './Components/Form'
import Main from './Components/Main'
import PersonalDetails from './Components/PersonalDetails'
import Progress from './Components/Progress'
import SelectPlan from './Components/SelectPlan'
import SubmitDone from './Components/SubmitDone'

import iconAdvanced from './images/icon-advanced.svg'
import iconArcade from './images/icon-arcade.svg'
import iconPro from './images/icon-pro.svg'

const planDetails = [
    { name: 'arcade', monthly: 9, yearly: 90, icon: iconArcade },
    { name: 'advanced', monthly: 12, yearly: 120, icon: iconAdvanced },
    { name: 'pro', monthly: 15, yearly: 150, icon: iconPro },
]
const addOnDetails = [
    {
        name: 'online service',
        desc: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
    },
    {
        name: 'larger storage',
        desc: 'Extra 1TB of cloud save',
        monthly: 2,
        yearly: 20,
    },
    {
        name: 'customizable profile',
        desc: 'Custom theme on your profile',
        monthly: 2,
        yearly: 20,
    },
]
const stepDetails = [
    { step: 1, name: 'your info' },
    { step: 2, name: 'select plan' },
    { step: 3, name: 'add-ons' },
    { step: 4, name: 'summary' },
]

const initialState = {
    step: 0,
    pricedYearly: false,
    name: '',
    email: '',
    phoneNumber: '',
    selectedPlan: '',
    selectedAddOns: [],
}
const reducer = function (state, action) {
    switch (action.type) {
        case 'a':
            return state
        case 'name':
            return { ...state, name: action.payload }
        case 'email':
            return { ...state, email: action.payload }
        case 'phoneNumber':
            return { ...state, phoneNumber: action.payload }
        case 'toggle':
            return {
                ...state,
                pricedYearly: !state.pricedYearly,
                selectedPlan: {},
                selectedAddOns: [],
            }
        case 'plan':
            return { ...state, selectedPlan: action.payload }
        case 'addOn':
            console.log('addon')
            const exists = state.selectedAddOns.filter(
                (i) => i.name === action.payload.name
            )
            if (exists.length === 0) {
                return {
                    ...state,
                    selectedAddOns: [...state.selectedAddOns, action.payload],
                }
            }
            if (exists.length > 0) {
                const removedArr = state.selectedAddOns.filter(
                    (i) => i.name !== action.payload.name
                )
                return { ...state, selectedAddOns: removedArr }
            }
            console.log(exists)
            return { ...state }
        case 'back':
            return { ...state, step: state.step - 1 }
        case 'next':
            console.log('next')
            if (
                state.step === 0 &&
                state.name !== '' &&
                state.email !== '' &&
                state.phoneNumber !== ''
            ) {
                return { ...state, step: 1 }
            } else if (state.step === 1 && state.selectedPlan) {
                return { ...state, step: 2 }
            } else if (state.step === 2) {
                return { ...state, step: 3 }
            } else if (state.step === 3) {
                return { ...state, step: 4 }
            } else return { ...state }
        case 'changePlan': {
            return { ...state, step: 1, selectedAddOns: [] }
        }
        default:
            throw new Error('Unknown action')
    }
}
function App() {
    const [
        {
            step,
            pricedYearly,
            name,
            email,
            phoneNumber,
            selectedPlan,
            selectedAddOns,
        },
        dispatch,
    ] = useReducer(reducer, initialState)

    // console.log(step)
    return (
        <Main>
            <Progress stepDetails={stepDetails} step={step} />
            <Form dispatch={dispatch} step={step}>
                {step === 0 && (
                    <PersonalDetails
                        name={name}
                        email={email}
                        phoneNumber={phoneNumber}
                        dispatch={dispatch}
                    />
                )}
                {step === 1 && (
                    <SelectPlan
                        planDetails={planDetails}
                        pricedYearly={pricedYearly}
                        dispatch={dispatch}
                        selectedPlan={selectedPlan}
                    />
                )}
                {step === 2 && (
                    <AddOns
                        addOnDetails={addOnDetails}
                        pricedYearly={pricedYearly}
                        dispatch={dispatch}
                        selectedAddOns={selectedAddOns}
                    />
                )}
                {step === 3 && (
                    <FinishingUp
                        selectedPlan={selectedPlan}
                        selectedAddOns={selectedAddOns}
                        pricedYearly={pricedYearly}
                        dispatch={dispatch}
                    />
                )}
                {step === 4 && <SubmitDone />}
                {/* <SelectPlan /> */}
                {/* <AddOns /> */}
                {/* <FinishingUp /> */}
                {/* <SubmitDone /> */}
            </Form>
        </Main>
    )
}

export default App
