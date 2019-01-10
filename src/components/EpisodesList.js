import React, { Component } from "react";
import styled from "styled-components";

import EpisodeTile from "./EpisodeTile";

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
  padding-top: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow-x: scroll;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0 10px;
  }
`;

export default EpisodesList;
