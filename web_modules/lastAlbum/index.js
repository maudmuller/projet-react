import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import ItemDetails from "ItemDetails"

export default class lastAlbum extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
        artistName:PropTypes.string,
      }),
  };

  static defaultProps = {
      params: {},
  };

  render() {
    const {
      params
    } = this.props
    
    return (
      <div>
        {
            <ItemDetails album={"https://api.spotify.com/v1/albums"}
        }
      </div>
    )
  }
}
