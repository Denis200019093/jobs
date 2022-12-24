import React from 'react'
import { Typography } from '@mui/material'

type IProps = {
  text: string;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | "title" | undefined;
  quantityLines?: number;
}

const MultiLineText: React.FC<IProps> = (props) => {
  return (
    <Typography 
      variant={props.variant}
      sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: props.quantityLines || 1,
        fontWeight: 500,
        // fontStyle: 'italic',
        mt: 1
      }}
    >
      {props.text}
    </Typography>
  )
}

export default MultiLineText