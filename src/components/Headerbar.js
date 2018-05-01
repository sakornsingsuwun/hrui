import React from "react";
import AppBar from "material-ui/AppBar";
/**icon */
import {white} from 'material-ui/styles/colors';
import IconButton from "material-ui/IconButton";
import ActionHome from "material-ui/svg-icons/action/home";
import ActionCompareArrows from "material-ui/svg-icons/action/compare-arrows";
import SocialPerson from "material-ui/svg-icons/social/person";
import IconMenu from "material-ui/IconMenu";
/**icon */
import MenuItem from "material-ui/MenuItem";
import { NavLink } from "react-router-dom";
import { API_TITLE_NAME } from "../config/config_rest";



const Headerbar = () => (
  <AppBar
    title={API_TITLE_NAME}
    iconElementLeft={
      <NavLink exact activeClassName="current" to="/">
        <IconButton>
          <ActionHome color={white} />
        </IconButton>
      </NavLink>
    }

    iconElementRight={<PersonMenu />}
  />
);

const PersonMenu = props => (
  <div>
  <IconMenu
    iconButtonElement={
      <IconButton>
        <ActionCompareArrows color={white} />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem
      primaryText={
        <NavLink exact activeClassName="current" to="/ProvineTranfer">
          คำขอโยกยาย
        </NavLink>
      }
    />
    <MenuItem
      primaryText={
        <NavLink exact activeClassName="current" to="/contact">
          Contact
        </NavLink>
      }
    />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
  <IconMenu
  
    iconButtonElement={
      <IconButton>
        <SocialPerson color={white} />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem
      primaryText={
        <NavLink exact activeClassName="current" to="/Personal">
          ข้อมูลส่วนตัว
        </NavLink>
      }
    />
    <MenuItem
      primaryText={
        <NavLink exact activeClassName="current" to="/contact">
          Contact
        </NavLink>
      }
    />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
  
  
 </div>
  
);

export default Headerbar;
