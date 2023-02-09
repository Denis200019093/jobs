import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface IProps extends TypographyProps {
  text: string;
  quantityLines?: number;
}

const MultiLineText: React.FC<IProps> = ({ text, quantityLines, ...props }) => {
  return (
    <Typography
      sx={{
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: quantityLines || 1,
        fontWeight: 500,
        mt: 1,
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default MultiLineText;
