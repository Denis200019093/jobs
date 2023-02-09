import React, { ChangeEvent, useCallback } from "react";
import { IconButton, Grid, Avatar, AvatarProps } from "@mui/material";

import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";

import { useUploadFileMutation } from "../../../redux/features/fileUpload.api";
import { uploadAvatarURL } from "../../../redux/reducers/imagesSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useGetMeQuery } from "../../../redux/features/auth.api";
import { useGetCompanyDetailsQuery } from "../../../redux/features/company.api";

interface IProps extends AvatarProps {
  allowEditing?: boolean;
}

const CustomAvatar: React.FC<IProps> = ({ allowEditing = false, ...props }) => {
  const [uploadFile] = useUploadFileMutation();
  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);

  const dispatch = useAppDispatch();
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
    <Grid item sx={{ position: "relative" }}>
      <Avatar
        src={`${process.env.REACT_APP_BACK_END_API_URL}/${
          avatarURL || companyDetails?.companyLogo || user?.avatarURL
        }`}
        sx={{
          boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
          zIndex: 5,
        }}
        {...props}
      />
      {allowEditing ? (
        <Grid
          item
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
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
  );
};

export default CustomAvatar;
