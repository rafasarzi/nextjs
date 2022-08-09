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
      <Navegador texto="Exemplo" destino="/exemplo" cor='#bdb0d0'/>
      <Navegador texto="JSX" destino="/jsx" cor='#89678B'/>
      <Navegador texto="Navegação 1" destino="/navegacao" cor='#d8bfb1'/>
      <Navegador texto="Navegação 2" destino="/cliente/sp-2/321" cor='#B97898'/>
      <Navegador texto="Componente com estado" destino="/estado" cor='#B97875'/>
      <Navegador texto="Integração com API" destino="/integracao" cor='#89677B'/>

    </div>
  )
}