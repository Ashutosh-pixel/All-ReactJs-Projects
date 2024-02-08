import Response from "./Response";
import Card from "./Card";
import { useState,useEffect } from "react";
import Spinner from "./Spinner";


function Cards({category}) {
   

    let [allcourses, setallcourses] = useState([]);
    let [loading, setLoading] = useState(true);
    const [likedarray, setlikedarray] = useState([]);
    let [icon,seticon] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        let allData = []
        
        if(category === "All"){
            Response().then((data) => {
                Object.values(data.data).forEach((element) => {
                    element.forEach((course) => {
                        allData.push(course);
                    })
                })
                setallcourses(allData)
                setLoading(false);
                // console.log(data);
            })
        }
        else{
            setLoading(true);
            Response().then((data) => {
                // setallcourses(data.data[`${category}`])
                // console.log(allcourses);
                allcourses = data.data[`${category}`]
                setallcourses(allcourses);
                // console.log(allcourses);
                // console.log(data.data[`${category}`]);
                setLoading(false);

            })
        }
        
        

    },[category]);

    // console.log(loading);
    // console.log(allcourses);


    return(
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {
                loading ? (<Spinner/>) : (
                    allcourses.map((course) => <Card key={course.id} course={course} likedarray={likedarray} setlikedarray={setlikedarray} icon={icon} seticon={seticon}/>)
                )
            }
        </div>
    )
}

export default Cards