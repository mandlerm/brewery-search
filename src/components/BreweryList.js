import React from 'react';
import '../css/style.css';

const BreweryList = props => {
  const breweries = props.brewList.map(brewery => (
    <div className="ui list raised segment">
      <div className="item">
        {/* <i className="users icon"></i> */}
        <div className="content">{brewery.name}</div>
      </div>

      <div className="item">
        <i className="info circle icon"></i>
        <div className="content">{brewery.brewery_type}</div>
      </div>

      <div className="item">
        <i className="marker icon"></i>
        <div className="content">{brewery.street}</div>
        <div className="content tab-left">
          {brewery.city} {brewery.state}, {brewery.postal_code}
        </div>
      </div>

      {/* <div className="item">
        <i className="phone icon"></i>
        <div className="content">
          <a href={brewery.website_url}>{brewery.phone}</a>
        </div>
      </div> */}

      <div className="item">
        <i className="linkify icon"></i>
        <div className="content">
          <a href={brewery.website_url}>{brewery.website_url}</a>
        </div>
      </div>
    </div>
  ));

  console.log(props.brewList);
  return <div className="brewery-list">{breweries}</div>;
};

export default BreweryList;
