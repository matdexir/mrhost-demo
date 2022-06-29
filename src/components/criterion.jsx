const { Box } = require("@mui/system");

const Criterion = ({ open, criterion }) => {
  const crits = criterion.map((crit) => (
    <Box>
      <Checkbox />
      {crit}
    </Box>
  ));
  return (
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
            {crits}
          </Stack>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Criterion;
