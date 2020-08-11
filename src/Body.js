import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'

function Body({ spotify }) {
  const [{ my_fav }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={my_fav?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{my_fav?.name}</h2>
          <p>{my_fav?.description}</p>
        </div>
      </div>
      <div className="body__songs">
          <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle"/>
              <FavoriteIcon fontSize="large"/>
              <MoreHorizIcon/>
          </div>
          {my_fav?.tracks.items.map((item)=>(
              <SongRow track={item.track}/>
          ))}
      </div>
    </div>
  );
}

export default Body;
