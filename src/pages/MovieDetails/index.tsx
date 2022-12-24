import React from "react";
import {
  Grid,
  styled,
  Typography,
  Table,
  TableRow,
  TableCell,
  Button,
  Rating,
} from "@mui/material";

import Poster from "../../components/UIComponents/Poster";

const MovieDetails: React.FC = () => {
  return (
    <Grid container item sx={{ pt: 2, pr: 3 }}>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={3}
        justifyContent="center"
      >
        <BlockForPoster item xs={4} md={10}>
          <Poster />
        </BlockForPoster>
      </Grid>
      <Grid container item xs={12} sm={12} md justifyContent="space-between">
        <Grid item xs={12}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <Grid>
                <Typography variant="h3">Планета Мавп: Війна</Typography>
                <Typography variant="body2">
                  Star Wars: The Last Jedi
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              md={6}
              spacing={2}
              justifyContent="end"
              alignItems="center"
            >
              <Grid item>
                <Rating name="read-only" value={8.6} readOnly />
              </Grid>
              <Grid item>
                <Typography>{`(8.6)`}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ p: "5px 10px", bgcolor: "#00d302" }}>
                  LostFilm
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='quality'>
                  HD1080
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{ mt: 5, mb: 5 }}>
            <Typography variant="body2">
              На глибині 12 кілометрів пробудилось шось
            </Typography>
          </Grid>

          <Grid container>
            <Table size="small">
              <TableRow>
                <TableCell>Режисер</TableCell>
                <TableCell variant="detail">
                  Билл Джирхарт, Гай Фенленд, Джон Шоуолтер
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Рік випуску</TableCell>
                <TableCell variant="detail">2022</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Країна</TableCell>
                <TableCell variant="detail">США</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Премєра</TableCell>
                <TableCell>30 вересня 2022</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Підбірки</TableCell>
                <TableCell variant="detail">Фільми про війну</TableCell>
              </TableRow>
              <Grid item sx={{ pb: "50px" }} />
              <TableRow>
                <TableCell>Скільки йде</TableCell>
                <TableCell>142хв</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{`Бюджет (МЛН $)`}</TableCell>
                <TableCell>2 000 000$</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{`Збори (МЛН $)`}</TableCell>
                <TableCell>5 400 000$</TableCell>
              </TableRow>
            </Table>
          </Grid>
        </Grid>

        <Grid>
          <Button variant="outlined">Фільм</Button>
        </Grid>

        <Grid>
          <Typography variant="h5">Сюжет</Typography>
          <Typography variant="body1">
            В центре сюжета находится мрачная и немногословная Уэнсдэй — старшая
            дочь эксцентричной семейки Аддамс, которая из-за своих шокирующих
            выходок поменяла восемь школ за пять лет. После очередного
            скандального инцидента она вынуждена перевестись в Невермор —
            академию для изгоев, которую когда-то посещали ее родители. Учебным
            заведением железной хваткой руководит Ларисса Уимс — заклятый враг
            ее матери Мортиши. Здесь девушка развивает свои недавно открывшиеся
            экстрасенсорные способности и берется остановить блуждающего по
            округе монстра, охотящегося на людей.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieDetails;

const BlockForPoster = styled(Grid)(({ theme }) => ({
  position: "relative",
  padding: "0 0 125% 0",
  maxHeight: "300px",
  [theme.breakpoints.only("xs")]: {
    padding: "0 0 50% 0",
  },
  [theme.breakpoints.only("sm")]: {
    padding: "0 0 50% 0",
  },
}));
