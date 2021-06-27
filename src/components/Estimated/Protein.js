import React, { useState } from 'react'
import { AnthropContext, useGlobalContext } from '../../context/Context'

const Protein = () => {
    const {weight, calorie} = useGlobalContext(AnthropContext);
    const weights = parseFloat(weight).toFixed(2)

    // create input reference type
    const [refs]=useState({
        grams:React.createRef(),
        tProtein:React.createRef(),
        pOfCals:React.createRef(),
    });
    // initial state
    const [vars] = useState({
        grams: 0,
        tProtein: 0,
        pOfCals: 0,
    });
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    const onChange=(e)=>{
        // detect value from input filed form data
        const {name, value} = e.target;
        vars[name] = value;
        const grams = parseFloat(refs.grams.current.value).toFixed(2);
        const tProtein = parseFloat(refs.tProtein.current.value).toFixed(2);
        const pOfCals = parseFloat(refs.pOfCals.current.value).toFixed(2);
        
    // value assign into input filed after calculating
        if (name === 'tProtein') refs.tProtein.current.value = (grams * weights).toFixed(2);
        console.log(tProtein);
        if (name === 'pOfCals') refs.pOfCals.current.value = (((tProtein*4)/calorie)*100).toFixed(2);
    }
    return (
<div className="calulator-table" id="tracker">
    <form className="form" onSubmit={handleSubmit}>
        <table className="table-fill">
            <thead>
                <tr>
                    <th>Total PROTEIN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <td><label htmlFor="grams">grams/kg</label></td>
                    <td>
                        <input onChange={onChange} defaultValue={vars.grams} ref={refs.grams} name='grams' id="grams" type="text"/>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="tProtein">total gm protein</label></td>
                    <td>
                        <input onClick={onChange} defaultValue={vars.tProtein} ref={refs.tProtein} name="tProtein"  id="tProtein" type="number" readOnly/>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="pOfCals">% of cals</label></td>
                    <td>
                        <input onClick={onChange} defaultValue={vars.pOfCals} ref={refs.pOfCals} id="pOfCals" name="pOfCals" type="number" readOnly/>
                    </td>
                </tr>
            </tbody>
        </table>
    </form> 
    </div>
    )
}

export default Protein
