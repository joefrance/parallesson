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
      baseUrl: 'https://m.egwwritings.org',
      lslBookEntries: [],
      languageData: myData
   }


    countOccurance(str, char) {
        return (str.match(new RegExp(char, "g")) || []).length
    }

    right(str, chr)
    {
        return str.slice(str.length-chr,str.length);
    }

    findBookEntries(_this, node, level) {

      _this = _this;

        var folders = 
              (node.folders === null
              || node.folders === undefined) ?
                []
                :
                node.folders;
        var bookEntries = [];
        folders.forEach(folder => {

          folder.bookEntries.forEach(bookEntry => {
            bookEntries.push({
              level: level,
              folders: folders,
              bookEntry: bookEntry
            });
          });

          var subBookEntries = _this.findBookEntries(_this, folder, level + 1);
          bookEntries.push(...subBookEntries);
          
        });

        return bookEntries;
    }

    onChange = (source, lang) => {
        console.log(`onChange: ${source} => ${lang.languageName} ${lang.folders.length}`);
        //this.setState({ state: this.state });
        if(source === 'LSL') {
          this.state.lslBookEntries = this.findBookEntries(this, lang, 0);
        }
        console.log(this.state.lslBookEntries);
        this.setState({ state: this.state });
    }

    onChangeInput = e => this.setState({[e.target.name]: e.target.value});

    showLanguages(source) {

        if (this.state.languageData) {
          return this.state.languageData.map((item, index) => 
             (
                <Dropdown.Item key={index} onClick={() => this.onChange(source, item)} eventKey={index}>{item.languageName}</Dropdown.Item>
             )
          );
        }
    
        return null;
    }

    getBookEntryTableRow(bookEntries) {

      if (bookEntries) {
        return bookEntries.map((book, index) => 
           (
            <tr key={index}>
              <td>
                <a target="_blank" href={this.state.baseUrl + book.bookEntry.href}>
                <img src={book.bookEntry.img.src} /><br />
                {book.bookEntry.bookInfo.bookId}
                </a>
              </td>
              <td>{book.bookEntry.title}<br />by <b>{book.bookEntry.bookInfo.author}</b></td>
              <td>{book.bookEntry.bookInfo.pages}</td>
            </tr>
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

            <div className="row">
              <div className="col-md-6">
                <table width="100%" border="1" className="table table-striped table-bordered">
                    <tbody>
                        {/* <tr>
                        <td>
                            <Link to="/weld-unit-edit">Add New Weld Unit</Link>
                        </td>
                        </tr> */}
                        <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td>Pages</td>
                        </tr>
                        {this.getBookEntryTableRow(this.state.lslBookEntries)}
                    </tbody>
                </table>
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
