import { createContext, useContext, useState } from "react";

const AnthropContext = createContext();

const AnthropProvider = ({children}) =>{
    const [anthrop, setAnthrop] = useState({});
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [leanMass, setLeanMass] = useState("");
    const [active, setActive] = useState("");
    const [gender, setGender] = useState("");
    const [energyNeed, setEnergyNeed] = useState(0);
    const [calorie, setCalorie] = useState(0);
    // step 4 food exchange
    const [starchyVegiesServing, setStarchyVegiesServing] = useState(0);
    const [fruitServing, setFruitServing] = useState(0);
    const [beansServing, setBeansServing] = useState(0);
    const [grainsServing, setGrainsServing] = useState(0);
    const [otherCarbServing, setOtherCarbServing] = useState(0);
    const [dairyServing, setDairyServing] = useState(0);
    const [nonStarchyVegiesServing, setNonStarchyVegiesServing] = useState(0);
    const [leanServing, setLeanServing] = useState(0);
    const [mediumFatProteinServing, setMediumFatProteinServing] = useState(0);
    const [highProtienServing, setHighProtienServing] = useState(0);
    const [lowFiberNutServing, setLowFiberNutServing] = useState(0);
    const [medFiberNutServing, setmedFiberNutServing] = useState(0);
    const [highFiberNutServing, setHighFiberNutServing] = useState(0);
    const [oilSolidFatsServing, setOilSolidFatsServing] = useState(0);
    const [avocadoServing, setAvocadoServing] = useState(0);
    return (
        <AnthropContext.Provider
            value={{
                anthrop,
                height,
                age,
                weight,
                leanMass,
                active,
                gender,
                energyNeed,
                calorie,
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
                setAge,
                setHeight,
                setWeight,
                setLeanMass,
                setActive,
                setGender,
                setEnergyNeed,
                setCalorie,
                setStarchyVegiesServing,
                setFruitServing,
                setBeansServing,
                setGrainsServing,
                setOtherCarbServing,
                setDairyServing,
                setNonStarchyVegiesServing,
                setOilSolidFatsServing,
                setAvocadoServing,
                setLeanServing,
                setMediumFatProteinServing,
                setHighProtienServing,
                setLowFiberNutServing,
                setmedFiberNutServing,
                setHighFiberNutServing,
            }}
        >
            {children}
        </AnthropContext.Provider>
    );

};

export const useGlobalContext = () =>{
    return useContext(AnthropContext);
}

export { AnthropContext, AnthropProvider};

