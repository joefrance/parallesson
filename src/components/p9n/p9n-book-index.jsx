import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';

const styleListInput = {
  width: '500px'
};

// https://stackoverflow.com/questions/17272050/book-index-page-layout-using-html5-and-css
class P9NBookIndex extends Component {
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
            <h5>Index</h5>
              <section>
                <h7>A</h7> 
                <dl>
                <dt>accordion,layouts</dt>
                  <dd><a href="">about 128</a></dd>
                  <dd><a href="">movie form,adding 13</a>1</dd>
                  <dd><a href="">nesting, in tab 128,12</a>9</dd>
                  <dt>Adapters, Ext.</dt>
                  <dd><a href="">about 18</a></dd>
                  <dd><a href="">using 18, 20</a></dd>
                </dl>
              </section>
            </div>
      )
   }
}

P9NBookIndex.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NBookIndex