import { useCallback, useEffect, useState, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [passwd, setPasswd] = useState("");

  
  const passwordref = useRef()   //  useRef hook

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPasswd(pass);
  }, [length, number, char, setPasswd]);
 
  const copypassword = useCallback(() =>{
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(passwd)
  }, [passwd])

  useEffect(() =>{passwordGenerator()    
  }, [length, number, char, passwordGenerator])
  return (
    <div className='flex justify-center items-center mt-25'>
    <div className="w-[500px] h-[200px] rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-3xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passwd}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button 
          onClick={copypassword}
          className='bg-yellow-300'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
           <input type="range" 
                  min={6} 
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
         </div>
         <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={number}
          id='numberinput'
          onChange={() => {
            setNumber((prev)=> !prev);
          }}

          />
          <label htmlFor='numberinput'>number</label>
         </div>
         <div className="flex items-center gap-x-1">
          <input
          type='checkbox'
          defaultChecked={char}
          id='characterinput'
          onChange={() => {
            setChar((prev)=> !prev);
          }}

          />
          <label htmlFor='characterinput'>character</label>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
