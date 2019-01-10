import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch("http://api.tvmaze.com/shows/6771?embed=episodes")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;

    function createDescription() {
      return { __html: data.summary };
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading content please wait...</div>;
    } else {
      return (
        <div>
          Showpage
          <header className="App-header">
            <img src={data.image.original} className="App-logo" alt="logo" />
            <h1>{data.name}</h1>
            <div dangerouslySetInnerHTML={createDescription()} />
          </header>
          <div>
            <ul>
              {data._embedded.episodes.map(episode => (
                <li key={episode.name}>
                  <Link to={`episode/${episode.season}-${episode.number}`}>
                    {episode.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default ShowPage;
