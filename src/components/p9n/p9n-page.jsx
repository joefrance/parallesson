import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';
import P9NParagraph from './p9n-paragraph';

const styleListInput = {
  width: '500px'
};

class P9NPage extends Component {
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
        Page
        <P9NParagraph />
        </div>
       )
   }
}

P9NPage.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NPage