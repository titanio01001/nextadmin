"use client"
import React from "react";
import styles, {keyframes, css} from './ScrollAnimation.module.css';

  
function ScrollAnimation() {

    const row1 = [
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Entel_logo_pe.png",
        "https://www.cmpc.com/assets/themes/cmpc/assets/img/logo-cmpc.svg",
        "https://webklat.s3.amazonaws.com/wp-content/uploads/sites/3/2023/01/12125126/komatsu-2023.png",
        "https://smpm.cl/wp/wp-content/uploads/2020/06/disam-logo-sin-texto.png",
        "https://d3n49d7reyrlg2.cloudfront.net/uploads/28ea5d31-5ad4-4f14-90c0-6d6b3c9a5d62/original/icon-footer-logo-ccla.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Bupa-logo_2022.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/54/Entel_logo_pe.png",
        "https://www.cmpc.com/assets/themes/cmpc/assets/img/logo-cmpc.svg",
        "https://webklat.s3.amazonaws.com/wp-content/uploads/sites/3/2023/01/12125126/komatsu-2023.png",
        "https://smpm.cl/wp/wp-content/uploads/2020/06/disam-logo-sin-texto.png",
        "https://d3n49d7reyrlg2.cloudfront.net/uploads/28ea5d31-5ad4-4f14-90c0-6d6b3c9a5d62/original/icon-footer-logo-ccla.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Bupa-logo_2022.png",
        
    ];



    return <div className={styles.AppContainer}>
        <div className={styles.Wrapper}>
            <div className={styles.TextCont}>
            <h1 className={styles.Text}>Nuestros Clientes</h1>
            <p className={styles.Note}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        <div className={styles.Marquee}>
            <div className={styles.MarqueeGroup}>
                {
                    row1.map(el => (
                        <div className={styles.ImageGroup}>
                            <img className={styles.Image} src={el} />
                        </div>
                    ))
                }
            </div>
            </div>    
        </div>
    </div>;
    }

    export default ScrollAnimation;

  


  

