import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <h1>REGISTER</h1>
      <form className={styles.form}>
        <div className={styles.tarjeta}>
          <label>NOMBRE</label>
          <input type="text" />
        </div>
        <div className={styles.tarjeta}>
          <label>CONTRASEÑA</label>
          <input type="password" />
        </div>
        <div className={styles.tarjeta}>
          <label>REPITE CONTRASEÑA</label>
          <input type="password" />
        </div>
        <div className={styles.btn}>
          <button>REGISTRATE</button>
        </div>
        <div className={styles.tarjeta}>
          <p>SI YA ESTAS REGISTRADO</p>
          <button>INICIA SESION</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
