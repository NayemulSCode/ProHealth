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
                setAge,
                setHeight,
                setWeight,
                setLeanMass,
                setActive,
                setGender,
                setEnergyNeed,
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

