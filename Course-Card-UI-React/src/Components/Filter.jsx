import { buttondata } from "./data";
// import './Filter.css'

function Filter({category,setcategory}) {

    function onClicked(course_name){
        category = course_name;
        setcategory(category);
        console.log(category);
    }

    return(
            buttondata.map((obj) => {
                return(
                    <button className="text-lg px-2 py-1 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300" onClick={() => onClicked(obj.name)} key={obj.id}>{obj.name}</button>
                )
            })
    );
}

export default Filter;