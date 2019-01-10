import React, { Component } from "react";

class EpisodePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {}
    };
  }

  componentDidMount() {
    fetch(
      `http://api.tvmaze.com/shows/6771/episodebynumber?season=${
        this.props.match.params.season
      }&number=${this.props.match.params.number}`
    )
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
          {data.name}
          <div dangerouslySetInnerHTML={createDescription()} />
        </div>
      );
    }
  }
}

export default EpisodePage;
