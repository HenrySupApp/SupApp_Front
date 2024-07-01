import StylesConectados from "./Conectados.module.css";

const PropsConect = ({name, className}) => {

    return (
        <div className={StylesConectados.Name}>
            <span className={className}> </span>
            <h4>{name}</h4>
        </div>
    )
}

export default PropsConect;