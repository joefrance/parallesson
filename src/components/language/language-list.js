import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import myData from '../../language-index.json';

const styleListInput = {
  width: '500px'
};

class LanguageList extends Component {
   state = {
      listItems: 'John, Paul, Ringo, George',
      listIndices: [],
      n: 2,
      combinatoricItems: [],
      languageData: myData
   }


    countOccurance(str, char) {
        return (str.match(new RegExp(char, "g")) || []).length
    }

    right(str, chr)
    {
        return str.slice(str.length-chr,str.length);
    }

    onChange = (source, lang) => {
        console.log(`onChange: ${source} => ${lang}`);
        //this.setState({ state: this.state });
    }

    onChangeInput = e => this.setState({[e.target.name]: e.target.value});

    showLanguages(source) {

        if (this.state.languageData) {
          return this.state.languageData.map((item, index) => 
             (
                <Dropdown.Item key={index} onClick={() => this.onChange(source, item.lang)} eventKey={index}>{item.languageName}</Dropdown.Item>
             )
          );
        }
    
        return null;
    }

   render() {
      return (
        <div className="container">

            <div className="row">
              <div className="col-md-6">
              <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="success">LSL</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Language</Dropdown.Header>
          {this.showLanguages('LSL')}
        </Dropdown.Menu>
      </Dropdown>                  

              </div>
              <div className="col-md-6">
              <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="success">RSL</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Language</Dropdown.Header>
          {this.showLanguages('RSL')}
        </Dropdown.Menu>
      </Dropdown>                  

              </div>


            </div>

        </div>
      )
   }
}

LanguageList.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default LanguageList
