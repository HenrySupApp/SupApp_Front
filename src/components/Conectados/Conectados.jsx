import Users from "../../helpers/Users";
import PropsConect from "./PropsConect";
import { useState } from "react";
import StylesMC from "../Mcomplemetario/StylesMC.module.css";
import StylesConectados from "./Conectados.module.css"

const Conectados = () => {
    const [userData] = useState(Users);


    const classe = (status) => {
        if(status === true) {
            return StylesConectados.conect
        } else {
            return StylesConectados.desconect
        }
    }

    const trueStatus = [...userData].sort((a, b) => {
        if (a.status === true && b.status === false) {
            return  - 1;
        }
    })


    return (
        <div className={StylesMC.container}>
        <h2>Conectados</h2>


        {trueStatus.map((u) => {
            return <ul>
                <li key={u.id}><PropsConect name={u.name} className={classe(u.status)}/></li>
                
            </ul>
        })}
        <h2>TAs</h2>
        </div>
    )
}

export default Conectados;