import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AnthropContext, useGlobalContext } from '../../context/Context';
import './Anthropo.css';
const Input = ({name, register, required }) => (
    <>
      <input {...register(name, { required })} />
    </>
  );
const Anthropometrics = () => {
    const {
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
    } = useGlobalContext(AnthropContext);
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        e.preventDefault();
        const {gender, age, height, weight, active, bodyFat} = data;
    
        console.log(gender, age, height, weight, active, bodyFat);
        // start calculation
        let heightCm = height*2.54;
        let weightKg = weight/2.198697;
        let bodyMass = weightKg * (bodyFat/100);
        let leanMass = weightKg - bodyMass
        console.log(heightCm, weightKg, leanMass);
        // end calculation
        // set data in context
        setAge(age);
        setHeight(heightCm);
        setWeight(weightKg);
        setLeanMass(leanMass);
        setActive(active);
        setGender(gender);
    }
    // calculate benedict
    const handleExerciseEnergyExpenditure = ()=>{
        if(gender==='male'){
            let EEF = Math.round((66.6+(13.7*weight)+(5 * height)-(6.8*age))*active);
            setEnergyNeed(EEF);
        }
        if( gender==='female'){
            let EEF = Math.round((655+(9.6*weight)+(1.85*height)-(4.7*age))*active);
            setEnergyNeed(EEF);
        }
    }
    // 
    const handleKatchMcArdle = () =>{
            let EEF = Math.round((370 + (21.6*leanMass))*active);
            setEnergyNeed(EEF);
        
    }
    // const pop = useCallback(() => {
    //     setEnergyNeed(energyNeed => !energyNeed);
    //  }, []);
    return (
        <div className="calulator-table" id="tracker">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <table className="table-fill">
                <thead>
                    <tr>
                        <th>Enter your information</th>
                        <th>Input filed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gender</td>
                        <td>
                            
                            <select className="w-100" {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                    <td> <Input name="age" register={register} required /></td>
                    </tr>
                    <tr>
                        <td>Weight(lbs)</td>
                        <td><Input name="weight" register={register} required /></td>
                    </tr>
                    <tr>
                        <td>Height (in.)</td>
                        <td><Input value={height} name="height" register={register} required /></td>
                    </tr>
                    <tr>
                        <td>Body Fat(%)</td>
                        <td><Input  name="bodyFat" register={register} required /></td>
                    </tr>
                    <tr>
                        <td>Activity Level (1.0-2.0)</td>
                        <td><Input name="active" register={register} required /></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleKatchMcArdle} >BMR (K.Mc)</button><button onClick={handleExerciseEnergyExpenditure} className="btn btn-info small" type="submit" >BMR (H.Benedict)</button></td>
                        <td><h5>
                            {energyNeed}
                        </h5></td>
                    </tr>
                </tbody>
            </table>
        </form>
        </div>
    )
}

export default Anthropometrics;
