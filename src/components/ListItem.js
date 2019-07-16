// Formats brewery information for the list of results

import React from 'react';

import '../css/listItem.css';

class ListItem extends React.Component {
  render() {
    const {
      id,
      name,
      brewery_type,
      street,
      city,
      state,
      postal_code,
      website_url,
    } = this.props.brew;

    return (
      <span className="list-item">
        <div
          onMouseDown={() => this.props.onClick({ id })}
          className="ui list raised segment button"
        >
          <div className="item">
            <div className="content">
              <h1>{name}</h1>
            </div>
          </div>

          <div className="item">
            <i className="info circle icon"></i>
            <div className="content type">Type: {brewery_type}</div>
          </div>

          <div className="item">
            <i className="marker address icon"></i>
            <div className="content address">{street}</div>
            <div className="content address tab-left">
              {city}, {state} {postal_code}
            </div>
          </div>

          <div className="item">
            <i className="linkify icon"></i>
            <div className="content">
              <a
                href={website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="url"
              >
                {website_url}
              </a>
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default ListItem;
