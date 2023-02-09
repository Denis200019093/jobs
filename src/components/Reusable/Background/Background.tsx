import React, { ChangeEvent, useCallback } from "react";
import { IconButton, Grid, Skeleton } from "@mui/material";

import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";

import { useUploadFileMutation } from "../../../redux/features/fileUpload.api";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { uploadBackgroundURL } from "../../../redux/reducers/imagesSlice";
import { useGetMeQuery } from "../../../redux/features/auth.api";
import { useGetCompanyDetailsQuery } from "../../../redux/features/company.api";

interface IProps {
  allowEditing: boolean;
}

const Background: React.FC<IProps> = ({ allowEditing }) => {
  const [uploadFile] = useUploadFileMutation();
  const { data: user } = useGetMeQuery();
  const { data: companyDetails } = useGetCompanyDetailsQuery(user?._id);

  const dispatch = useAppDispatch();

  const { backgroundURL } = useAppSelector((state) => state.images);

  const handleBackgroundFile = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.files) return;

        const formData = new FormData();
        const file = event.target.files[0];

        formData.append("image", file);

        const { url } = await uploadFile(formData).unwrap();

        dispatch(uploadBackgroundURL(url));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, uploadFile]
  );

  return (
    <Grid container item sx={{ position: "relative", mt: 5 }}>
      {backgroundURL ||
      companyDetails?.companyBackground ||
      user?.backgroundURL ? (
        <img
          draggable={false}
          src={`${process.env.REACT_APP_BACK_END_API_URL}/${
            backgroundURL ||
            companyDetails?.companyBackground ||
            user?.backgroundURL
          }`}
          alt={"Background"}
          style={{
            maxHeight: "450px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgb(25 15 9 / 10%)",
          }}
        />
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "10px" }}
          width={"100%"}
          height={"450px"}
        />
      )}
      {allowEditing ? (
        <Grid item sx={{ position: "absolute", bottom: "10px", right: "10px" }}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              onChange={handleBackgroundFile}
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

export default Background;
