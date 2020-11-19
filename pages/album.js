import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from "../styles/album.module.css"

import {Header, Footer} from "./../components/headerFooter";

let iconArray=["spotifygreen.png", "youtube.png", "spotify.png"]

let song1={
    "songTitle": "Troni",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "01",
    "songCover": "/albumcovers/troniTransparency.png",
    "songAudioFile": "/audioFiles/DownTheLine(ItTakesANumber).mp3"
}

export default function Album(){

    const [pickedSong, setPickedSong]= useState(song1)


    const songPlayer=(eachSong)=>{
        let anIcons= iconArray.map((elem, i)=>
            <div className={styles.eachIconCont}>
                <Image
                    src={`/${elem}`}
                    alt={`${elem}`}
                    width={60}
                    height={60}
                    quality={100}
                />
            </div>
        )

        return(
            <>
                <div className={styles.playerGenCont}> 
                    <div className={styles.socialMediaLinks}>
                        {anIcons}
                    </div>
                    <div className={styles.songCover}> 
                        <Image
                            src={eachSong.songCover}
                            alt={eachSong.songTitle}
                            width={300}
                            height={300}
                            layout="responsive"
                            
                        />
                    </div>
                    <div className={styles.songAdditiinals}> 
                        <div className={styles.songData}> 
                            <div className={styles.songNumber}>
                                {eachSong.songNumber}
                            </div>
                            <div className={styles.songTitle}>
                                {eachSong.songTitle}
                            </div>
                            <div className={styles.songAlbum}>
                                {eachSong.songAlbum}
                            </div>
                        </div>
                        <div className={styles.songControllers}>
                            <audio 
                                src={eachSong.songAudioFile}
                                type="audio/mp3" 
                                controls 
                                controlsList="nodownload"
            // autoPlay
                                />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <Header/>
            <div className={styles.albumPageGenCont}>
                {songPlayer(pickedSong)}
            </div>
            <Footer/>
        </>
    )
}