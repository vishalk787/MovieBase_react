import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


import {Top} from './components/Top'
import {Trending} from './components/Trending'
import {Details} from './components/Details'
import {Navbar} from './components/Navbar'
import { TopRated } from './components/topRated'
import {InTheater} from './components/InTheater'
import {Upcoming} from './components/Upcoming'


class App extends React.Component{

    render(){
       
        return (
            <Router>
                
                    <Navbar/>
                        <section className="middle">
                            
                        <Route  path= '/details/:id' component= {Details}/>

                            <div className="list"> 
                                <Route exact path = '/' component = {Trending}/>
                                <Route exact path = '/TopRated' component = {TopRated}/>
                                <Route exact path = '/Intheater' component = {InTheater}/>
                                <Route exact path = '/Upcoming' component = {Upcoming}/>


                            </div>
                
                        </section>
                
            </Router>
        )
    }
}


ReactDOM.render(<App/>, window.document.getElementById('app'))
module.hot.accept();
