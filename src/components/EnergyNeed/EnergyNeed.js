import React from 'react'
import { AnthropContext, useGlobalContext } from '../../context/Context'

const EnergyNeed = () => {
    const {age, calorie} = useGlobalContext(AnthropContext)
    return (
        <div>
            <p>age from context: {age}</p>
            <p>total target calorie: {calorie}</p>
        </div>
    )
}

export default EnergyNeed
