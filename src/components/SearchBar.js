// Search bar with dropdown select for states.

import React from 'react';
import '../css/style.css';

class SearchBar extends React.Component {
  state = { location: 'Choose a state' };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.location !== 'Choose a state') {
      this.props.onSubmit(this.state.location);
    }
  };

  render() {
    return (
      <div className="search ui container">
        <div className="searchBar ui segment">
          <form onSubmit={this.onFormSubmit}>
            <div className="ui form">
              <select
                className="ui search dropdown"
                onChange={e => {
                  this.setState({ location: e.target.value });
                }}
                value={this.state.location}
              >
                <option value="" default>
                  Choose a state
                </option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="District_of_Columbia">
                  District Of Columbia
                </option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New_Hampshire">New Hampshire</option>
                <option value="New_Jersey">New Jersey</option>
                <option value="New_Mexico">New Mexico</option>
                <option value="New_York">New York</option>
                <option value="North_Carolina">North Carolina</option>
                <option value="North_Dakota<">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode_Island">Rhode Island</option>
                <option value="South_Carolina">South Carolina</option>
                <option value="South_Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West_Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
            </div>
            <button className="ui primary button search-button" type="submit">
              {this.props.button_message}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
