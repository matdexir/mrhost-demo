const Hotel = ({ name, review, city, description, price }) => {
  const grade = (review) => {
    if (review < 2) return "Bad";
    else if (review < 3.5) return "Ok";
    else if (review < 4.5) return "Good";
    else return "Very Good";
  };
  return (
    <Card sx={{ width: 900 }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          image="https://placekitten.com/300/300"
          sx={{ width: 250 }}
        />
        <Box>
          <Stack direction="row">
            <Box p={2}>
              <Typography variant="h5" mb={2}>
                {name} Hotel
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
            </Box>
            <Box>
              <Box style={{ display: "flex", alignItems: "center" }} m={2}>
                <Typography mr={1}>{grade(review)}</Typography>
                <Chip label={review} color="success" />
              </Box>
              <Typography>NT {price}</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default Hotel;
