import React from 'react'
import { AnthropContext, useGlobalContext } from '../../context/Context'

const EnergyNeed = () => {
    const {age} = useGlobalContext(AnthropContext)
    return (
        <div>
            <p>age from context: {age}</p>
        </div>
    )
}

export default EnergyNeed
