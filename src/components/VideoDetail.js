import React from "react";
import Tags from "./Tags";

const VideoDetail = ({ video, tags, handleTagsSelect }) => {
  if (!video) {
    return <div>
       <h1>Enter search keyword to load...</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
       Use the API to search for videos matching specific search terms, topics, locations, publication dates, and much more. The APIs search.list method also supports searches for playlists and channels.

       With the YouTube Data API, you can add a variety of YouTube features to your application. Use the API to upload videos, manage playlists and subscriptions, update channel settings, and more.        

       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <button className="ui button" onClick={() => handleTagsSelect() }>Tags</button>
         {(tags)?
          (<div>
          {tags.map(tag => <span className="ui segment">{tag} <button className="ui button">+</button></span>)}
          </div>)
          :null
        }
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;


// <div>
//   <div class="ui toggle checkbox">
//     <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
//     <label>Dim Page</label>
//       </div> 
//         <h5 class="ui header">Direction</h5>
//         <div class="ui buttons">
//           <button class="ui active button">Left</button>
//           <button class="ui button">Right</button>
//           <button class="ui button">Top</button>
//           <button class="ui button">Bottom</button>
//         </div>
//         <h5 class="ui header">All Direction Animations</h5>
//           <button class="ui button">Overlay</button>
//           <button class="ui button">Push</button>
//           <button class="ui button">Scale Down</button>
//         <h5 class="ui header">Vertical-Only Animations</h5>
//           <button class="ui button">Uncover</button>
//           <button class="ui button">Slide Along</button>
//           <button class="ui button">Slide Out</button>
//         <div style="overflow:hidden" class="ui segment pushable">
//           <div class="ui inverted vertical labeled icon ui overlay left thin sidebar menu">
//             <a class="item"><i aria-hidden="true" class="home icon">
//               </i>Home</a><a class="item"><i aria-hidden="true" class="gamepad icon">
//               </i>Games</a><a class="item"><i aria-hidden="true" class="camera icon">
//               </i>Channels</a></div><div class="pusher">
//                 <div class="ui basic segment">
//                   <h3 class="ui header">Application Content</h3>
//                   <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image"/>
//                 </div>
//           </div>
//         </div>
//       </div>