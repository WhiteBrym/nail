
import AboutGenerator from './AboutGenerator';


function About (props){
    return(
        <div className='About'>
         <AboutGenerator data={props.data}/>
        </div>
    )
}
export default About