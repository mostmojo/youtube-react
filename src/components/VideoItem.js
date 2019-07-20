import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect }) => { // destructuring. Instead of having to call props.video, curly braces does it for us!
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;

// to communicate from child to parent (line 6), a callback is needed.
// to communicate from parent to child, we pass down info with props