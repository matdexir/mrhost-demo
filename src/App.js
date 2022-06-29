// import "./App.css";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Checkbox,
  Collapse,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material/";
import { ExpandLess, ExpandMore, FmdGood } from "@mui/icons-material";

function App() {
  const [open, setOpen] = useState(true);
  const [criteria, setCriteria] = useState("");

  return (
    <Grid container spacing={5} m={2}>
      <Grid item xs={3}>
        <Card>
          <CardHeader title="Select" />
          <CardContent>
            <IconButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Stack direction="column" spacing={1}>
                <Checkbox />
                <Checkbox />
              </Stack>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={9}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box style={{ display: "flex" }}>
            <Typography variant="h5"> Found Results</Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <FormControl sx={{ m: 1, minWidth: 120, float: "right" }}>
              <InputLabel id="demo-select-small">Age</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={criteria}
                label="Age"
                onChange={(event) => {
                  setCriteria(event.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Stack direction="column" spacing={5}>
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
                      Such and such hotel
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color={"red"}
                      mb={1}
                      style={{ alignItems: "center", display: "flex" }}
                    >
                      <FmdGood fontSize="small" />
                      Such and such city
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, qui minim labore adipisicing
                      minim sint cillum sint consectetur cupidatat.
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      style={{ display: "flex", alignItems: "center" }}
                      m={2}
                    >
                      <Typography mr={1}>Good</Typography>
                      <Chip label="4.5" color="success" />
                    </Box>
                    <Typography>NT 200</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
