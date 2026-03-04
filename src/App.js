import "./styles.css";

export default function App() {
  const Edad = 17;
  const AñoNacimiento = 2008;
  const AñoActual = 2025;

  return (
    <div className="App">
      <h1>Mi año de naciminto es {AñoNacimiento}</h1>
      <p>El año actual es: {AñoActual}</p>
      <p>Mi edad es {AñoActual - AñoNacimiento} </p>
      <p>el año donde cumplo los 30 es: {13 + AñoActual}</p>
    </div>
  );
}
