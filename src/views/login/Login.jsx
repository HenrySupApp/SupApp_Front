import { useState } from "react";

import styles from "./Login.module.css";

const Login = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <div className={styles.container}>
      <h1>LOGIN</h1>
      <form className={styles.form}>
        <div className={styles.tarjeta}>
          <label htmlFor="name">NOMBRE</label>
          <input
            type="text"
            name="nombre"
            value={userData.name}
            onChange={handleLoginChange}
          />
        </div>
        <div className={styles.tarjeta}>
          <label htmlFor="password">CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleLoginChange}
          />
        </div>
        <div className={styles.btn}>
          <button>INGRESAR</button>
        </div>
        <div className={styles.tarjeta}>
          <p>ERES NUEVO ?</p>
          <button>REGISTRATE</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
