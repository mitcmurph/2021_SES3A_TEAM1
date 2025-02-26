import React from "react";
import { useHistory } from "react-router-dom";

// IMPORT COMPONENTS
import { Box, Grid, Container, Typography, Paper, Avatar, Card, CardActionArea, CardContent, CardMedia, Button, CardActions } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

// IMPORT IMAGES

import Andrew from '../../images/profile-photos/andrew-do.jpg';
import Vanisha from '../../images/profile-photos/vanisha-singh.png';
import Andy from '../../images/profile-photos/andy-le.jpg';
import Agid from '../../images/profile-photos/agid-kaharuba.png';
import Mitchell from '../../images/profile-photos/mitchell-murphy.png';
import Herrick from '../../images/profile-photos/herrick-feng.jpg';
import Bryan from '../../images/profile-photos/bryan-dinh.png';
import Kelvin from '../../images/profile-photos/kelvin-luong.jpg';
import Calvin from '../../images/profile-photos/calvin-dong.jpg';
import Brendon from '../../images/profile-photos/brendon-tong.png';
import Lakshva from '../../images/profile-photos/lakshva-sharma.jpg';
import MitchGif from '../../images/mitchellvr.gif';
import VanishaGif from '../../images/vanishavr.gif';
import BryanGif from '../../images/bryanvr.gif';
import Matthew from '../../images/profile-photos/matt.jpg';
import Vladimir from '../../images/profile-photos/vlad.jpg';
import BackButton from "../../components/backbutton";

// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/auth";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  }
})(Typography);

const profileStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const useStyles = makeStyles({
  media: {
    height: 180,
  },
  root: {
    maxWidth: 300,
    height: 300
  },
  margins: {
    gridGap: 10,
  },
  heading:{
    color:  "#FFFFFF",
  }
});

export default function AboutUsPage() {
  const history = useHistory();
  //   const { authState, setAuthState } = React.useContext(AuthContext);
  const profiles = profileStyles();
  const classes = useStyles();
  //   if (authState.authenticated) {
  //     return authState.user.claims.teacher ? <Redirect to="/teacher/subjectList" />: <Redirect to="/student/dashboard" />; 
  //   } else {
  return (
    // Orignial Gradient linear-gradient(45deg, #662D8C  10%, #ED1E79)
    <Grid
      container
      spacing={2}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh', backgroundImage: "linear-gradient(45deg, #662D8C  10%, #ED1E79)" }}>
      <Grid item>
        <br></br>
        <WhiteTextTypography variant='h3'>
          <Box style={{ fontWeight: '600', letterSpacing: 6 }} display='inline'> About Us</Box>
        </WhiteTextTypography>
      </Grid>
      <Grid container direction="column" alignItems='flex-start'>
        <Container>
          <h2 className={classes.heading}>Our Storyy</h2>
          <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</p>
          <Grid container direction="row" alignItems='flex-start' className={classes.margins} >
            <Card className={classes.root} onClick={() => history.push('/aboutus/projectoutline')}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Andy}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Project Outline
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    The aim of the project is to create training in VR.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root} onClick={() => history.push('/aboutus/teamcommunication')}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Andy}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Team Communication
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Information of how our team communicate between each other.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root} onClick={() => history.push('/aboutus/vrexperience')}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Andy}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    VR experiences
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Some experiences of clients using the our application.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root} onClick={() => history.push('/aboutus/theteam')}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Andy}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Team
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Our team consist of three division: Unity team, Backend team & Frontend team.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Container>
      </Grid>

    </Grid>

  )
  //   }
}
