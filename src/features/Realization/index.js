
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // stylowanie
import { Title } from "../Services/styled"
import { GalleryContainer, GalleryDescription, GalleryImage, GalleryImageContainer, GalleryItem, StyledArticle } from "./styled"
import { galleryData } from "./galleryData"

export const Realization = () => {
  const [lightboxIndex, setLightboxIndex] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIndex();
    setIsOpen(false);
  };
  const images = galleryData.reduce((accumulator, { firstURL, secondURL, thirdURL }) =>
    accumulator.concat([firstURL, secondURL, thirdURL]), []);

  return (
    <StyledArticle>
      <Title>Nasze realizacje</Title>
      <GalleryContainer>
        {galleryData.map((object, index) => (
          <GalleryItem key={index}>
            <GalleryDescription>
              {object.content.charAt(0).toUpperCase() + object.content.slice(1)}
            </GalleryDescription>
            <GalleryImageContainer>
              <GalleryImage url={object.firstURL} onClick={() => openLightbox(index*3)} />
              <GalleryImage url={object.secondURL} onClick={() => openLightbox(index*3+1)} />
              <GalleryImage url={object.thirdURL} onClick={() => openLightbox(index*3+2)} />
            </GalleryImageContainer>
          </GalleryItem>
        ))}
      </GalleryContainer>
      {isOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex((prev) => (prev + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((prev) => (prev + 1) % images.length)
          }
        />
      )}
    </StyledArticle>
  );
};