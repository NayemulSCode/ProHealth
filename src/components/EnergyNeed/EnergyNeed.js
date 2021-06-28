import React from 'react'
import { AnthropContext, useGlobalContext } from '../../context/Context'

const EnergyNeed = () => {
    const {age, calorie, serving} = useGlobalContext(AnthropContext)
    return (
        <div>
            <p>age from context: {age}</p>
            <p>total target calorie: {calorie}</p>
            <p>total target serving: {serving}</p>
        </div>
    )
}

export default EnergyNeed
