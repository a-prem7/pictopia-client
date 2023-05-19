import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function Login() {
  return (
    <Card
      sx={{
        p: 4,
        py: 5,
        maxWidth: "550px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        borderRadius: "15px",
      }}
      elevation={10}
    >
      <CardContent sx={{ m: 0 }}>
        <Typography gutterBottom variant="h4" component="div" sx={{ m: 0 }}>
          Login Here!
        </Typography>
      </CardContent>
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type={"email"}
        name={"email"}
        onChange={handleChange}
        value={user.email}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type={"password"}
        name={"password"}
        onChange={handleChange}
        value={user.password}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Card>
  );
}

export default Login;
