import React , {useState} from "react";
import {Checkbox, Sidebar, Segment  } from 'semantic-ui-react';
import SavedTagsSidebar from './SavedTagsSidebar';

const Tags = ({tags}) =>{

    const handleStoringTagsLocally = (tagName) => {
        let tagArr=JSON.parse(localStorage.getItem('tags'));
        if(!(tagArr.includes(tagName))){
          tagArr.push(tagName);
        }
        localStorage.setItem('tags',JSON.stringify(tagArr));
        console.log(localStorage);
      }  
        
  const [visible, setVisible] = useState(false);

    return (
        <>
          <Sidebar.Pushable as={Segment}>
            <SavedTagsSidebar visible={visible} setVisible={setVisible}/>
            <div className="ui segment header">
              <Checkbox
                checked={visible}
                label={{ children: <code>Saved Tags</code> }}
                onChange={(e, data) => setVisible(data.checked)}
              />
            </div>
            <Sidebar.Pusher>
              {(tags)?
                (
                <>
                <div>
                  {tags.map((tag) => 
                    <button className="ui button segment" 
                        onClick={()=>{handleStoringTagsLocally(tag)}}>
                        {tag} +
                    </button>
                  )}
                </div>
                </>
                ):null
              }
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </>
    );    
}

export default Tags;