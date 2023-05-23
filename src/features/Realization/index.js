
import React from 'react';
import { Title } from "../Services/styled"
import { GalleryContainer, GalleryDescription, GalleryImage, GalleryImageContainer, GalleryItem, StyledArticle } from "./styled"
import { galleryData } from "./galleryData"

export const Realization = () => {
  

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
              <GalleryImage url={object.firstURL} />
              <GalleryImage url={object.secondURL} />
              <GalleryImage url={object.thirdURL}  />
            </GalleryImageContainer>
          </GalleryItem>
        ))}
      </GalleryContainer>
    </StyledArticle>
  );
};