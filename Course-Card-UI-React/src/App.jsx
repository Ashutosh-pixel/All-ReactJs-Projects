import { Cards,Filter,NavBar } from "./Components/Components";
import { useState } from "react";


function App() {

  const [category, setcategory] = useState("All");

  console.log(category);

  return (
    <div className='wrapper'>
        <div className='min-h-screen flex flex-col dark:bg-gray-700'>
            <div className='dark:bg-gray-800 py-4'>
              <h1 className='text-3xl font-bold text-center text-white'>Popular Courses</h1>
            </div>
            <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
                  <Filter category={category} setcategory={setcategory}></Filter>
            </div>
            <div className='w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
              <Cards category = {category}></Cards>
            </div>
        </div>
    </div>
  ) 
}

export default App
