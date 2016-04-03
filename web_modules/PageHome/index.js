import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

export default class PageHome extends Component {

  state = {
    kinds: null,
  };

  fetchKinds(){




    fetchJSON("https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s/albums").then((response) => {
        console.log(response);
        if(!response.error){ 

/*    fetchJSON(consts.api.enpoints.getAlbums()).then((response) => {
        if(!response.error){
          this.setState({albums:response.albums})
        } */
    };

    fetchJSON(consts.api.enpoints.getKinds()).then((response) => {
        if(!response.error){
          this.setState({kinds:response.genres})
        }
    });
  };

  componentDidMount() {
      this.fetchKinds();
  };

  render() {

    return (
      <div>
        <InputList title="Kind"
              items={this.state.kinds}
              limit={10} />

        <ul className={styles.list}>
        {
          album &&
          album.map((album, index) => {
            return <li className={styles.album} key={index}>{album.name}</li>
          })
        }
        </ul>

      </div>
    )
  }
}
