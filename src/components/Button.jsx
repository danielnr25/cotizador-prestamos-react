function Button({ operador,handleClick }) {




   return (
      <button 
         className="h-10 w-10 flex items-center justify-center font-bold text-2xl text-white bg-indigo-600 hover:ring-2 hover:outline-none focus:ring-offset-2 hover:ring-indigo-500 rounded-full"
         onClick={handleClick}
         >
         {operador}
      </button>
   )
}

export default Button