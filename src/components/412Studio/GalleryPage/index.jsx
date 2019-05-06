import React from "react";
import MainLayout from "../Blocks/MainLayout";
import Album from "../Blocks/Album";
import { loc } from "../../../localization";
import album from '../../../img/album.png';
class Gallery extends React.Component {
  render() {
    return (
      <MainLayout>
        <div>
          <Album  title={loc.albumTitle} URL={album} />
          <Album  title={loc.albumTitle} URL={album} />
          <Album  title={loc.albumTitle} URL={album} />
        </div>
      </MainLayout>
    );
  }
}

export default Gallery;