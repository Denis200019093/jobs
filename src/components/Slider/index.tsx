import React, { useState, useEffect, useRef, ChangeEvent } from 'react'
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { Grid } from '@mui/material';
// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Mine
// import { breakpoints } from './options'

const Slider: React.FC<{children: JSX.Element}> = ({children}) => {

  const [ swiper, setSwiper ] = useState<any>();
  const [ showArrows, setShowArrows ] = useState<boolean>(false);
  
  const prevRef = useRef<any>();
  const nextRef = useRef<any>();
  
  const handleShowArrows = (e: any) => setShowArrows(true)
  const handleHideArrows = (e: any) => setShowArrows(false)

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <Grid 
      onMouseEnter={handleShowArrows}
      onMouseLeave={handleHideArrows} 
      container 
      item 
      sx={{ position: 'relative' }}
    >
      <ArrowBackIosIcon
        sx={{ 
          position: 'absolute', 
          top: '20%', 
          left: 0, 
          height: '50%', 
          width: '35px',
          borderRadius: '0 100% 100% 0', 
          bgcolor: 'rgba(0,0,0,0.5)', 
          color: 'rgba(255,255,255,0.8)',
          fontSize: '34px',
          paddingLeft: '5px',
          transition: '0.3s',
          cursor: 'pointer',
          opacity: showArrows ? '1' : '0',
          zIndex: 5,
          "&:hover": {
            width: '45px',
            bgcolor: 'rgba(0,0,0,0.8)', 
          }
        }} 
        className="swiper-button" 
        ref={prevRef}
      />
      <Swiper
        loop={true}
        modules={[Navigation]}
        slidesPerView={7}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        className='product-images-slider'
        // breakpoints={breakpoints}
        onSwiper={setSwiper}
        style={{ width: "100%" }}
      >
        {children}
      </Swiper>
      <ArrowForwardIosIcon
        sx={{ 
          position: 'absolute', 
          top: '20%', 
          right: 0, 
          height: '50%', 
          width: '35px',
          borderRadius: '100% 0 0 100%', 
          bgcolor: 'rgba(0,0,0,0.5)', 
          color: 'rgba(255,255,255,0.8)',
          fontSize: '34px',
          paddingLeft: '5px',
          transition: '0.3s',
          cursor: 'pointer',
          opacity: showArrows ? '1' : '0',
          zIndex: 5,
          "&:hover": {
            width: '45px',
            bgcolor: 'rgba(0,0,0,0.8)'
          }
        }} 
        className="swiper-button" 
        ref={nextRef}
      />
    </Grid>
  )
}

export default Slider