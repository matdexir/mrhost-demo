import { Card, CardMedia, Chip, Box, Stack, Typography } from "@mui/material";
import { FmdGood } from "@mui/icons-material";
import hotel from "../assets/hotel.jpg";

const Hotel = ({ name, review, city, description, price, features }) => {
  const feats = Object.entries(features);
  const grade = (review) => {
    if (review < 2) return ["Bad", "error"];
    else if (review < 3.5) return ["Ok", "warning"];
    else if (review < 4.5) return ["Good", "success"];
    else return ["Great", "success"];
  };
  return (
    <Card sx={{ width: 1200 }}>
      <Stack direction="row">
        <CardMedia component="img" image={hotel} sx={{ width: 250 }} />
        <Box>
          <Stack direction="row">
            <Box p={2}>
              <Typography variant="h5" mb={2}>
                {name} hotel
              </Typography>
              <Typography
                variant="subtitle2"
                color={"red"}
                mb={1}
                style={{ alignItems: "center", display: "flex" }}
              >
                <FmdGood fontSize="small" />
                {city}
              </Typography>
              <Typography variant="body1">{description}</Typography>
              <Stack direction="row" spacing={1} mt={2}>
                {feats.map((feat) => {
                  if (feat[1] === true) {
                    return <Chip label={feat[0]} color={"success"} />;
                  }
                  return;
                })}
              </Stack>
            </Box>
            <Box m={2}>
              <Box style={{ display: "flex", alignItems: "center" }} m={2}>
                <Typography mr={1}>{grade(review)[0]}</Typography>
                <Chip label={review} color={grade(review)[1]} />
              </Box>
              <Typography m={2} mt={15}>
                NT {price}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default Hotel;
