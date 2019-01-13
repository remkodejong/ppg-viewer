import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Subscribe } from "unstated";
import StateContainer from "../StateContainer";

import {
  Wrapper,
  Container,
  ContentWrapper,
  Thumbnail,
  BackgroundImg
} from "../styles/scafolding";

import { Title, Description } from "../styles/text";

class EpisodePage extends Component {
  componentDidMount() {
    const { getEpisode } = this.props;
    const { params } = this.props.match;

    getEpisode(params.season, params.number);
  }

  //  THIS DOESN'T WORK AS INTENDED
  // shouldComponentUpdate(nextProps) {
  //   const { getEpisode } = this.props;
  //   const { url } = this.props.match;
  //   if (nextProps.match.url !== url) {
  //     getEpisode(nextProps.match.params.season, nextProps.match.params.number);
  //   } else {
  //     return;
  //   }
  // }

  render() {
    const { currentEpisode } = this.props.state;
    const { getEpisodeSummary } = this.props;

    if (!currentEpisode.name) {
      return <div>Loading content please wait...</div>;
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
            <div>
              <Title as="h4">
                First airdate: {currentEpisode.airdate} at{" "}
                {currentEpisode.airtime}
              </Title>
              <Description dangerouslySetInnerHTML={getEpisodeSummary()} />
              <GoBackLink to="/">&#171; Back to the show</GoBackLink>
            </div>
          </ContentWrapper>
        </Container>
        <BackgroundImg
          image={currentEpisode.image && currentEpisode.image.original}
          role="img"
        />
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
