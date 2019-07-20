import './VideoItem.css';
import React from 'react';

const VideoItem = ({video}) => { // destructuring. Instead of having to call props.video, curly braces does it for us!
	return (
		<div className="video-item item">
			<img className="ui image" alt="" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;