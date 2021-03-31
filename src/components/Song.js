import React from 'react';

const Song = ({ currentSong, isPlaying }) => {
	let play = {};
	if (!isPlaying) {
		play = {
			animationPlayState: 'paused',
		};
	} else {
		play = {
			animationPlayState: 'running',
		};
	}
	return (
		<div className='song-container'>
			<img
				alt={currentSong.name}
				src={currentSong.cover}
				className='animate'
				style={play}
			/>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
