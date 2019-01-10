import React, { Component } from "react";
import styled from "styled-components";

import EpisodeTile from "./EpisodeTile";

import { mqFrom } from "../styles/mediaqueries";
import { Title } from "../styles/text";

class EpisodesList extends Component {
  render() {
    const { episodes } = this.props;
    return (
      <div>
        <Title as="h2">All episodes</Title>
        <ListWrapper>
          <List>
            {episodes.map(episode => (
              <li key={episode.id}>
                <EpisodeTile episode={episode} />
              </li>
            ))}
          </List>
        </ListWrapper>
      </div>
    );
  }
}

const ListWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  max-height: 30vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.1);

  ${mqFrom.M`
    padding-top: 20px;
    overflow-y: auto;
    overflow-x: scroll;
  `}
`;

const List = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  list-style: none;

  li:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${mqFrom.M`
    flex-flow: row nowrap;
    
    li {
      margin: 0 10px;
    }
  `}
`;

export default EpisodesList;
