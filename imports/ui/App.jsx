import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import { createContainer } from '../api/slipData';
const log = (type) => console.log.bind(console, type);
const schema = {
  title: "Slip Rate Data",
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    age: {
      type: 'number',
    },
    ageType: {
      title: 'Age Type',
      type: 'string',
      enum: ['mean', 'median', 'list']
    },
    ageErr: {
      type: 'number',
    },
    ageErrType: {
      type: 'string',
      enum: ['sd', 'mad', 'minmax', 'probs']
    },
    ageUnits: {
      type: 'string',
      enum: ['ka']
    },
    offSet: {
      type: 'number'
    },
    offsetType: {
      type: 'string',
      enum: ['mean', 'median', 'list']
    },
    offsetErr: {
      type: 'number'
    },
    offsetErrType: {
      type: 'string',
      enum: ['sd', 'mad', 'minmax', 'probs']
    },
    offsetUnits: {
      type: 'string',
      enum: ['m']
    }

  }
};
// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Form schema={schema}
                  onChange={log("changed")}
                  onSubmit={log("submitted")}
                  onError={log("errors")} />
          </Col>
        </Row>
      </Grid>
    );
  }
}