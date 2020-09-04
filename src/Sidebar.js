import React from 'react'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/p148x148/117324266_3471349759564765_2279439121490613191_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=O3yqO0NKlNcAX-vzjKp&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=57af9a75f0b436e66fd1ad37a70f5997&oe=5F76D937" title="Adeeb" />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  )
}

export default Sidebar
