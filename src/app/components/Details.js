import React from 'react';

export class Details extends React.Component{

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            data:[] 
        };
    }

    genreList = function(x){
        let a = []
        
        for(let i=0; i<x.length; i++){
            a.push( x[i].name )
        }
        return a
    }

    castList = function (x){
        let a = []
        for (let i=0; i<8; i++) {
            a.push(<div className = 'column-c' key = {x[i].id}>
            <div >
                 <img id="image-d" src={`https://image.tmdb.org/t/p/w342/${x[i].profile_path}`}></img>
            </div>
            <div className="cast-name" > 
                {x[i].name} as {x[i].character}

            </div>
        </div>)
        }
        
        return a
    }
   
    componentDidMount (){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=69058331fe295fbe92db92d040420904&append_to_response=credits`)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded:true,
                data: result
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
        console.log(data)
        if (error){
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading...</div>
        } else{
                return <div className= 'details'>
                            <img id= 'detailsImg' src= {`https://image.tmdb.org/t/p/w342/${data.poster_path}`}></img>

                            
                            <div>
                                <div className= 'info'>
                                    <h3 className= 'info-h'>Information</h3>
                                    <h4 className = 'info-t'>Release Date</h4>
                                    <h5 className = 'info-a'>{data.release_date}</h5>
                                    <h4 className = 'info-t'>Runtime</h4>
                                    <h5 className = 'info-a'> {data.runtime} min </h5>
                                    <h4 className = 'info-t'> Budget</h4>
                                    <h5 className = 'info-a'>$ {data.budget}</h5>
                                    <h4 className = 'info-t'>Revenue</h4>
                                    <h5 className = 'info-a'>$ {data.revenue}</h5>
                                    <h4 className = 'info-t'>Genres</h4>
                                    <h5 className = 'info-a' > {this.genreList(data.genres)} </h5>
                                    <h4 className = 'info-t'>Tagline</h4>
                                    <h5 className = 'info-a'>{data.tagline}</h5>
                                    <h4 className = 'info-t'>Homepage</h4>
                                    <h5 ><a className = 'info-l' href = {`${data.homepage}`} target = 'blank'>{data.homepage}</a></h5>
                                </div>
                                <h1 id = 'title'> { data.title} <div className="scr-d">
                                {data.vote_average }
                                </div> </h1>
                                
                            </div>
                            
                            <div id='overview-t'>
                                
                                    Overview : 
                                    <p id= 'overview'> {data.overview} </p>
                                
                            </div>

                            <div>

                               <h1 className = 'title-c'> Cast Overview : </h1>

                                {this.castList(data.credits.cast)}
                            </div>
                            
                       </div>
                    
             }
        
    }
}