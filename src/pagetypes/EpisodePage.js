import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Subscribe } from "unstated";
import StateContainer from "../StateContainer";

import {
  Wrapper,
  Container,
  ContentWrapper,
  DescriptionWrapper,
  Thumbnail,
  BackgroundImg
} from "../styles/scafolding";

import { Fade } from "../styles/animations";

import { Title, Description } from "../styles/text";

class EpisodePage extends Component {
  state = {
    animateIn: false
  };

  componentDidMount() {
    const { getEpisode } = this.props;
    const { params } = this.props.match;

    getEpisode(params.season, params.number);
    this.setState({ animateIn: true });
  }

  render() {
    const { currentEpisode, loading } = this.props.state;
    const { getEpisodeSummary } = this.props;

    if ((!currentEpisode.name && !currentEpisode.image) || loading) {
      return (
        <Wrapper>
          <Container>
            <Title as="span">Loading content please wait...</Title>
          </Container>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Container>
          <Title>
            S{currentEpisode.season}E{currentEpisode.number} -{" "}
            {currentEpisode.name}
          </Title>
          <ContentWrapper>
            {currentEpisode.image ? (
              <Thumbnail
                src={currentEpisode.image && currentEpisode.image.medium}
                alt={currentEpisode.name}
              />
            ) : (
              <Thumbnail
                src="http://static.tvmaze.com/images/no-img/no-img-landscape-text.png"
                alt={currentEpisode.name}
              />
            )}
            <DescriptionWrapper>
              <Title as="h4">
                First airdate: {currentEpisode.airdate} at{" "}
                {currentEpisode.airtime}
              </Title>
              {currentEpisode.summary ? (
                <Description dangerouslySetInnerHTML={getEpisodeSummary()} />
              ) : (
                <Description>Sorry no description available...</Description>
              )}
              <GoBackLink to="/">&#171; Back to the show</GoBackLink>
            </DescriptionWrapper>
          </ContentWrapper>
        </Container>
        <Fade timeout={1000} in={this.state.animateIn} unmountOnExit>
          <BackgroundImg
            image={currentEpisode.image && currentEpisode.image.original}
            role="img"
          />
        </Fade>
      </Wrapper>
    );
  }
}

const ConnectedEpisodePage = routerProps => (
  <Subscribe to={[StateContainer]}>
    {state => <EpisodePage {...state} {...routerProps} />}
  </Subscribe>
);

const GoBackLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #fff;
  font-size: 1.3em;
  font-weight: bold;
  background-color: purple;
  padding: 10px 15px;
  transition: background-color 0.2s ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: darkviolet;
  }
`;

export default ConnectedEpisodePage;
