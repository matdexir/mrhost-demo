// import "./App.css";
import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
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
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import API from "./api";
import HotelItem from "./components/hotel";

function App() {
  const [open, setOpen] = useState(true);
  const [criteria, setCriteria] = useState("city");
  const [hotels, setHotels] = useState([]);
  const [features, setFeatures] = useState([]);
  const methods = {
    city: { method: (a, b) => b.city - a.city },
    review: { method: (a, b) => b.review - a.review },
    price: { method: (a, b) => b.price - a.price },
  };

  const handleChange = (event) => {
    // pass
    console.log(event.target.name);
  };

  const init = () => {
    API.get("/")
      .then((res) => {
        setHotels(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Grid container spacing={5} m={2}>
      <Grid item xs={3}>
        <Card>
          <CardHeader title="Select" />
          <CardContent>
            <IconButton
              onClick={() => {
                setOpen(!open);
                init();
              }}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Stack direction="column" spacing={1}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={pet_friendly}
                    name="pet-friendly"
                    onChange={handleChange}
                  />
                  Pet-friendly
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={free_internet}
                    name="free-internet"
                    onChange={handleChange}
                  />
                  Free internet
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={smoking_friendly}
                    name="smoking-friendly"
                    onChange={handleChange}
                  />
                  Smoking-Friendly
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={kitchen}
                    name="kitchen"
                    onChange={handleChange}
                  />
                  Kitchen
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={washing_machine}
                    name="washing-machine"
                    onChange={handleChange}
                  />
                  Washing Machine
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    checked={parking}
                    name="parking"
                    onChange={handleChange}
                  />
                  Parking
                </Box>
              </Stack>
            </Collapse>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={9}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Box style={{ display: "flex" }}>
            <Typography variant="h5"> Found {hotels.length} results</Typography>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <FormControl sx={{ m: 1, minWidth: 120, float: "right" }}>
              <InputLabel id="demo-select-small">Sorting</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={criteria}
                label="sorting"
                onChange={(event) => {
                  setCriteria(event.target.value);
                  console.log(criteria);
                }}
              >
                <MenuItem value={"price"}>price</MenuItem>
                <MenuItem value={"review"}>review</MenuItem>
                <MenuItem value={"city"}>city</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Stack direction="column" spacing={5}>
          {hotels
            .filter((item) => {
              for (let feature in features) {
                if (item.features[feature] === false) return false;
              }
              return true;
            })
            .sort(methods[criteria].method)
            .map((item) => (
              <HotelItem
                city={item.city}
                name={item.title}
                review={item.review}
                price={item.price}
                description={item.description}
              />
            ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
