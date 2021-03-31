import React from 'react';

const LibrarySong = ({
	song,
	songs,
	setSongs,
	setCurrentSong,
	audioRef,
	isPlaying,
}) => {
	const songSelectHeandler = async () => {
		await setCurrentSong(song);
		const newSongs = songs.map(songEl => {
			if (songEl.id === song.id) {
				return {
					...songEl,
					active: true,
				};
			} else {
				return {
					...songEl,
					active: false,
				};
			}
		});
		setSongs(newSongs);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div
			onClick={songSelectHeandler}
			className={`library-song ${song.active ? 'selected' : ''}`}
		>
			<img alt={song.name} src={song.cover} />
			<div className='song-description'>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
