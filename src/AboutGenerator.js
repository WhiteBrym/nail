
import {  useParams,Route,Link} from "react-router-dom";
function AboutGenerator(props){
    return(
        <>
        <ul>
        <Route>
        {
            props.data.map(
                (item,index) =>{
                   return <li><Link to={item.link}><img width='300px' height='250px' src={item.img}></img></Link></li>
                }
            )
        }
        </Route>
        </ul>
        </>
    )
}
export default AboutGenerator