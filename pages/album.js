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
    "songTitle": "Huayra",
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

let musicCredits1=[
    "Johan Vallejo", " -",
    "Carlos Quilumba",  
    "Alexei Chontasi", 
    "Victor Hugo Rojas",
     "Diego Bosmediano",
     "Pablo Gutierrez",
     "Sergio Espinosa",
     "Nicolas Espinosa" 
]
let musicCredits2=[
    "Saxofón alto, Dirección", "musical y composición", 
    "Saxofón tenor",  
    "Trombón", 
    "Trombón",
    "Trompeta", 
    "Trompeta", 
    "Bajo, composición", 
    "Batería"
]

let musicCredits3=[
    "Theo Montero",
    "-",
    "Daniel Gachet",
    "Juan Pablo Rivas",
    "Felipe Sanchez",
    "Pablo Lalama &",
    "Pichirilo Radioactivo"
]
let musicCredits4=[
    "Grabación, Edición", 
    "Producción",
    "Mezcla",
    "Master",
    "Stage Manager",
    "Dirección Creativa",
    "-"
]

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

        return(
            <>
                <div className={styles.playerGenCont}> 
                    <div className={styles.socialMediaLinks}>
                        <div className={styles.eachIconCont}>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCdi62GlZckid7nfbb0Gp5Tw?view_as=subscriber" > 
                                <Image
                                    src="/youtube.png"
                                    alt="YouTube Icon"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />
                            </a>
                        </div>
                        <div className={styles.eachIconCont}>
                            <a target="_blank" rel="noreferrer noopener" href="https://open.spotify.com/artist/2DEWY12NlbFJk43W9Czhjb">
                                <Image
                                    src="/spotify.png"
                                    alt="Spotify Icon"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />
                            </a>
                        </div>
                        <div className={styles.eachIconCont}>
                            <a target="_blank" rel="noreferrer noopener" href="https://itunes.apple.com/us/artist/1484453514" >
                                <Image
                                    src='/imusic.png'
                                    alt="Apple Music Icon"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />
                            </a>
                        </div>
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

    const creditDisplayer=(listOne, ListTwo, title)=>{
        let musicians=listOne.map((elem, i)=>
            <>
            <div className={styles.musiciansList}> {elem} </div>
            </>
        )

        let instruments=ListTwo.map((elem,i)=>
        <>
            <div className={styles.musiciansRole}> {elem} </div>
        </>
        )
        return(
            <>
                <h2 className={styles.Artiststitle}> {title}</h2>
                <div className={styles.MusiciansCreditBox}>
                    <div> { musicians } </div>
                    <div> { instruments } </div>
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
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <div style={{display:"flex", flexDirection: "column"}}>
                    <div className={styles.credits}>
                        {creditDisplayer(musicCredits1, musicCredits2, "Artistas")}
                    </div>
                    <div className={styles.credits}>
                        {creditDisplayer(musicCredits3,musicCredits4, "Equipo Tecnico")}
                    </div>
                </div>
                <div >
                    <div className={styles.BugOne}>
                        <Image
                            src="/bugOne.png"
                            alt="Bug"
                            width={700}
                            height={400}
                            />
                    </div>        
                </div>
            </div>
            <Footer/>
        </>
    )
}