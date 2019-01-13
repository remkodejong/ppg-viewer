import { Container } from "unstated";

export default class StateContainer extends Container {
  state = {
    loading: false,
    show: {},
    currentEpisode: {},
    episodes: []
  };

  getShow = async showId => {
    this.setState({
      loading: true
    });
    await fetch(`http://api.tvmaze.com/shows/${showId}?embed=episodes`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            loading: false,
            show: result,
            episodes: result._embedded.episodes
          });
        },
        error => {
          this.setState({
            loading: false,
            error
          });
        }
      );
  };

  // needed for dangerouslySetInnerHtml
  getShowSummary = () => {
    return { __html: this.state.show.summary };
  };

  getEpisode = async (season, episode) => {
    this.setState({
      loading: true,
      currentEpisode: {}
    });
    await fetch(
      `http://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${episode}`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            loading: false,
            currentEpisode: result
          });
        },
        error => {
          this.setState({
            loading: false,
            error
          });
        }
      );
  };

  // needed for dangerouslySetInnerHtml
  getEpisodeSummary = () => {
    return { __html: this.state.currentEpisode.summary };
  };
}
