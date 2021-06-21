
import './App.css';
import Header from './About';

import Footer from './Footer';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Body from './Body';
import About from './About';
import AboutDescription from './AboutDescription';
const arr = [
  {index:1,
  img:'https://images.justwatch.com/backdrop/178120963/s1920/naruto',
  title:'',
  alt:'',
  link:'/about/naruto1'
  },
  {index:2,
      img:'https://www.film.ru/sites/default/files/filefield_paths/naruto-on-netflix.jpg',
      title:'',
      alt:'',
      link:'/about/naruto2'
      },
      {index:3,
          img:'https://i.pinimg.com/736x/36/9b/be/369bbe8024b601f50ac96363f533939d.jpg',
          title:'',
          alt:'',
          link:'/about/naruto3'
          },
          {index:4,
              img:'https://i.ytimg.com/vi/K6i6-BKxf4Q/maxresdefault.jpg',
              title:'',
              alt:'',
              link:'/about/naruto4'
              },
              {index:5,
                  img:'',
                  title:'',
                  alt:'',
                  link:'/about/naruto5'
                  },
];
function App() {
  return (
    <div className="App">
<Router>
                <nav>
                    <ul>
                        <li >
                            <Link to='/'><p>Home</p></Link>
                        </li>
                        <li>
                            <Link to='/about'><p>About</p></Link>
                        </li>
                    </ul>
                </nav>
                <div className='bodyWrap'>
                <Switch>
                    <Route exact path='/about'>
                      <About data={arr}/>
                    </Route>
                    <Route path='/about/:catName' >
                    <AboutDescription data={arr} />
                    </Route>
                    <Route path='/'>
                    
                        <Body/>
                        
                        </Route>
                </Switch>
                </div>
            </Router>

      <Footer/>
    </div>
  );
}

export default App;
