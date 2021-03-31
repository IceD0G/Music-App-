import React, { useEffect, useState, useRef } from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import Library from './components/Library';
import Nav from './components/Nav';
//util
import data from './data';

function App() {
	//Ref
	const audioRef = useRef(null);
	//State
	const [songs, setSongs] = useState(data());
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSong, setCurrentSong] = useState(songs[0]); //State
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
		volume: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);
	const timeUpdateHandler = e => {
		const current = e.target.currentTime;
		const duration = e.target.duration;
		const volume = e.target.volume;
		//Calculate Percantage

		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({
			...songInfo,
			currentTime: current,
			duration,
			animationPercentage: animation,
			volume,
		});
	};
	const activeLibraryHandler = nextPrev => {
		const newSongs = songs.map(songEl => {
			if (songEl.id === nextPrev.id) {
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
	};
	const songEndHandler = async () => {
		let currentIndex = songs.findIndex(song => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		if (isPlaying) audioRef.current.play();
	};
	return (
		<div className={`App ${libraryStatus ? 'library-active' : ''}`}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<Song currentSong={currentSong} isPlaying={isPlaying} />
			<Player
				songs={songs}
				setSongs={setSongs}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				audioRef={audioRef}
				setIsPlaying={setIsPlaying}
				isPlaying={isPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
			/>
			<Library
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
				audioRef={audioRef}
				songs={songs}
				setSongs={setSongs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}
			></audio>
		</div>
	);
}

export default App;
