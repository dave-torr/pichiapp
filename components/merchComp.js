import styles from "./../styles/merch.module.css"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Image from "next/image"
import { useState } from "react";

export const MerchItem = (props)=>{
const [merchIMG, setMerchImg]= useState(props.item.mainIMG)

let colorVariantBTNs
if(props.item.colorVariants){
    colorVariantBTNs = props.item.colorVariants.map((elem, i)=><>
    <div style={{height: "21px", width: "21px", backgroundColor:`${elem.color}`, borderRadius:"5px", border:"solid 1px black" }}
    onMouseEnter={()=>{setMerchImg(elem.img)}}
    /> 
    </>)
}

    return(
        <>
        <div className={styles.aMerchItemCont}>
            <div> <Image
                src={`${merchIMG}`}
                width={props.item.imgwidth}
                height={props.item.imgHeight}
                alt="a merch obj"
                /> </div>
            <div className={styles.prodDetailsCTACont}>
                <div >
                    <div className={styles.prodName}> 
                        {props.item.prodName}</div>
                    <div className={styles.prodPrice}> 
                        ${props.item.prodPrice.usd} usd/ <br></br> /&prop;{props.item.prodPrice.ptc} ptc</div>

                    <div style={{display:"flex", flexDirection:"row", justifyContent: "space-around", margin: "5px"}}> {colorVariantBTNs} </div>
                </div>
                <div className={styles.addCartBTN}> 
                    <AddShoppingCartIcon />
                </div>
            </div>
        </div>
        </>
    )
}