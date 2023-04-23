import { useState } from "react";
import Button from "./Button";
function Formulario() {

   const [cantidad, setCantidad] = useState(10000);

   const max = 20000;
   const min = 0;
   const step = 100;

   function handleChange(e) {
      setCantidad(parseInt(e.target.value));
      console.log(e.target.value)
   }

   function handleClickDecremento(){
      const valor = cantidad - step;

      if(valor < min){
         alert("No puedes ir más abajo");
         return;
      } 
      setCantidad(valor);
   }

   function handleClickIncremento(){
      const valor = cantidad + step;
      if(valor > max){
         alert("No puedes ir más arriba");
         return;
      }

      setCantidad(valor);
   }

   return (
      <>
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
            <p className="text-center text-indigo-600 font-bold text-5xl">{cantidad}</p>
         </div>
      </>

   );
}

export default Formulario;
