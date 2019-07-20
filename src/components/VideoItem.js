import React from 'react';

const VideoItem = ({video}) => { // destructuring. Instead of having to call props.video, curly braces does it for us!
	return (
		<div>
			<img src={video.snippet.thumbnails.medium.url} alt="" />
			{video.snippet.title}
		</div>
	);
};

export default VideoItem;