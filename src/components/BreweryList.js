import React from 'react';
import '../css/style.css';

const BreweryList = props => {
  const breweries = props.brewList.map(
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
      <div key={id} className="ui list raised segment">
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

        {/* <div className="item">
        <i className="phone icon"></i>
        <div className="content">
          <a href={brewery.website_url}>{brewery.phone}</a>
        </div>
      </div> */}

        <div className="item">
          <i className="linkify icon"></i>
          <div className="content">
            <a href={website_url}>{website_url}</a>
          </div>
        </div>
      </div>
    )
  );

  console.log(props.brewList);
  return <div className="brewery-list">{breweries}</div>;
};

export default BreweryList;
