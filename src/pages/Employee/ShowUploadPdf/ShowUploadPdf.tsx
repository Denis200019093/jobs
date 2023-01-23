import React, { ChangeEvent, useCallback } from "react";
import { Button, Grid } from "@mui/material";
import { pdfjs } from "react-pdf";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "../../../helpers/errorHandle";
import { openSnackbar } from "../../../redux/reducers/snackbarSlice";
import { useUploadFileMutation } from "../../../redux/features/fileUpload.api";
import { uploadPdf } from "../../../redux/reducers/imagesSlice";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ShowUploadPdf: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { pdf } = useAppSelector((state) => state.images);

  const [uploadFile] = useUploadFileMutation();

  const handleUploadPdf = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      try {
        if (!event.target.files) return;

        const formData = new FormData();
        const file = event.target.files[0];

        formData.append("image", file);

        const { url } = await uploadFile(formData).unwrap();

        dispatch(uploadPdf(url));
      } catch (err) {
        if (isFetchBaseQueryError(err)) {
          const errMsg = "error" in err ? err.error : JSON.stringify(err.data);
          dispatch(openSnackbar({ text: errMsg, severity: "error" }));
        } else if (isErrorWithMessage(err)) {
          dispatch(openSnackbar({ text: err.message, severity: "error" }));
        }
      }
    },
    [dispatch, uploadFile]
  );

  return (
    <Grid container item spacing={2}>
      <Grid item>
        <Button variant="contained" component="label">
          Upload CV .pdf
          <input
            onChange={handleUploadPdf}
            hidden
            accept="application/pdf"
            type="file"
          />
        </Button>
      </Grid>
      <Grid item>
        {pdf || user?.pdfFile ? (
          <Button
            variant="outlined"
            target="_blank"
            href={`http://localhost:4444/${pdf || user?.pdfFile}`}
          >
            Your CV .pdf
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ShowUploadPdf;
