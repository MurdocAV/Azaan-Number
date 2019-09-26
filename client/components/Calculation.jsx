import React from 'react'

import { Modal, Button } from 'react-materialize';

const trigger = <Button>Open Modal</Button>;

export default () => (
  <Modal header="Modal Header" trigger={trigger}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Modal>
);

class Calculation extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>I'm the calculation component.</h1>
      </React.Fragment>
    )
  }
}

export default Calculation