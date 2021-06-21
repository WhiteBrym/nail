import {  useParams} from "react-router-dom";
function AboutDescription(props){
    let {catName} = useParams();
    console.log(useParams())
    return(<>
         <div>
           {props.data.map(item =>{
             
               if(item.link.substr(7) === catName){
                return <img src={item.img}></img>
                 console.log(item.img)
               }
           })}
            <h1>User: {catName} </h1>
        </div>
    </>)
}
export default AboutDescription