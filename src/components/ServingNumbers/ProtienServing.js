import React, { useEffect, useState } from "react";
import { AnthropContext, useGlobalContext } from "../../context/Context";

const ProtienSeving = () => {
    const { calorie,setLeanServing,
        setMediumFatProteinServing,
        setHighProtienServing,
        setLowFiberNutServing,
        setmedFiberNutServing,
        setHighFiberNutServing, } = useGlobalContext(AnthropContext);
    const [lean, setLean] = useState(null);
    const [mediumFatProtein, setMediumFatProtein] = useState(null);
    const [highProtien, setHighProtien] = useState(null);
    const [lowFiberNut, setLowFiberNut] = useState(null);
    const [medFiberNut, setMedFiberNut] = useState(null);
    const [highFiberNut, setHighFiberNut] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    function updateSubTotal() {
        let table = document.getElementById("proteintable");
        let totalFatServing = Array.from(table.rows)
            .slice(1)
            .reduce((total, row) => {
                // console.log(row.cells[3].innerHTML);
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);
        document.getElementById("totalFatServing").innerHTML =
            "totalFatServing = $" + totalFatServing;
    }

    useEffect(() => {
        updateSubTotal();
    }, [updateSubTotal]);

    return (
        <div className="calulator-table" id="tracker">
            <form className="form" onSubmit={handleSubmit}>
                <table className="table-fill" id="proteintable">
                    <thead>
                        <tr>
                            <th>Carbohydrates</th>
                            <th>Total Carbs (g)</th>
                            <th>% of total cals</th>
                            <th>Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Protein from Carbs & Avocado</td>
                            <td></td>
                            <td>3</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Animal Protein </td>
                            <td></td>
                            <td></td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>(1 serv = 7 g)
                                <label htmlFor="lean">
                                    {" "}
                                    lean{" "}
                                </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setLean(e.target.value)
                                    }
                                    name=""
                                    id="lean"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(
                                    ((4 * lean) / calorie) * 100
                                )}
                            
                            </td>
                            <td>{(lean / 7).toFixed(2)}{setLeanServing((lean / 7).toFixed(2))}</td>
                        </tr>

                        <tr>
                            <td>(1 serv = 7 g)
                                <label htmlFor="mediumFatProtein"> mediumFatProtein </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setMediumFatProtein(e.target.value)
                                    }
                                    name="mediumFatProtein"
                                    id="mediumFatProtein"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((4 * mediumFatProtein) / calorie) * 100)}
                            </td>
                            <td>
                                {(mediumFatProtein / 7).toFixed(2)}
                                {setMediumFatProteinServing((mediumFatProtein / 7).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 7 g)
                                <label htmlFor="highProtien"> highProtien </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setHighProtien(e.target.value)
                                    }
                                    name="highProtien"
                                    id="highProtien"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((4 * highProtien) / calorie) * 100)}
                            </td>
                            <td>
                                {(mediumFatProtein / 7).toFixed(2)}
                                {setHighProtienServing((highProtien / 7).toFixed(2))}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Plant-based protein
                            </td>
                            <td></td>
                            <td></td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>(1 serv = 7 g)
                                <label htmlFor="lowFiberNut"> lowFiberNut </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setLowFiberNut(e.target.value)
                                    }
                                    name="lowFiberNut"
                                    id="lowFiberNut"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((4 * lowFiberNut) / calorie) * 100)}
                            </td>
                            <td>
                                {(lowFiberNut / 7).toFixed(2)}
                                {setLowFiberNutServing((lowFiberNut / 7).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 5 g)
                                <label htmlFor="medFiberNut"> medFiberNut </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setMedFiberNut(e.target.value)
                                    }
                                    name="medFiberNut"
                                    id="medFiberNut"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((4 * medFiberNut) / calorie) * 100)}
                            </td>
                            <td>
                                {(medFiberNut / 5).toFixed(2)}
                                {setmedFiberNutServing((medFiberNut / 5).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 5 g)
                                <label htmlFor="highFiberNut"> highFiberNut </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setHighFiberNut(e.target.value)
                                    }
                                    name="highFiberNut"
                                    id="highFiberNut"
                                    type="text"
                                />
                            </td>
                            <td>
                                {Math.round(((4 * highFiberNut) / calorie) * 100)}
                            </td>
                            <td>
                                {(highFiberNut / 5).toFixed(2)}
                                {setHighFiberNutServing((highFiberNut / 5).toFixed(2))}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <span id="totalFatServing"></span>
            </form>
        </div>
    );
};

export default ProtienSeving;
