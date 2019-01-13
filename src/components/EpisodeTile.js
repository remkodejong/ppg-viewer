import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { mqFrom } from "../styles/mediaqueries";
import { Title } from "../styles/text";

class EpisodeTile extends Component {
  render() {
    const { episode } = this.props;
    return (
      <EpisodeLink to={`episode-${episode.season}-${episode.number}`}>
        {episode.image ? (
          <EpisodeThumbnail src={episode.image.medium} alt={episode.name} />
        ) : (
          <EpisodeThumbnail
            src="http://static.tvmaze.com/images/no-img/no-img-landscape-text.png"
            alt={episode.name}
          />
        )}
        <Title as="h3">
          S{episode.season}E{episode.number} - {episode.name}
        </Title>
      </EpisodeLink>
    );
  }
}

const EpisodeThumbnail = styled.img`
  display: none;

  ${mqFrom.M`
    display: block;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;   
  `}
`;

const EpisodeLink = styled(Link)`
  text-decoration: none;

  ${Title} {
    margin: 10px 0;
    font-size: 1rem;
  }

  ${mqFrom.M`
    &:hover {
      ${EpisodeThumbnail} {
        transform: scale(1.1);
      }

      ${Title} {
        transform: translateY(10px);
      }
    }
  `}
`;

export default EpisodeTile;
