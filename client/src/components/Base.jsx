import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';



 const MyNavLinks = () => (
  <ToolbarGroup>
    <FlatButton label="Home" containerElement={<Link to="/"/>}/>
    <FlatButton label="Resume" containerElement={<Link to="resume_page" />}/>
  </ToolbarGroup> 
);

const Base = ({ children }) => (
  <div>
 <AppBar
          title="React-App"  
          iconElementRight={<MyNavLinks />}
        />

        {children}
  </div>
  
);



Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;


