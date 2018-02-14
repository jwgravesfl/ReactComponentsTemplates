import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


class App extends Component {
  render() {
    return (
      <Wrapper>
        Hello World
      </Wrapper>
    );
  }
}

export default App;
