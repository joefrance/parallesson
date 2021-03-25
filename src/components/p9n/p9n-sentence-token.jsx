import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';

const styleListInput = {
  width: '500px'
};

// A sentence token can be a word, phrase, or idiom
class P9NSentenceToken extends Component {
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
        Sentence token
        </div>
       )
   }
}

P9NSentenceToken.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NSentenceToken