import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { useState } from "react";


function Card({course,likedarray,setlikedarray,icon,seticon}) {

    // let [state, setState] = useState(false);

    function clickHandler() {

        icon = !icon;
        // likedarray.includes(course.id) ? likedarray.pop(course.id) 
        
        if(!likedarray.includes(course.id)) {
            likedarray.push(course.id);
            toast.success("Liked 🩷🩷");
        }
            
        else{
            for (let i = 0; i < likedarray.length; i++) {
                if(likedarray[i] === course.id){
                    likedarray.splice(i,1);
                    toast.warn("Not intrested 😒😒")
                }
            }
        }
        seticon(icon)
        setlikedarray(likedarray);
        console.log(likedarray);
        console.log(icon);
    }

    // console.log(course);
    return (
        <div className='w-[300px] dark:bg-gray-800 bg-opacity-80 rounded-md overflow-hidden'>
            <div className="relative">
                <img src={course.image.url} alt="" />
                
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedarray.includes(course.id) ?
                            (<FcLike fontSize={"2rem"}></FcLike>):
                            (<FcLikePlaceholder fontSize={"2rem"}/>)
                        }
                        
                    </button>
                </div>
            </div>

            <div className='p-4'>
                <p className="font-semibold text-lg leading-6 text-white">{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>

        </div>
    )
}

export default Card