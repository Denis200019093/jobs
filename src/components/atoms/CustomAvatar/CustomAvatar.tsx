import React, { ChangeEvent, useCallback } from "react";
import { IconButton, Grid, Avatar } from "@mui/material";

import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";

import { useUploadFileMutation } from "../../../redux/features/fileUpload.api";
import { uploadAvatarURL } from "../../../redux/reducers/imagesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

interface IProps {
  allowEditing?: boolean;
  src?: string;
  position?: "absolute" | "block";
}

const CustomAvatar: React.FC<IProps> = ({
  allowEditing = false,
  src,
  position = "absolute",
  ...props
}) => {
  const [uploadFile] = useUploadFileMutation();

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { avatarURL } = useAppSelector((state) => state.images);

  const handleAvatarFile = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.files) return;

        const formData = new FormData();
        const file = event.target.files[0];

        formData.append("image", file);

        const { url } = await uploadFile(formData).unwrap();

        dispatch(uploadAvatarURL(url));
      } catch (error) {
        console.log(error);
      }
    },
    [uploadFile, dispatch]
  );

  return (
    <>
      <Avatar
        src={`http://localhost:4444/${avatarURL || user?.avatarURL}`}
        sx={{
          position: position,
          boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
          top: position === "absolute" ? "-95px" : 0,
          left: position === "absolute" ? "8px" : 0,
          width: position === "absolute" ? 96 : 56,
          height: position === "absolute" ? 96 : 56,
          zIndex: 5,
        }}
        {...props}
      />
      <Grid item sx={{ position: "relative" }}>
        {false ? (
          // {allowEditing ? (
          <Grid
            container
            item
            sx={{
              position: "absolute",
              right: 0,
              top: position === "absolute" ? "-10px" : 0,
              width: "15px",
              height: "15px",
              zIndex: 6,
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                onChange={handleAvatarFile}
                hidden
                accept="image/*"
                multiple
                type="file"
              />
              <FlipCameraIosIcon />
            </IconButton>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default CustomAvatar;
