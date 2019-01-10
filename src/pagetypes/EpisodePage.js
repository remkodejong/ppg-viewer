import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
                <GoBackLink to="/">&#171; Back to the show</GoBackLink>
              </div>
            </ContentWrapper>
          </Container>
          <BackgroundImg image={data.image.original} role="img" />
        </Wrapper>
      );
    }
  }
}

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

export default EpisodePage;
