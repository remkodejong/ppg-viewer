import React, { Component } from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";

import StateContainer from "../StateContainer";
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
  componentDidMount() {
    const { episodes } = this.props.state;
    const { getShow } = this.props;
    if (!episodes.length) {
      getShow(6771);
    }
  }

  render() {
    const { loading, episodes, show } = this.props.state;
    const { getShowSummary } = this.props;

    if (!episodes.length || loading) {
      return <div>Loading content please wait...</div>;
    }
    return (
      <Wrapper>
        <Container>
          <Title>{show.name}</Title>
          <ContentWrapper>
            <Thumbnail src={show.image.medium} alt={show.name} />
            <div>
              <Title as="h4">Rating: {show.rating.average}</Title>
              <Description dangerouslySetInnerHTML={getShowSummary()} />
              <Title as="h4">Genres:</Title>
              {show.genres.map(genre => (
                <Tag key={genre}>{genre}</Tag>
              ))}
            </div>
          </ContentWrapper>
          <EpisodesList episodes={episodes} />
        </Container>
        <BackgroundImg image={show.image.original} role="img" />
      </Wrapper>
    );
  }
}

const ConnectedShowPage = () => (
  <Subscribe to={[StateContainer]}>
    {state => <ShowPage {...state} />}
  </Subscribe>
);

const Tag = styled.span`
  margin: 0 3px;
  padding: 5px;
  color: #000;
  font-size: 1rem;
  background: hotpink;
`;

export default ConnectedShowPage;
