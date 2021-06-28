import React, { useState } from 'react'

const Recommendation = () => {
    const [ucan, setUcan] = useState(null);
    const [vega, setVega] = useState(null);
    const [vital, setVital] = useState(null);
    const [whey, setWhey] = useState(null);
    const [plant, setPlant] = useState(null);
    const handleSubmit =()=>{
    }
    
    return (
        <div className="calulator-table" id="tracker">
        <form className="form" onSubmit={handleSubmit}>
            <table className="table-fill">
                <thead>
                    <tr>
                        <th></th>
                        <th>Scoops/Cups</th>
                        <th>Calories</th>
                        <th>Carbs</th>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Fiber</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td><label htmlFor="grams">UCAN</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setUcan(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td id="calorie">{ucan*120}</td>
                        <td>{28*ucan}</td>
                        <td>{270*ucan}</td>
                        <td>{0*ucan}</td>
                        <td>{1*ucan}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">Vega Protein & Greens</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setVega(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td id="calorie">{110*vega}</td>
                        <td>{2*vega}</td>
                        <td>{20*vega}</td>
                        <td>{2*vega}</td>
                        <td>{1*vega}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">Vital Nutrients ProWhey (2 tbsp)</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setVital(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{95*vital}</td>
                        <td>{0*vital}</td>
                        <td>{23*vital}</td>
                        <td>{0*vital}</td>
                        <td>{0*vital}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">GOL Whey Protein</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setWhey(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{120*whey}</td>
                        <td>{6*whey}</td>
                        <td>{24*whey}</td>
                        <td>{0.5*whey}</td>
                        <td>{2*whey}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">GOL Plant Protein</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setPlant(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{110*plant}</td>
                        <td>{5.5*plant}</td>
                        <td>{15*plant}</td>
                        <td>{2*plant}</td>
                        <td>{4.5*plant}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">GOL Whey Protein</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setWhey(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{120*whey}</td>
                        <td>{6*whey}</td>
                        <td>{24*whey}</td>
                        <td>{0.5*whey}</td>
                        <td>{2*whey}</td>
                    </tr>
                </tbody>
            </table>
        </form> 
        </div>
    )
}

export default Recommendation
