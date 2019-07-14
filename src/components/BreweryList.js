import React from 'react';
import '../css/style.css';

class BreweryList extends React.Component {
  onClickBrewer = e => {
    console.log(this);
  };

  render() {
    const breweries = this.props.brewList.map(
      ({
        id,
        name,
        brewery_type,
        street,
        city,
        state,
        postal_code,
        website_url,
      }) => (
        <span className="list-item" key={id}>
          <div className="ui list raised segment">
            <div className="item">
              <div className="content">
                <h1>{name}</h1>
              </div>
            </div>

            <div className="item">
              <i className="info circle icon"></i>
              <div className="content">Type: {brewery_type}</div>
            </div>

            <div className="item">
              <i className="marker icon"></i>
              <div className="content">{street}</div>
              <div className="content tab-left">
                {city}, {state} {postal_code}
              </div>
            </div>

            <div className="item">
              <i className="linkify icon"></i>
              <div className="content">
                <a href={website_url}>{website_url}</a>
              </div>
            </div>

            <button
              type="button"
              onClick={this.onClickBrewer}
              className="ui right labeled icon button more"
            >
              <i className="right arrow icon"></i>
              See more info
            </button>
          </div>
        </span>
      )
    );

    return <div className="brewery-list">{breweries}</div>;
  }
}

export default BreweryList;
