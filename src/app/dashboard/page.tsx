import styles from "./dash.module.css"

export default function Page() {
    return <div className={styles.conta}>
        <div className={styles.contenedores}>
            <div className={styles.cont}>Aquí se visualizará los últimos reportes</div>
            <div className={styles.cont}>Aquí se visualizará las últimas solicitudes recibidas</div>
            <div className={styles.cont}>Aquí se ve la información entrante de los residentes</div>
        </div>
        </div> 
}