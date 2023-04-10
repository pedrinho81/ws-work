import React, { useState } from 'react';
import {Container, Slide, SlideContainer, PrevButton, NextButton, Text, SlideWrapper} from './styles'
import { Product } from '@/types/Product.types';
type CarrousselProps = {
  products: Product[]
}
const Caroussel: React.FC<CarrousselProps> = ({ products}) => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? products.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === products.length - 1 ? 0 : currentSlide + 1);
  };

  if(products.length < 1) return (<h1>Não há items, adicione para que seja renderizado nesta seção :)</h1>) 
  return (
    <Container>
      <SlideContainer slideIndex={currentSlide}>
        {products.map((product, index) => (
          <SlideWrapper key={index}>
            <Slide src={product.image} alt={`Slide ${index + 1}`} />
            <Text>{product.price}</Text>
          </SlideWrapper>
        ))}
      </SlideContainer>
      <PrevButton onClick={handlePrev}>{'<'}</PrevButton>
      <NextButton onClick={handleNext}>{'>'}</NextButton>
    </Container>
  );
};


export { Caroussel };