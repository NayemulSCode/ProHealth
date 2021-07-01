import React, { useEffect, useState } from "react";
import { AnthropContext, useGlobalContext } from "../../context/Context";

const FatServing = () => {
    const { calorie, setOilSolidFatsServing,
        setAvocadoServing, } = useGlobalContext(AnthropContext);
    // const [oilSolidFats, setOilSolidFats] = useState(null);
    let oilSolidFats;
    const [avocado, setAvocado] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    function updateSubTotal() {
        let table = document.getElementById("fattable");
        // let totatlFat = Array.from(table.rows)
        //     .slice(1)
        //     .reduce((total, row) => {
        //         console.log(row.cells[1].innerHTML.value)
        //         return total + parseFloat(row.cells[1].innerHTML);
        //     }, 0);
        // console.log(totatlFat);
        // document.getElementById("totatlFat").innerHTML =
        //     "totatlFat = $" + totatlFat;

        let fatTotalServ = Array.from(table.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);
        // console.log(fatTotalServ);
        document.getElementById("fatTotalServ").innerHTML = "# OF SERVINGS: " + fatTotalServ;

        // let beans = Array.from(table.rows).slice(1).reduce((total, row) => {
        //         return total + parseFloat(row.cells[5].innerHTML);
        //     }, 0);
        // console.log(beans);
        // document.getElementById("beans").innerHTML = " =" + beans;
        // console.log(table);
    }

    useEffect(() => {
        updateSubTotal();
    }, [updateSubTotal]);

    return (
        <div className="calulator-table" id="tracker">
            <form className="form" onSubmit={handleSubmit}>
                <table className="table-fill" id="fattable">
                    <thead>
                        <tr>
                            <th colSpan={2}>Fat</th>
                            <th>Grams (g)</th>
                            <th>% of total cals</th>
                            <th>Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>Protein from Carbs & Avocado</td>
                            <td>72</td>
                            <td>146</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label htmlFor="lean">
                                    {" "}
                                    oilSolidFats{" "}
                                </label>
                            </td>
                            <td>
                                {oilSolidFats = 146}
                            </td>
                            <td>
                                {Math.round(
                                    ((9 * oilSolidFats) / calorie) * 100
                                )}
                            
                            </td>
                           
                            <td>{(oilSolidFats / 14).toFixed(2)} {setOilSolidFatsServing((oilSolidFats / 14).toFixed(2))}</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>(1 serv = 1/2 avocado = 15g)
                                <label htmlFor="avocado"> avocado </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setAvocado(e.target.value)
                                    }
                                    onChange={(e)=> setAvocado(e.target.value)}
                                    name="avocado"
                                    id="avocado"
                                    value={avocado}
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((9 * avocado) / calorie) * 100)}
                            </td>
                            <td>
                                {(avocado / 15).toFixed(2)}
                            {setAvocadoServing((avocado / 15).toFixed(2))}
                            </td>
                        </tr>

                        </tbody>
                </table>
                <span id="fatTotalServ" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        marginRight: "5rem",
                    }}></span>
            </form>
        </div>
    );
};

export default FatServing;
