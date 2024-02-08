import { useEffect, useState, useRef } from "react"

function App(){

  let [number , setNumber] = useState(false)

  let [char , setChar] = useState(false)
  let [length , setLength] = useState(8);
  let [password, setPassword] = useState("")


  const passwordcopy = useRef(null);

  


  useEffect(() => {
    
    let pass = "";

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index;

    if(number){
      str += "0123456789"
    }

    if(char){
      str += "!@#$%^&*()-_=+"
    }

    for (let i = 0; i < length; i++) {
      index = Math.floor(Math.random()*str.length)
      pass += str[index];
    }

    setPassword(pass)

  },[number,length,char])


  const copytoclipboard = () => {
    passwordcopy.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 flex flex-col flex-wrap justify-center">
      <h1 className='text-yellow-300 text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 flex-col flex-wrap">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordcopy}
        />
        <button onClick={copytoclipboard} className='outline-none bg-sky-400 text-white px-3 py-0.5 shrink-0'>copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2 flex-wrap'>
      <div className='flex items-center gap-x-1 flex-wrap'>
        <input 
        type="range"
         className='cursor-pointer'
         min={8}
         max={100}
         value={length}
         onChange={(e) => setLength(e.target.value)}
         />
        <label className="text-white">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onClick={() => setNumber(prev => !prev)}
      />
      <label className="text-white" htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              onClick={() => setChar(prev => !prev)}
          />
          <label className="text-white" htmlFor="characterInput">Characters</label>
      </div>
    </div>
    
</div>
    
  )
}


export default App