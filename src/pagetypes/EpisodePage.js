import React, { Component } from "react";

import {
  Wrapper,
  Container,
  ContentWrapper,
  Thumbnail,
  BackgroundImg
} from "../styles/scafolding";

import { Title, Description } from "../styles/text";

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

    function createSummary() {
      return { __html: data.summary };
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading content please wait...</div>;
    } else {
      return (
        <Wrapper>
          <Container>
            <Title>
              S{data.season}E{data.number} - {data.name}
            </Title>
            <ContentWrapper>
              <Thumbnail src={data.image.medium} alt={data.name} />
              <div>
                <Title as="h4">
                  First airdate: {data.airdate} at {data.airtime}
                </Title>
                <Description dangerouslySetInnerHTML={createSummary()} />
              </div>
            </ContentWrapper>
          </Container>
          <BackgroundImg image={data.image.original} role="img" />
        </Wrapper>
      );
    }
  }
}

export default EpisodePage;
