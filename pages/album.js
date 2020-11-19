import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from "../styles/album.module.css"

import {Header, Footer} from "./../components/headerFooter";

let iconArray=["youtube.png", "spotify.png", "imusic.png" ]

let song1={
    "songTitle": "Troni",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "01",
    "songCover": "/albumcovers/troniTransparency.png",
    "songAudioFile": "/audioFiles/Troni.wav"
}
let song2={
    "songTitle": "Enmascarado",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "02",
    "songCover": "/albumcovers/EnmascaradoTransparency.png",
    "songAudioFile": "/audioFiles/Enmascarado.wav"
}
let song3={
    "songTitle": "Huaira",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "03",
    "songCover": "/albumcovers/Huayra.png",
    "songAudioFile": "/audioFiles/Huaira.wav"
}
let song4={
    "songTitle": "Jarabe de Ave",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "04",
    "songCover": "/albumcovers/jarabedeAve.png",
    "songAudioFile": "/audioFiles/JarabedeAve.wav"
}
let song5={
    "songTitle": "69 Revolution",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "05",
    "songCover": "/albumcovers/sixtyNineTransp.png",
    "songAudioFile": "/audioFiles/69Revolution.wav"
}
let song6={
    "songTitle": "Chococolate",
    "songAlbum": "Pichirilo Radioactivo",
    "songNumber": "06",
    "songCover": "/albumcovers/chococoTransparency.png",
    "songAudioFile": "/audioFiles/Chococolate.wav"
}

// JSON 
export default function Album(){

    let albumArray= [song1, song2, song3, song4, song5, song6]

    const [pickedSong, setPickedSong]= useState(song4)
    const [albumStep, setAlbumStep] = useState("main")

    const songController=()=>{
        let eachSongPicker=albumArray.map((elem, i)=>
        <>
            <div className={styles.eachAlbumSong}
                onClick={()=>{
                    setPickedSong(elem);
                    setAlbumStep("song");
                }}
            > {elem.songTitle} </div>

        </>)
        return(
            <>
                <div className={styles.songPicker}>
                    {eachSongPicker}
                </div>
            </>
        )
    }

    const albumMain=()=>{
        return(
            <>
                <div className={styles.albumGeneralCont}>
                    <div className={styles.albumCoverPic} > 
                        <Image
                            src={`/albumcovers/maincover.png`}
                            alt="Pichirilo Radioactivo Album Cover"
                            width={500}
                            height={500}
                            quality={100}
                        />
                </div>
                    <div className={styles.songPickerCont} >
                        {songController()}
                    </div>
                </div>
            </>
        )
    }





    const songPlayer=(eachSong)=>{
        let anIcons= iconArray.map((elem, i)=>
            <div className={styles.eachIconCont}>
                <Image
                    src={`/${elem}`}
                    alt={`${elem}`}
                    width={40}
                    height={40}
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
                            <div className={styles.backBtn}
                                onClick={()=>{
                                    setAlbumStep("main")
                                }}
                            >
                                {"<"} album
                            </div>
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
                                autoPlay
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
            {albumStep==="main"&&
                <> {albumMain()} </>} 
            {albumStep==="song"&&
                <> {songPlayer(pickedSong)} </>} 
            </div>
            <Footer/>
        </>
    )
}