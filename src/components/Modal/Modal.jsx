import React, { Component } from "react";
import css from './Modal.module.css'

//? Бібліотека для модальних вікон: Yet Another React Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//? Додавання плагінів Yet Another React Lightbox
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export class Modal extends Component {
    state = {
        open: false,
        index: 0
    };

    openLightbox = (i) => {
        this.setState({
            open: true,
            index: i
        });
    };

    closeLightbox = () => {
        this.setState({
            open: false
        });
    };

    render() {
        // console.log("this.props: ", this.props)
        const { images, name } = this.props
        const { open, index } = this.state;

        // if (imagesFull.length === 0) imagesFull.push(...images); //todo: тимчасово, бо немає всіх imagesFull

        //! Масив об'єктів зображень для Lightbox
        const slides = images.map((src) => ({ src }));

        //? Для плагіна Captions і Share
        // const slides = imagesFull.map((src) => ({
        //     src,
        //     title: fullName,
        //     description: description,
        //     // share: { url: src, title: nameBrief }, //? для плагіна  Share
        //     //! Приклад ретинізації зображень з можливістю автоматичного перемикання роздільної здатності
        //     // srcSet: [
        //     //   { src: "/image1x320.jpg", width: 320, height: 213 },
        //     //   { src: "/image1x640.jpg", width: 640, height: 427 },
        //     //   { src: "/image1x1200.jpg", width: 1200, height: 800 },
        //     //   { src: "/image1x2048.jpg", width: 2048, height: 1365 },
        //     //   { src: "/image1x3840.jpg", width: 3840, height: 2560 },
        //     // ],
        // }));

        // console.log("images: ", images)
        return (
            <div
                className={css.divImg}>
                {images.map((item, i) =>
                    <img
                        key={i} //! поки що не унікальний
                        src={item}
                        alt={name}
                        className={css.img}
                        onClick={() => this.openLightbox(i)}

                    />
                )}
                {/*//! Lightbox */}
                <Lightbox
                    open={open}
                    close={this.closeLightbox}
                    slides={slides}
                    index={index}
                    //? Додавання популярних плагінів: Fullscreen + Zoom
                    counter={{
                        container: {
                            style: {
                                top: "6vh",
                                bottom: "unset",
                                left: "4vw",
                                fontSize: "1.25em",
                                fontWeight: 900,
                                color: "lightblue",
                            }
                        }
                    }}

                    // captions={{
                    //     showToggle: true,
                    //     descriptionTextAlign: "center",
                    //     descriptionMaxLines: 3
                    // }}

                    thumbnails={{
                        position: "bottom",
                        width: 120,
                        height: 80,
                        border: 1,
                        borderRadius: 4,
                        padding: 4,
                        gap: 16,
                        imageFit: "contain",
                        vignette: true,
                        hidden: false,
                        showToggle: true
                    }}


                    plugins={[
                        // Zoom,
                        Fullscreen,
                        Download,
                        Slideshow,
                        Counter,
                        // Captions,
                        Thumbnails
                    ]}
                />

            </div>
        )
    };
};