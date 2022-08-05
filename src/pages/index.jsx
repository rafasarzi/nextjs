import Navegador from "../components/Navegador"
export default function Home() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" cor='#85456B'/>
      <Navegador texto="Exemplo" destino="/exemplo" cor='#B97898'/>
      <Navegador texto="JSX" destino="/jsx" cor='#89678B'/>

    </div>
  )
}