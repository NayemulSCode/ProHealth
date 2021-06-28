import React, { useState, useEffect, useCallback } from 'react'

const Recommendation = () => {
    const [ucan, setUcan] = useState(null);
    const [vega, setVega] = useState(null);
    const [vital, setVital] = useState(null);
    const [whey, setWhey] = useState(null);
    const [plant, setPlant] = useState(null);
    const [apple, setApple] = useState(null);
    const [tart, setTart]= useState(null);
    const [vp, setVp] = useState(null);
    const [bone, setBone] = useState(null);
    const handleSubmit =()=>{
    }
    const keyUp=()=>{
        console.log("loded");
    }

    function updateSubTotal() {
        var table = document.getElementById("myTable");
        var calorie = Array.from(table.rows).slice(1).reduce((total, row) => {
                return total + parseFloat(row.cells[2].innerHTML);
            }, 0);
            console.log(calorie)
            document.getElementById("val").innerHTML = "SubTotal = $" + calorie;

            var crabs = Array.from(table.rows).slice(1).reduce((total, row) => {
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);
            console.log(crabs)
            document.getElementById("crabs").innerHTML = " =" + crabs;

            var protien = Array.from(table.rows).slice(1).reduce((total, row) => {
                return total + parseFloat(row.cells[4].innerHTML);
            }, 0);
            console.log(protien)
            document.getElementById("protien").innerHTML = " =" + protien;

            var fat = Array.from(table.rows).slice(1).reduce((total, row) => {
                return total + parseFloat(row.cells[5].innerHTML);
            }, 0);
            console.log(fat)
            document.getElementById("protien").innerHTML = " =" + fat;

            var fiber = Array.from(table.rows).slice(1).reduce((total, row) => {
                return total + parseFloat(row.cells[6].innerHTML);
            }, 0);
            console.log(fiber)
            document.getElementById("fiber").innerHTML = " =" + fiber;
        }
    
    useEffect(()=>{
        updateSubTotal(); 
    }, [updateSubTotal])
    

    return (
        <div className="calulator-table" id="tracker">
        <form className="form" onSubmit={handleSubmit}>
            <table id="myTable" className="table-fill">
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
                        <td onLoadCapture={keyUp} id="calorie">{ucan*120}</td>
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
                        <td><label htmlFor="grams">Apple/Tart Cherry Shot(1.5oz/3T</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setApple(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{70*apple}</td>
                        <td>{17*apple}</td>
                        <td>{0*apple}</td>
                        <td>{0*apple}</td>
                        <td>{0*apple}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">Tart Cherry Concentrate(1.5oz/3T</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setTart(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{40*tart}</td>
                        <td>{10*tart}</td>
                        <td>{0*tart}</td>
                        <td>{0*tart}</td>
                        <td>{0*tart}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">VP Collegen Peptides</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setVp(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{36*vp}</td>
                        <td>{0*vp}</td>
                        <td>{9*vp}</td>
                        <td>{0*vp}</td>
                        <td>{0*vp}</td>
                    </tr>
                    <tr>
                        <td><label htmlFor="grams">Bone Broth</label></td>
                        <td>
                            <input onKeyUpCapture={(e)=>setBone(e.target.value)} name='grams' id="grams" type="text"/>
                        </td>
                        <td>{40*bone}</td>
                        <td>{0*bone}</td>
                        <td>{9*bone}</td>
                        <td>{1*bone}</td>
                        <td>{0*bone}</td>
                    </tr>
                </tbody>
            </table>
            <span id="val"></span>
            <span id="crabs"></span>
            <span id="protien"></span>
            <span id="fat"></span>
            <span id="fiber"></span>
        </form> 
        </div>
    )
}

export default Recommendation
