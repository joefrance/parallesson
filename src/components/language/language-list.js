import React, { Component } from 'react'
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

    onClick = () => {
        this.setState({ state: this.state });
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    showLanguages() {

        if (this.state.languageData) {
          return this.state.languageData.map((item, index) => 
             (
              <tr key={index}>
                <td><a target="_blank" href={item.url}>{item.languageName}</a></td>
              </tr>
             )
          );
        }
    
        return null;
    }

   render() {
      return (
        <div className="container">

            <div className="row mt-3">       

              <div className="col-md-2">
                <input 
                  type="button" 
                  name="showLangs" 
                  value="Show Languages" 
                  className="btn btn-secondary"
                  onClick={this.onClick}
                />
              </div>
              
            </div>

            <div className="row">
              <div className="col-md-12">
                <table width="100%" border="1" className="table table-striped table-bordered">
                    <tbody>
                        {/* <tr>
                        <td>
                            <Link to="/weld-unit-edit">Add New Weld Unit</Link>
                        </td>
                        </tr> */}
                        <tr>
                        <td>Language</td>
                        </tr>
                        {this.showLanguages()}
                    </tbody>
                </table>
              </div>
            </div>

        </div>
      )
   }
}

export default LanguageList
