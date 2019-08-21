import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export class Navbar extends React.Component{
    render() {
        return (
            <ul>
            <li className = 'top'> <i className="material-icons">local_movies</i>  Moviebase</li>
            <li><Link to="/Upcoming">Coming Soon</Link></li>
            <li><Link to ="/InTheater">In Theater</Link></li>
            <li><Link to="/TopRated">Top Rated</Link></li>
            <li><Link className="active" to="/">Trending</Link></li>


          </ul>
        );
    }
}