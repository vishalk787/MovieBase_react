import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export class TopRated extends React.Component{

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data:[] 
        };
    }
    loadlist = function (x){
        console.log('function called', x)
        let a = []
        for (let i=0; i<x.length; i++) {
            a.push(<div className = 'column' key = {x[i].id}>
            <div className="image" >
                <Link to={`/details/${x[i].id}`}> <img id="image" src={`https://image.tmdb.org/t/p/w342/${x[i].poster_path}`}></img></Link>
            </div>
            <div className="name" > 
                {x[i].title}
                <div className="scr">
                    {x[i].vote_average}                
                </div>
            </div>
        </div>)
        }
        
        return a
    }
    componentDidMount (){
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=69058331fe295fbe92db92d040420904&language=en-US&page=1')
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded:true,
                data: result.results
            })
        },
            (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                });
            }
        )
    }
    

    render() {
        const { error, isLoaded, data } = this.state;
        if (error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading...</div>
        } else{
                return <div> 
                    <h1 className= 'type'>Top Rated</h1>            
                
                {this.loadlist(data)} </div>
             }
        
    }
}