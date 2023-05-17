import { useState } from "react";


function Home() {
    const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
        <div className="h-20 w-20 rounded-full flex justify-center items-center bg-blue-900 mb-4 text-white text-xl">
         {count}
         </div>
      <button
            type="button"
            className="flex items-center justify-center rounded-md bg-indigo-700 w-40 py-4 text-md font-semibold text-white shadow-sm hover:text-black hover:bg-indigo-300"
          onClick={()=>setCount(count + 1)}
          >
            
           Count
          </button>
         
    </div>
  );
}

export default Home;
