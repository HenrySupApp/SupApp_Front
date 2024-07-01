import MCpromps from "./MCprops";
import MC_data from "../../helpers/MC";
import { useState } from "react";
import StylesMC from "../Mcomplemetario/StylesMC.module.css";

const MaterialComplementario = () => {
    const [data] = useState(MC_data);


    return (
        <div className={StylesMC.container} >
        <h2>Material Complemetario</h2>

        {data.map((d) => {
            return <div key={d.id} className={StylesMC.tema_container}>
                <MCpromps 
                    title={d.title}
                    ver={d.ver}                
                />
            </div>
        })}
        <button className={StylesMC.button}>+</button>
        </div>
    )
}

export default MaterialComplementario;