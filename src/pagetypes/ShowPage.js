import React, { Component } from "react";
import styled from "styled-components";

import EpisodesList from "../components/EpisodesList";

import {
  Wrapper,
  Container,
  ContentWrapper,
  Thumbnail,
  BackgroundImg
} from "../styles/scafolding";

import { Title, Description } from "../styles/text";

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
            <Title>{data.name}</Title>
            <ContentWrapper>
              <Thumbnail src={data.image.medium} alt={data.name} />
              <div>
                <Title as="h4">Rating: {data.rating.average}</Title>
                <Description dangerouslySetInnerHTML={createSummary()} />
                <Title as="h4">Genres:</Title>
                {data.genres.map(genre => (
                  <Tag key={genre}>{genre}</Tag>
                ))}
              </div>
            </ContentWrapper>
            <EpisodesList episodes={data._embedded.episodes} />
          </Container>
          <BackgroundImg image={data.image.original} role="img" />
        </Wrapper>
      );
    }
  }
}

const Tag = styled.span`
  margin: 0 3px;
  padding: 5px;
  color: #000;
  font-size: 1rem;
  background: hotpink;
`;

export default ShowPage;
