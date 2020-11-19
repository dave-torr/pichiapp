import Image from 'next/image'
import styles from "./../styles/components.module.css"

function Header(){
    return(
        <>
            <div className={styles.genHeader}>
                <div className={styles.HeaderDeco} ></div>
                <div className={styles.naviBtn}> Musica  </div>
                <div className={styles.naviBtn}> Album  </div>
                <div className={styles.naviBtn}> noticias  </div>
                <div className={styles.iconGen}>
                    <Image
                        src="/icon1.png"
                        alt="Pichirilo Radioactivo Logo"
                        width={120}
                        height={120}
                        layout="responsive"
                        quality={100}
                    />
                </div>
                <div className={styles.naviBtn}> Bio </div>
                <div className={styles.naviBtn}> galeria </div>
                <div className={styles.naviBtn}> videos </div>
            </div>
        </>
    )
} export {Header};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
function Footer(){
    return(
        <>
            <div className={styles.genFooter}>
                <div className={styles.footerDeco} ></div>
                <div className={styles.imageGen}>
                    <Image
                        src="/logo1.png"
                        alt="Pichirilo Radioactivo Logo"
                        width={1000}
                        height={120}
                        layout="responsive"
                        quality={100}
                    />
                </div>
            </div>
        </>
    )
} export {Footer};