import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';

const styleListInput = {
  width: '500px'
};

class P9NBookTOC extends Component {
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
        Table of contents
        <ul>
          <li>1. ___</li>
          <li>2. ___</li>
          <li>3. ___</li>
          <li>4. ___</li>
        </ul>
        </div>
       )
   }
}

P9NBookTOC.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NBookTOC