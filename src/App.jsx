import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

import { useEffect, useState } from "react";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const resultadoPagar = calcularTotalPagar(cantidad, meses)
    setTotal(resultadoPagar)
  }, [cantidad, meses])

  useEffect(() => {
    setPago(total / meses)
  }, [total, meses])

  const max = 20000;
  const min = 0;
  const step = 100;

  function handleChange(e) {
    setCantidad(parseInt(e.target.value));
    console.log(e.target.value)
  }

  function handleClickDecremento() {
    const valor = cantidad - step;

    if (valor < min) {
      alert("No puedes ir más abajo");
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + step;
    if (valor > max) {
      alert("No puedes ir más arriba");
      return;
    }

    setCantidad(valor);
  }
  return (
    <>
      <div className="my-20 max-w-lg mx-auto shadow-sm bg-white p-10">
        <Header />
        <div className="flex justify-between mt-10">
          <Button
            operador='-'
            handleClick={handleClickDecremento}
          />
          <Button
            operador='+'
            handleClick={handleClickIncremento}
          />
        </div>
        <div className="my-6">
          <input
            type="range"
            className="w-full h-6 bg-gray-200 accent-blue-500 hover:accent-blue-600 focus:accent-blue-600"
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            value={cantidad}
          />
          <p
            className="text-center text-indigo-600 font-bold text-5xl"
          >
            {formatearDinero(cantidad)}
          </p>
        </div>

        <h2 className="text-2xl font-extrabold tracking-wide text-gray-800 text-center">Elige un <span className="text-indigo-600">Plazo </span> a pagar</h2>

        <select
          className="mt-5 w-full bg-white border border-gray-700 rounded-lg text-center font-bold text-xl text-gray-900"
          value={meses}
          onChange={(e) => setMeses(parseInt(e.target.value))}
        >
          <option value="6">6 meses</option>
          <option value="9">9 meses</option>
          <option value="12">12 meses</option>
        </select>

        <div className="my-6 space-y-3 bg-gray-200 p-5">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center">Resumen <span className="text-indigo-600">de pagos </span></h2>

          <p className="text-xl text-gray-900 text-center font-bold">{meses} Meses</p>
          <p className="text-xl text-gray-900 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
          <p className="text-xl text-gray-900 text-center font-bold">{formatearDinero(pago)} Mensuales</p>
        </div>
      </div>
    </>
  );
}

export default App;
