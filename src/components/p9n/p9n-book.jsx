import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';
import P9NPage from './p9n-page';
import P9NBookTOC from './p9n-book-toc';
import P9NBookIndex from './p9n-book-index';

const styleListInput = {
  width: '500px'
};

class P9NBook extends Component {
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
        Book
        <P9NBookTOC />
        <P9NPage />
        <P9NBookIndex />
        </div>
       )
   }
}

P9NBook.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NBook