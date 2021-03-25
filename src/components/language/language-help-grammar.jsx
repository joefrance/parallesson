import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';

const styleListInput = {
  width: '500px'
};

class LanguageHelpGrammar extends Component {
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
        <div className="row">
              <div className="col-md-12">
                <iframe height="600px" width="100%" src="https://en.wikipedia.org/wiki/Russian_grammar"></iframe>
              </div>
        </div>
       )
   }
}

LanguageHelpGrammar.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default LanguageHelpGrammar