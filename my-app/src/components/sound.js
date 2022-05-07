import React, {useState} from 'react';
import Sound from 'react-sound'; 
import classic from  './test.mp3';
import styled from 'styled-components';
const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <MP3>
            <button onClick={() => setIsPlaying(!isPlaying)}> {!isPlaying ? 'Play' : 'Stop'}</button>
            <Sound 
            url={classic}
            playStatus = {isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
        </MP3>
    );
};

export default PlaySound;

export const MP3 = styled.div`
    margin-left: 10px;
`