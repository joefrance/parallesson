import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';
import P9NSentence from './p9n-sentence';

const styleListInput = {
  width: '500px'
};

class P9NParagraph extends Component {
   state = {
      baseUrl: 'https://m.egwwritings.org',
      lslBookEntries: [],
      rslBookEntries: [],
      lslSelection: {},
      rslSelection: {},
      languageData: myData
   }
   render() {
       return (
        <div>
        Paragraph
        <P9NSentence />
        </div>
       )
   }
}

P9NParagraph.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NParagraph