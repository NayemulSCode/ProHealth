import React, { useEffect, useState } from "react";
import { AnthropContext, useGlobalContext } from "../../context/Context";

const FoodExchangeTable = () => {
    const {
        starchyVegiesServing,
        fruitServing,
        beansServing,
        grainsServing,
        otherCarbServing,
        dairyServing,
        nonStarchyVegiesServing,
        leanServing,
        mediumFatProteinServing,
        highProtienServing,
        lowFiberNutServing,
        medFiberNutServing,
        highFiberNutServing,
        oilSolidFatsServing,
        avocadoServing,
    } = useGlobalContext(AnthropContext);
    const [totalClorie, setTotalcalorei] = useState(null);
    const [totalCHO, setTotalCHO] = useState(null);
    const [netCHO, setNetCHO] = useState(null);
    const [totalProtein, setTotalProtein] = useState(null);
    const [totalFat, setTotalFat] = useState(null);
    const [totalFiber, setTotalFiber] = useState(null);
    function updateSubTotal() {
        let proteinFood = document.getElementById("proteinFood");
        let carbsFood = document.getElementById("carbsFood");
        let fatFood = document.getElementById("fatFood");
        // Carbohidrte
        let carbCalorieTotal = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[1].innerHTML);
            }, 0);
        let carbSourceTotal = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[2].innerHTML);
            }, 0);
        document.getElementById("carbSourceTotal").innerHTML =
            "Total g of Carbs from Carb Sources: " + carbSourceTotal;
        let netCarbCHOTotal = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);

        let totalCarbProtein = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[4].innerHTML);
            }, 0);
        document.getElementById("totalCarbProtein").innerHTML =
            "Grams of Protein from Carb Sources: " + totalCarbProtein;

        let carbfatTotal = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[5].innerHTML);
            }, 0);
        let carbfiberTotal = Array.from(carbsFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[6].innerHTML);
            }, 0);
        // Protein
        let protienCalorie = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[1].innerHTML);
            }, 0);
        let plantProtein = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[2].innerHTML);
            }, 0);
        document.getElementById("plantProtein").innerHTML =
            "Grams of  Carb from Plant Protein: " + plantProtein;
        let netPlantCHO = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);

        let proteinTotal = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[4].innerHTML);
            }, 0);
        document.getElementById("totalProtein").innerHTML =
            "Total Grams of Protein from Protein Sources:" + proteinTotal;
        let totalFatFromProtein = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[5].innerHTML);
            }, 0);
        document.getElementById("totalFatFromProtein").innerHTML =
            "Grams of Fat from Carb & Protein Sources: " + totalFatFromProtein;
        let totalProteinFiber = Array.from(proteinFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[6].innerHTML);
            }, 0);

        // fat

        let fatCalorie = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[1].innerHTML);
            }, 0);

        let fatCarbsSourceTotal = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[2].innerHTML);
            }, 0);

        let netFatCHO = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[3].innerHTML);
            }, 0);
        let toatlFatProtien = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[4].innerHTML);
            }, 0);
        let fatTotal = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[5].innerHTML);
            }, 0);
        let totalFatfiber = Array.from(fatFood.rows)
            .slice(1)
            .reduce((total, row) => {
                return total + parseFloat(row.cells[6].innerHTML);
            }, 0);
        setTotalcalorei(carbCalorieTotal + protienCalorie + fatCalorie);
        setTotalCHO(carbSourceTotal + plantProtein + fatCarbsSourceTotal);
        setNetCHO(netCarbCHOTotal + netPlantCHO + netFatCHO);
        setTotalProtein(totalCarbProtein + proteinTotal + toatlFatProtien);
        setTotalFat(carbfatTotal + totalFatFromProtein + fatTotal);
        setTotalFiber(carbfiberTotal + totalProteinFiber + totalFatfiber);
    }

    useEffect(() => {
        updateSubTotal();
    }, [updateSubTotal]);
    return (
        <>
            <h1>Food Exchange Table</h1>
            <div className="calulator-table" id="tracker">
                <table className="table-fill" id="carbsFood">
                    <thead>
                        <tr>
                            <th>Carbs</th>
                            <th>Calories</th>
                            <th>Total CHO</th>
                            <th>Net CHO</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Fiber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Recovery drinks</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>starchy vegetables</td>
                            <td>{Math.round(75 * starchyVegiesServing)}</td>
                            <td>{Math.round(15 * starchyVegiesServing)}</td>
                            <td>
                                {Math.round(15 * starchyVegiesServing) -
                                    Math.round(2 * starchyVegiesServing)}
                            </td>
                            <td>{Math.round(3 * starchyVegiesServing)}</td>
                            <td>0</td>
                            <td>{Math.round(2 * starchyVegiesServing)}</td>
                        </tr>

                        <tr>
                            <td>fruit</td>
                            <td>{Math.round(60 * fruitServing)}</td>
                            <td>{Math.round(15 * fruitServing)}</td>
                            <td>
                                {Math.round(15 * fruitServing) -
                                    Math.round(3 * fruitServing)}
                            </td>
                            <td>0</td>
                            <td>0</td>
                            <td>{Math.round(3 * fruitServing)}</td>
                        </tr>

                        <tr>
                            <td>legumes/lentils</td>
                            <td>{Math.round(120 * beansServing)}</td>
                            <td>{Math.round(15 * beansServing)}</td>
                            <td>
                                {Math.round(15 * beansServing) -
                                    Math.round(7 * beansServing)}
                            </td>
                            <td>{Math.round(7 * beansServing)}</td>
                            <td>{Math.round(1 * beansServing)}</td>
                            <td>{Math.round(7 * beansServing)}</td>
                        </tr>

                        <tr>
                            <td>grains</td>
                            <td>{Math.round(75 * grainsServing)}</td>
                            <td>{Math.round(15 * grainsServing)}</td>
                            <td>
                                {Math.round(15 * grainsServing) -
                                    Math.round(3 * grainsServing)}
                            </td>
                            <td>{Math.round(3 * grainsServing)}</td>
                            <td>0</td>
                            <td>{Math.round(3 * grainsServing)}</td>
                        </tr>

                        <tr>
                            <td>other carbs</td>
                            <td>{Math.round(75 * otherCarbServing)}</td>
                            <td>{Math.round(15 * otherCarbServing)}</td>
                            <td>
                                {Math.round(15 * otherCarbServing) -
                                    Math.round(2 * otherCarbServing)}
                            </td>
                            <td>{Math.round(3 * otherCarbServing)}</td>
                            <td>0</td>
                            <td>{Math.round(2 * otherCarbServing)}</td>
                        </tr>

                        <tr>
                            <td>dairy</td>
                            <td>{Math.round(150 * dairyServing)}</td>
                            <td>{Math.round(12 * dairyServing)}</td>
                            <td>{Math.round(12 * dairyServing)}</td>
                            <td>{Math.round(8 * dairyServing)}</td>
                            <td>{Math.round(8 * dairyServing)}</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>non-starchy vegetables</td>
                            <td>{Math.round(75 * nonStarchyVegiesServing)}</td>
                            <td>{Math.round(5 * nonStarchyVegiesServing)}</td>
                            <td>
                                {Math.round(5 * nonStarchyVegiesServing) -
                                    Math.round(2 * nonStarchyVegiesServing)}
                            </td>
                            <td>{Math.round(2 * nonStarchyVegiesServing)}</td>
                            <td>0</td>
                            <td>{Math.round(2 * nonStarchyVegiesServing)}</td>
                        </tr>
                    </tbody>
                </table>
                <span
                    id="carbSourceTotal"
                    style={{
                        display: "block",
                        textAlign: "start",
                        marginLeft: "2rem",
                        color: "red",
                    }}
                ></span>
                <span
                    id="totalCarbProtein"
                    style={{
                        display: "block",
                        textAlign: "start",
                        marginLeft: "13rem",
                        color: "red",
                    }}
                ></span>
            </div>
            <div className="calulator-table" id="tracker">
                <table className="table-fill" id="proteinFood">
                    <thead>
                        <tr>
                            <th>Protien</th>
                            <th>Calories</th>
                            <th>Total CHO</th>
                            <th>Net CHO</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Fiber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Animal Protein</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr> */}
                        <tr>
                            <td>lean</td>
                            <td>{Math.round(55 * leanServing)}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>{Math.round(7 * leanServing)}</td>
                            <td>{Math.round(3 * leanServing)}</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>mediumFatProtein</td>
                            <td>{Math.round(100 * mediumFatProteinServing)}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>{Math.round(7 * mediumFatProteinServing)}</td>
                            <td>{Math.round(5 * mediumFatProteinServing)}</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>highProtien</td>
                            <td>{Math.round(55 * highProtienServing)}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>{Math.round(7 * highProtienServing)}</td>
                            <td>{Math.round(8 * highProtienServing)}</td>
                            <td>0</td>
                        </tr>
                        {/* <tr>
                            <td>Plant-based protein</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr> */}

                        <tr>
                            <td>lowFiberNut</td>
                            <td>{Math.round(165 * lowFiberNutServing)}</td>
                            <td>{Math.round(3 * lowFiberNutServing)}</td>
                            <td>
                                {Math.round(3 * lowFiberNutServing) -
                                    Math.round(1.5 * lowFiberNutServing)}
                            </td>
                            <td>{Math.round(7 * lowFiberNutServing)}</td>
                            <td>{Math.round(14 * lowFiberNutServing)}</td>
                            <td>{Math.round(1.5 * lowFiberNutServing)}</td>
                        </tr>

                        <tr>
                            <td>medFiberNut</td>
                            <td>{Math.round(170 * medFiberNutServing)}</td>
                            <td>{Math.round(5 * medFiberNutServing)}</td>
                            <td>
                                {Math.round(5 * medFiberNutServing) -
                                    Math.round(2.8 * medFiberNutServing)}
                            </td>
                            <td>{Math.round(5 * medFiberNutServing)}</td>
                            <td>{Math.round(16 * medFiberNutServing)}</td>
                            <td>{Math.round(2.8 * medFiberNutServing)}</td>
                        </tr>

                        <tr>
                            <td>highFiberNut</td>
                            <td>{Math.round(145 * highFiberNutServing)}</td>
                            <td>{Math.round(12 * highFiberNutServing)}</td>
                            <td>
                                {Math.round(12 * highFiberNutServing) -
                                    Math.round(8.5 * highFiberNutServing)}
                            </td>
                            <td>{Math.round(5 * highFiberNutServing)}</td>
                            <td>{Math.round(11 * highFiberNutServing)}</td>
                            <td>{Math.round(8.8 * highFiberNutServing)}</td>
                        </tr>
                    </tbody>
                </table>
                <span
                    id="plantProtein"
                    style={{
                        display: "block",
                        textAlign: "start",
                        marginLeft: "4rem",
                        color: "red",
                    }}
                ></span>
                <span
                    id="totalProtein"
                    style={{
                        display: "block",
                        textAlign: "start",
                        marginLeft: "12rem",
                        color: "red",
                    }}
                ></span>
                <span
                    id="totalFatFromProtein"
                    style={{
                        display: "block",
                        textAlign: "start",
                        marginLeft: "20rem",
                        color: "red",
                    }}
                ></span>
            </div>

            <div className="calulator-table" id="tracker">
                <table className="table-fill" id="fatFood">
                    <thead>
                        <tr>
                            <th>Fat</th>
                            <th>Calories</th>
                            <th>Total CHO</th>
                            <th>Net CHO</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Fiber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>oils & solid fats</td>
                            <td>{Math.round(120 * oilSolidFatsServing)}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>{Math.round(14 * oilSolidFatsServing)}</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <td>Avocado</td>
                            <td>{Math.round(160 * avocadoServing)}</td>
                            <td>{Math.round(8 * avocadoServing)}</td>
                            <td>
                                {Math.round(8 * avocadoServing) -
                                    Math.round(6 * avocadoServing)}
                            </td>
                            <td>{Math.round(2 * avocadoServing)}</td>
                            <td>{Math.round(15 * avocadoServing)}</td>
                            <td>{Math.round(6 * avocadoServing)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="calulator-table" id="tracker">
                <table className="table-fill" id="totalFood">
                    <thead>
                        <tr>
                            <th>Total</th>
                            <th>Calories</th>
                            <th>Total CHO</th>
                            <th>Net CHO</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Fiber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{totalClorie}</td>
                            <td>{totalCHO}</td>
                            <td>{netCHO}</td>
                            <td>{totalProtein}</td>
                            <td>{totalFat}</td>
                            <td>{totalFiber}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FoodExchangeTable;
