import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar, IconButton } from '@material-ui/core'
import fbIcon from './img/fbicon.png'
export const profileImg = "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p148x148/117324266_3471349759564765_2279439121490613191_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=O3yqO0NKlNcAX-vzjKp&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=57af9a75f0b436e66fd1ad37a70f5997&oe=5F76D937";

function Header() {
  return (
    <div className="header">

      <div className="header__left">
        <img
          src={fbIcon}
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholdertype="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={profileImg} />
          <h4>Adeeb</h4>
        </div>
      </div>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  )
}

export default Header
