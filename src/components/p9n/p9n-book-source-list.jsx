import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const styleListInput = {
  width: '500px'
};

const sources = [
  {
      source_id: 1,
      source_name: "egwwritings",
      source_desc: "The Complete Published Writings of Ellen White are now available online in several languages. The latest version allows you to easily browse, read, search, and share the writings in Chinese, English, French, German, Italian, Portuguese, Romanian, Russian, and Spanish. There are currently a total of 130 various languages available.",
      source_url: "https://m.egwwritings.org/languages",
      source_logo: "https://m.egwwritings.org/images/logo.svg",
      source_logo_style: { "backgroundColor": "#1588b1" },
      source_repo: null
  },
  {
      source_id: 2,
      source_name: "adventech",
      source_desc: "Adventech Ministry - Our mission is to use technology for the Glory of the Lᴏʀᴅ",
      source_url: "http://adventech.io",
      source_logo: "https://adventech.io/images/adventech-menu-logo.png",
      source_repo: "https://github.com/Adventech"
  },
  {
      source_id: 3,
      source_name: "gutenberg-http",
      source_desc: "The gutenberg.org project is a fantastic resource for public domain books. This API makes the wealth of information curated by Project Gutenberg available via a simple interface.",
      source_url: "https://justamouse.com/gutenberg-http/",
      source_logo: "http://www.gutenberg.org/gutenberg/pg-logo-129x80.png",
      source_repo: "https://github.com/c-w/gutenberg-http/"
  }
]

class P9NBookSourceList extends Component {
   state = {
      bookSources: sources,
      selectedBookSource: {}
   }

    onSelectBookSource(bookSource, index) {
      //console.log(bookSource)
      this.state.selectedBookSource = bookSource;
      this.setState({ state: this.state });
    }

    bookSourceDiv(bookSource) {

      if (bookSource) {
        return (
            <div className="book-entry-div">
              <div>
                <a target="_blank" href={bookSource.source_url}>
                <img style={bookSource.source_logo_style} src={bookSource.source_logo} /><br />
                {bookSource.source_name}
                </a>
              </div>
              <div>{bookSource.source_desc}</div>
              <div><a target="_blank" href={bookSource.source_repo}>{bookSource.source_repo}</a></div>
            </div>
        );
      }
  
      return null;

    }

    getBookEntryTableRow(bookSources) {

      if (bookSources) {
        return bookSources.map((bookSource, index) => 
           (
            <tr className="cursor-hand" key={index} onClick={() => this.onSelectBookSource(bookSource, index)}>
              <td>
                <a target="_blank" href={bookSource.source_url}>
                <img style={bookSource.source_logo_style} src={bookSource.source_logo} /><br />
                {bookSource.source_name}
                </a>
              </td>
              <td>{bookSource.source_desc}</td>
              <td><a target="_blank" href={bookSource.source_repo}>{bookSource.source_repo}</a></td>
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
              <div className="col-md-12">
              {this.bookSourceDiv(this.state.selectedBookSource)}
              </div>
</div>


            <div className="row">
              <div className="col-md-12">
                <table width="100%" border="1" className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Repo</td>
                        </tr>
                        {this.getBookEntryTableRow(this.state.bookSources)}
                    </tbody>
                </table>
              </div>
            </div>


        </div>
      )
   }
}

P9NBookSourceList.prototypes = {
    handleAction: PropTypes.func.isRequired
};

export default P9NBookSourceList
