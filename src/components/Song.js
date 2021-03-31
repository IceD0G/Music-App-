import React, { useEffect, useRef } from 'react';

const Song = ({ currentSong, isPlaying }) => {
	const imgRef = useRef(null);
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
	//useEffect
	// useEffect(() => {
	// 	if (isPlaying) {
	// 		imgRef.current.classList.add('animate');
	// 	} else {
	// 		imgRef.current.classList.remove('animate');
	// 	}
	// }, [isPlaying]);
	return (
		<div className='song-container'>
			<img
				alt={currentSong.name}
				src={currentSong.cover}
				className='animate'
				style={play}
				ref={imgRef}
			/>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;
