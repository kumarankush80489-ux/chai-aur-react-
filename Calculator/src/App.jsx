import { useState } from 'react'

function App() {
  const [calculator, setCalculator] = useState("")

  const click = (value) =>{
    setCalculator((prev) => prev+value)
  }

  const clear = () =>{
    setCalculator("")
  }

  const calculate = () =>{
    try{
      const result = eval(calculator)
      setCalculator(result.toString())
    } catch (error){
      setCalculator("Error");
    }
    
  }
  
  return (
    <div className='flex justify-center items-center h-screen bg-orange-200'>
      <div className='bg-gray-800 rounded-2xl w-72 p-6 h-72'>
        <h1 className='text-white justify-center items-center flex font-bold'>Simple calculator</h1>

        <input
        type='text'
        value={calculator}
        readOnly
        className='w-full text-right text-2xl border border-gray-400 p-2 rounded mb-4'
        />
        <div className='grid grid-cols-4 gap-2'>
          {["7", "8", "9", "/",
            "6", "5", "4", "*",
            "3", "2", "1", "-",
            "0", ".", "=", "+"].map((btn) => (
            <button
            key={btn}
            onClick={() => (btn === "=" ? calculate() : click(btn))}
            className='bg-violet-300 hover:bg-gray-400 text-xl'
            >{btn}</button>
            ))}
          <button 
          onClick={clear}
          className='bg-slate-400 text-lime-200'
          >Clear</button>
        </div>
      </div>
    </div>
  )
}

export default App
