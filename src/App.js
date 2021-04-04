import React from "react"
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component{
    state = {
        isLoading : true,
        movies: []
    };

    render() {
        const {isLoading} = this.state
        console.log(isLoading)
        return (
            <div>
                <h1>{isLoading ? "Loading..." : "we are ready"}</h1>
            </div>)
    }

    constructor() {
        super();
        console.log('hello')
    }

    getMovies = async () => {
        const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
        return movies;
    }

    componentDidMount() {
        this.getMovies().then(movie => console.log(movie));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('I Just updated')
        console.log(this.state.isLoading)
    }

    componentWillUnmount() {
        console.log('Goodbye')
    }
}

export default App;
