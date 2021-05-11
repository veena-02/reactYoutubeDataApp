import React from 'react';
import {Menu, Sidebar, Icon} from 'semantic-ui-react';

const SavedTagsSidebar = ({visible, setVisible}) =>{

    const savedTags = JSON.parse(localStorage.getItem('tags'));
      
    return(
          <Sidebar
            as={Menu}
            animation='overlay'
            direction='right'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='250px'
          >
            <Menu.Item as='a'>
              Saved <br /><i class="tags icon"></i>
            </Menu.Item>
            <ul>
              {(savedTags)?(savedTags.map((tag)=>{
                return (<li style={{color:"white",fontSize:"14px"}}>{tag}</li>);
              })):null
              }
            </ul>
          </Sidebar>
    );
}

export default SavedTagsSidebar;