import StylesHome from "../View/Home.module.css";
import MaterialComplementario from "../components/Mcomplemetario/Mcomplemetario";
import Conectados from "../components/Conectados/Conectados";

const Home = () => {
    return (
        <main className={StylesHome.container}>
            <MaterialComplementario />
            <Conectados />
        </main>
    );
}

export default Home;
