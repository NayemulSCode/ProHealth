import React, { useState } from 'react';
import { AnthropContext, useGlobalContext } from '../../context/Context';
const Energy = () => {
const {weight,setCalorie} = useGlobalContext(AnthropContext);
const weights = parseFloat(weight).toFixed(2)
const [refs]=useState({
    tCalorie: React.createRef(),
    grams:React.createRef(),
    tCarbs:React.createRef(),
    pOfCals:React.createRef(),
})
const [vars] = useState({
    tCalorie: 0,
    grams: 0,
    tCarbs: 0,
    pOfCals: 0,
});

const handleSubmit =(e)=>{
    e.preventDefault();


}
const onChange=(e)=>{
    // detect value from input filed form data
    const {name, value} = e.target;
    vars[name] = value;
    const tCalorie = parseFloat(refs.tCalorie.current.value).toFixed(2);
    setCalorie(tCalorie);
    const grams = parseFloat(refs.grams.current.value).toFixed(2);
    const tCarbs = parseFloat(refs.tCarbs.current.value).toFixed(2);
    const pOfCals = parseFloat(refs.pOfCals.current.value).toFixed(2);
    
// value assign into input filed after calculating
    if (name === 'tCarbs') refs.tCarbs.current.value = grams * weights;
    console.log(tCarbs);
    if (name === 'pOfCals') refs.pOfCals.current.value = ((tCarbs*4)/tCalorie)*100;
}

return ( 
    <div className="calulator-table" id="tracker">
    <form className="form" onSubmit={handleSubmit}>
        <table className="table-fill">
            <thead>
                <tr>
                    <th>Total CRABS</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label htmlFor="tCalorie">Daily Calorie Target </label></td>
                    <td>
                        <input onChange={onChange} defaultValue={vars.tCalorie} ref={refs.tCalorie} name='tCalorie' id="tCalorie" type="text"/>
                    </td>
                </tr>   
                <tr>
                    <td><label htmlFor="grams">grams/kg</label></td>
                    <td>
                        <input onChange={onChange} defaultValue={vars.grams} ref={refs.grams} name='grams' id="grams" type="text"/>
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="tCarbs">total gm carbs</label></td>
                    <td>
                        <input onClick={onChange} defaultValue={vars.tCarbs} ref={refs.tCarbs} name="tCarbs"  id="tCarbs" type="number" readOnly/>
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
    );
}

export default Energy;