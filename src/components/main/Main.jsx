import {Component} from "react";
import Cards from "./cards/Cards";
import Preloader from "./preloader/Preloader";
import Search from "../header/search/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true
  };
  
  searchMovies = (query = "Shrek", lang = "en-US") => {
    this.setState({loading: true});
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=${lang}`)
      .then(r => r.json())
      .then(data => this.setState({movies: data.results, loading: false}))
      .catch((e) => {
        console.error(e);
        this.setState({loading: false});
      });
  };
  
  componentDidMount() {
    this.searchMovies();
  }
  
  render() {
    const {movies, loading} = this.state;
    return (
      <main className="main">
        <Search searchMovies={this.searchMovies}/>
        {
          loading ? <Preloader/> : <Cards movies={movies}/>
        }
      </main>
    );
  }
}
