import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';
import P9NSentenceToken from './p9n-sentence-token';

const styleListInput = {
  width: '500px'
};

class P9NSentence extends Component {
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
        Sentence
        <ul>
          <li><P9NSentenceToken /></li>
          <li><P9NSentenceToken /></li>
        </ul>
        </div>
       )
   }
}

P9NSentence.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NSentence