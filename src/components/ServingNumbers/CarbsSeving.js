import React, { useState } from "react";
import { AnthropContext, useGlobalContext } from "../../context/Context";

const CarbsSeving = () => {
    const {calorie,setServing} = useGlobalContext(AnthropContext);
    const [starchyVegies, setStarchyVegies] = useState(null)
    const [fruit, setFruit] = useState(null)
    const [beans, setBeans] = useState(null)
    const [grains, setGrains] = useState(null)
    const [otherCarb, setOtherCarb] = useState(null)
    const [dairy, setDairy] = useState(null)
    const [nonStarchyVegies, setNonStarchyVegies] = useState(null)
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="calulator-table" id="tracker">
            <form className="form" onSubmit={handleSubmit}>
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th colSpan={2}>Carbohydrates</th>
                            <th>Total Carbs (g)</th>
                            <th>Net Carbs (g)</th>
                            <th>% of total cals</th>
                            <th>Servings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>Pre/Post Drinks & Bone Broth</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0%</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                                %
                            </td>
                            <td>{Math.round(starchyVegies / 15)}</td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                            <td>
                                {Math.round(((4 * fruit) / calorie) * 100)}%
                            </td>
                            <td>
                                {Math.round(fruit / 15)}
                                {setServing(Math.round(fruit / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                            <td>
                                {Math.round(((4 * beans) / calorie) * 100)}%
                            </td>
                            <td>
                                {Math.round(beans / 15)}
                                {setServing(Math.round(beans / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                                {Math.round(((4 * grains) / calorie) * 100)}%
                            </td>
                            <td>
                                {Math.round(grains / 15)}
                                {setServing(Math.round(grains / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                                {Math.round(((4 * otherCarb) / calorie) * 100)}%
                            </td>
                            <td>
                                {Math.round(otherCarb / 15)}
                                {setServing(Math.round(otherCarb / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                            <td>
                                {Math.round(((4 * dairy) / calorie) * 100)}%
                            </td>
                            <td>
                                {Math.round(dairy / 12)}
                                {setServing(Math.round(dairy / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td>(1 serv = 15 g)</td>
                            <td>
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
                                %
                            </td>
                            <td>
                                {Math.round(nonStarchyVegies / 5)}
                                {setServing(Math.round(nonStarchyVegies / 15))}
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>Carbs from plant-based protein and avocado</td>
                            <td>23</td>
                            <td>7</td>
                            <td>3%</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CarbsSeving;
