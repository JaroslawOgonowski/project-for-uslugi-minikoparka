import styled from "styled-components";

export const StyledServices = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  animation: servicesAnimation 1s ease normal forwards;

  @keyframes servicesAnimation {
    0% {
		  opacity: 0;
		  transform: translateX(250px);
	  }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 767px) {
    max-width: 90%;
    margin: 0 auto;
  }
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  gap: 5vw;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
`

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
  width: 100%;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`
export const ServicesList = styled.ul`
  list-style: none;
  li::before {
    content: "👷‍♂️";
    margin-right: 0.5em;
  }

  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const ServicesDetailsList = styled.ul`
  list-style: none;
  li::before {
    content: "🚧";
    margin-right: 0.5em;
  }
`;

export const MainItem = styled.li`
  margin-bottom: 16px;
`

export const Image = styled.div`
  width: 35%;
  aspect-ratio: 3/4;
  border-radius: 5px;
  background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/292727767_584447123234290_8251652518547320897_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=W5tDirZYYO0AX_95Yrd&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDYDHgTfcgLrx5lJHzOhVvTqIf1jSBRhkiKgVRslMSTKg&oe=64796E4A);
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  animation-name: backgroundAnimation;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes backgroundAnimation {
    0%, 25%{background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/292727767_584447123234290_8251652518547320897_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=W5tDirZYYO0AX_95Yrd&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDYDHgTfcgLrx5lJHzOhVvTqIf1jSBRhkiKgVRslMSTKg&oe=64796E4A);    
    background-position-x: 50%;}
    30%, 60%{background-image: url(https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/285439172_563044772041192_4171892873498239350_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jerjjqPEVSwAX-G6Uj8&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfDCiEtHn64ORCWZ43wmJXJzQG51hnBzSlrNi7TVSlo_7A&oe=6479A795);
    background-position-x: 30%;}
    65%, 90% {background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/278368691_523633189315684_7803111547568744878_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cgiTHCD0h9MAX_-PGPX&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDhTotaE2iJ4eIzBgwsltPuytxvM72IyyUDGnBf7VtI3A&oe=647AC990);
    background-position-x: 90%;}
    95%, 100%{background-image: url(https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/292727767_584447123234290_8251652518547320897_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=W5tDirZYYO0AX_95Yrd&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDYDHgTfcgLrx5lJHzOhVvTqIf1jSBRhkiKgVRslMSTKg&oe=64796E4A);
    background-position-x:50%;}   
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 150px;
    background-position-y:50%;
  }
`