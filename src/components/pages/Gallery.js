import React, { useState } from "react";

//import GalleryPho from "react-photo-gallery";
//import Carousel, { Modal, ModalGateway } from "react-images";

//import { photos } from "../photos";
import './Gallery.css'
import photos from "../photos.ts";


import PhotoAlbum from "react-photo-album";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RenderPhoto } from "react-photo-album";


const renderPhoto: RenderPhoto = ({
  layout,
  layoutOptions,
  imageProps: { alt, style, title, ...restImageProps }
}) => (
  <div
    className="parents"
    style={{
      alignItems: "center",
      width: style?.width,
      paddingBottom: 0
    }}
  >
    <img
      alt={alt}
      title={title}
      style={{ ...style, width: "100%", padding: 0 }}
      {...restImageProps}
    />
    <div>
      {layoutOptions.viewportWidth ? title : <>&nbsp;</>}
    </div>
  </div>
);

const slides = photos.map(({ src, width, height, images, alt, title }) => ({
  src,
  alt,
  title,
  aspectRatio: width / height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width
  }))
}));


const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={250}
        renderPhoto={renderPhoto}
        spacing="2"
        onClick={(event, photo, index) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );

  /* const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='gal-width'>
      <GalleryPho photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  ) */
}

export default Gallery


