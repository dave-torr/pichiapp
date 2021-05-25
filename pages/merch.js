import {useState, useEffect} from 'react'

import {MerchItem} from "./../components/merchComp"


let SampleHoodie = {
    "prodName": "Pichi Hoddie",
    "prodPrice": {
        "usd": 18,
        "ptc": 2
    },
    "mainIMG": "/merch/hoodieBLKSMPL.png",
    "colorVariants": [ 
        {"color": "black",
        "img": "/merch/hoodieBLKSMPL.png"}, 
        {"color": "white",
        "img": "/merch/hoodieWHTSMPL.png"}, 
        {"color": "yellow",
        "img": "/merch/hoodieYLLSMPL.png"}, 
        ],
    "imgHeight":520,
    "imgwidth":420,
}

let sampleRecord = {
    "prodName": "Pichirilo Radiactivo LP",
    "prodPrice": {
        "usd": 30,
        "ptc": 4
    },
    "mainIMG": "/merch/pichiVinil.png",
    "imgHeight":520,
    "imgwidth":520,
}

export default function MerchPage(props){

const [pichiCart, setPichiCart] = useState([])



    return(
        <>
            <MerchItem 
                item={SampleHoodie}
            />
            <MerchItem 
                item={sampleRecord}
            />

        </>
    )
}