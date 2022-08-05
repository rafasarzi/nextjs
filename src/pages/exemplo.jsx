import Cabecalho from "../components/Cabecalho"
import Layout from '../components/Layout'


export default function Exemplo(){
    return(
        <Layout titulo="Exemplo CSS Modularizado">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprende Next na prática"/>
        </Layout>
    )
}
// import styles from '../styles/Estiloso.module.css'
// import Layout from '../components/Layout'

// export default function Estiloso(){
//     return(
//         <Layout titulo="Exemplo de CSS Modularizado">
//             <div className={styles.roxo}>
//                 <h1>Estilo usando css</h1>
//             </div>
//         </Layout>
//     )
// }