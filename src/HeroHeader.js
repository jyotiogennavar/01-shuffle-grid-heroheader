import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const ShuffleHero = () => {
  const squareData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545562083-a600704fa486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1541343672885-9be56236302a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1602189204629-3f0ae1ec548f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1642391326176-cf6e4ff39f4e?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1682823439695-cb80a9387562?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1709338573282-2ca4e80f6f76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1684419080285-c9bce3bc022b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1698235460487-77053501dbe2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <HeroSection>
      <ContentWrapper>
        <Subtitle> Your Gateway to Unforgettable Memories</Subtitle>
        <Title>Discover Your Next Destination</Title>
        <Paragraph>
          Escape the ordinary with our curated collection of destinations,
          ensuring every trip is filled with excitement, wonder, and cherished
          memories. Start planning your next adventure today!
        </Paragraph>
        <Button>
          Plan a Holiday
          <IframeContainer>
            <IframeStyled
              title="Lottie Animation"
              src="https://lottie.host/embed/2bc94ce0-32ad-4e5c-9521-9fdae46ac198/pVnQE4WQnZ.json"
            />
          </IframeContainer>
        </Button>
      </ContentWrapper>
      <ShuffleGrid squareData={squareData} />
    </HeroSection>
  );
};

const ShuffleGrid = ({ squareData }) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares(squareData));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, [squareData]);

  const generateSquares = (squareData) => {
    return shuffle(squareData).map((sq) => (
      <Square
        key={sq.id}
        layout
        transition={{ duration: 1.8, type: "spring" }}
        style={{ backgroundImage: `url(${sq.src})` }}
      />
    ));
  };

  return <GridContainer>{squares}</GridContainer>;
};

const HeroSection = styled.section`
  width: 90%;
  display: grid;
  gap: 1.5rem;
  margin: 2rem auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 85%;
  margin-top: 1rem;
  font-family: "Kanit", sans-serif;
`;

const Subtitle = styled.span`
  font-family: "Handlee", cursive;
  font-size: 1rem;
  color: #4f46e5;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  line-height: 1.2;
  font-size: clamp(2.5rem, 4.7vw + 1rem, 4rem);
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #4a5568;
  margin-top: 1rem;
`;

const IframeContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
`;

const IframeStyled = styled.iframe`
  border: none;
  width: 3rem;
  height: 3rem;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #4f46e5;

  border: none;
  color: #fff;
  font-size: 1rem;
  width: 20rem;
  border-radius: 1rem;
  transition: all 0.3s;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    background-position: right center;
    width: 12rem;
  }
`;

const Square = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 2px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  height: 500px;
  gap: 3px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
`;

export default ShuffleHero;
