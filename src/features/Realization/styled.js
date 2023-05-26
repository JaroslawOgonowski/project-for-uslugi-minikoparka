import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  animation: articleAnimation 2s ease normal forwards;
  
  @keyframes articleAnimation {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

  @media (max-width: 1360px) {
    width: 100%;  
  }

  @media (max-width: 767px) {  
    flex-direction: column;
  }
`

export const GalleryContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-self: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 90%;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const GalleryImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 32px 32px 32px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  width: 100%;
  }
`;

export const GalleryImage = styled.div`
  cursor: pointer;
  aspect-ratio: 3/4;
  width: 32%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 0.5rem;
  }

  &:hover{
    @media (min-width: 768px) {
      transform: scale(1.05);
    }
  }
`;

export const GalleryDescription = styled.p`
  font-size: 1.2rem;
  margin: 0 32px;
  
  :before {
    content: "🦺 ";
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;