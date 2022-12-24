import React from 'react'
import { Grid, Button, Slider, Typography, styled } from '@mui/material';

interface IProps {
  value: number[];
  onChange: () => void
  valueLabelDisplay: "on" | "off" | "auto";
  step: number;
  min: number;
  max: number;
  marks: {value: number, label: string}[];
}

const RangeSlider: React.FC<IProps> = (props) => {
  return (
    <StyledRangeSlider {...props}/>
  )
}

export default RangeSlider

const StyledRangeSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
  height: 10,
  padding: '15px 0',
  position: 'relative',
  borderRadius: '2px',
  '& .MuiSlider-thumb': {
    backgroundColor: 'transparent',
    borderRadius: '5px',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow:
        '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
    },
    zIndex: 4,
    'input': {
      display: 'none'
    }
  },
  '& .MuiSlider-valueLabel': {
    position: 'absolute',
    fontWeight: 'normal',
    height: 25,
    color: '#fff',
    top: '100%',
    backgroundColor: '#000',
    zIndex: 5,
    '&::before': {
      display: 'none'
    },
    '&::after': {
      display: 'none'
    },
    'input': {
      display: 'none'
    }

  },
  '& .MuiSlider-track': {
    border: 'none',
    background: 'rgb(50,50,50)'
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
  '& .MuiSlider-markLabel': {
    color: '#bfbfbf',
    fontSize: '12px'
  },
}));