import React, { useEffect, useState } from "react";
import { AnthropContext, useGlobalContext } from "../../context/Context";

const CarbsSeving = () => {
    const {
        calorie,
        setStarchyVegiesServing,
        setFruitServing,
        setBeansServing,
        setGrainsServing,
        setOtherCarbServing,
        setDairyServing,
        setNonStarchyVegiesServing,
    } = useGlobalContext(AnthropContext);
    const [starchyVegies, setStarchyVegies] = useState(null);
    const [fruit, setFruit] = useState(null);
    const [beans, setBeans] = useState(null);
    const [grains, setGrains] = useState(null);
    const [otherCarb, setOtherCarb] = useState(null);
    const [dairy, setDairy] = useState(null);
    const [nonStarchyVegies, setNonStarchyVegies] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    function updateSubTotal() {
        let table = document.getElementById("carbtable");

        let totalcarbs = Array.from(table.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[2].innerHTML);
            }, 0);
        document.getElementById("totalcarbs").innerHTML = " " + totalcarbs;

        let carbServingTotal = Array.from(table.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[4].innerHTML);
            }, 0);
        document.getElementById("carbServingTotal").innerHTML =
            "# OF SERVINGS: " + carbServingTotal;
    }

    useEffect(() => {
        updateSubTotal();
    }, [updateSubTotal]);

    return (
        <div className="calulator-table" id="tracker">
            <form className="form" onSubmit={handleSubmit}>
                <table className="table-fill" id="carbtable">
                    <thead>
                        <tr>
                            <th>Carbohydrates</th>
                            <th>Total Carbs (g)</th>
                            <th>Net Carbs (g)</th>
                            <th>% of total cals</th>
                            <th>Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pre/Post Drinks & Bone Broth</td>
                            <td></td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="starchyVegies">
                                    {" "}
                                    starchyVegies{" "}
                                </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setStarchyVegies(e.target.value)
                                    }
                                    name=""
                                    id="starchyVegies"
                                    type="text"
                                />
                            </td>
                            <td>26</td>
                            <td>
                                {Math.round(
                                    ((4 * starchyVegies) / calorie) * 100
                                )}
                            </td>
                            <td>{(starchyVegies / 15).toFixed(2)}{setStarchyVegiesServing((starchyVegies / 15).toFixed(2))}</td>
                            {/* {setStarchyVegiesServing(starchyVegies / 15).toFixed(2)} */}
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="fruit"> fruit </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setFruit(e.target.value)
                                    }
                                    name="fruit"
                                    id="fruit"
                                    type="text"
                                />
                            </td>
                            <td>24</td>
                            <td>{Math.round(((4 * fruit) / calorie) * 100)}</td>
                            <td>
                                {(fruit / 15).toFixed(2)}
                                {setFruitServing((fruit / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="beans"> beans </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setBeans(e.target.value)
                                    }
                                    name="beans"
                                    id="beans"
                                    type="text"
                                />
                            </td>
                            <td>0</td>
                            <td>{Math.round(((4 * beans) / calorie) * 100)}</td>
                            <td>
                                {(beans / 15).toFixed(2)}
                                {setBeansServing((beans / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="grains"> grains </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setGrains(e.target.value)
                                    }
                                    name="grains"
                                    id="grains"
                                    type="text"
                                />
                            </td>
                            <td>12</td>
                            <td>
                                {Math.round(((4 * grains) / calorie) * 100)}
                            </td>
                            <td>
                                {(grains / 15).toFixed(2)}
                                {setGrainsServing((grains / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="otherCarb"> other Carb </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setOtherCarb(e.target.value)
                                    }
                                    name="otherCarb"
                                    id="otherCarb"
                                    type="text"
                                />
                            </td>
                            <td>0</td>
                            <td>
                                {Math.round(((4 * otherCarb) / calorie) * 100)}
                            </td>
                            <td>
                                {(otherCarb / 15).toFixed(2)}
                                {setOtherCarbServing((otherCarb / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="dairy"> dairy </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setDairy(e.target.value)
                                    }
                                    name="dairy"
                                    id="dairy"
                                    type="text"
                                />
                            </td>
                            <td>0</td>
                            <td>{Math.round(((4 * dairy) / calorie) * 100)}</td>
                            <td>
                                {(dairy / 12).toFixed(2)}
                                {setDairyServing((dairy / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                (1 serv = 15 g)
                                <label htmlFor="nonStarchyVegies">
                                    {" "}
                                    Non Starchy Vegies{" "}
                                </label>
                            </td>
                            <td>
                                <input
                                    onKeyUpCapture={(e) =>
                                        setNonStarchyVegies(e.target.value)
                                    }
                                    name="nonStarchyVegies"
                                    id="nonStarchyVegies"
                                    type="text"
                                />
                            </td>
                            <td>18</td>
                            <td>
                                {Math.round(
                                    ((4 * nonStarchyVegies) / calorie) * 100
                                )}
                            </td>
                            <td>
                                {(nonStarchyVegies / 5).toFixed(2)}
                                {setNonStarchyVegiesServing((nonStarchyVegies / 15).toFixed(2))}
                            </td>
                        </tr>

                        <tr>
                            <td>Carbs from plant-based protein and avocado</td>
                            <td>23</td>
                            <td>7</td>
                            <td>3</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                <span id="totalcarbs"></span>
                <span id="carbServingTotal"></span>
            </form>
        </div>
    );
};

export default CarbsSeving;
