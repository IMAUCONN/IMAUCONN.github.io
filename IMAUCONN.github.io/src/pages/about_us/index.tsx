import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Box, Container, Grid, Hidden, Paper, StylesProvider } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { FormatBold } from '@material-ui/icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const eboard = [
  {
    name: "Jessica Roberts",
    year: "Junior",
    position: "President",
    major: "MIS",
    email: "jessica.r.roberts@uconn.edu",
    paragraph: "My name is Jessica Roberts and I'm a senior MIS major with an Analytics minor. I'm currently the president of IMA, which has taught me many useful technical skills. I'm interested in UX Design and after graduation, I hope to continue working with Raytheon Technologies.",
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: '../../static/img/headshots/president.png',
  },
  {
    name: "Bob Fisk",
    year: "Junior",
    position: "Vice President",
    major: "MIS",
    email: "robert.fisk_jr@uconn.edu",
    paragraph: "My name is Bob Fisk and I am a junior MIS major. I am currently the Vice President of IMA and Secretary of UConn's Alpha Lambda Delta Honor Society. After graduation, I hope to pursue a career in Management Consulting.",
    label: 'Bird',
    imgPath: '../../static/img/headshots/vice_president.png',
  },
  {
    name: "Maciej (Mac) Kossuth",
    year: "Junior",
    position: "Secretary",
    major: "MIS",
    email: "maciej.kossuth@uconn.edu",
    paragraph: "My name is Maciej (Mac) Kossuth and I'm a junior MIS major with Analytics and Mathematics minors. I'm currently the secretary of IMA, which has helped me build an extended network with recruiters and learn more about the opportunities offered in the School of Business. I'm interested in working in Data Anlytics and, after graduation, I hope to enroll in the MSBAPM program and continue my work at Travelers.",
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:'../../static/img/headshots/secretary.png',
  },
  {
    name: "Suyang (Claire) Xu",
    year: "Junior",
    position: "Treasurer",
    major: "MIS",
    email: "suyang.xu@uconn.edu",
    paragraph: "My name is Suyang (Claire) Xu and I'm a senior MIS major with an Analytics minor. I'm currently the treasurer of IMA, which has helped me gain interesting technological expereinces as well as many excellect networking opportunities. I'm interested in Data Mining and Analysis. I want to be a Business Analyst after graduation.",
    label: 'Bali, Indonesia',
    imgPath: '../../static/img/headshots/treasurer.png'
  },
  {
    name: "Jody Kung",
    year: "Junior",
    position: "Chief Marketing Officer",
    major: "MIS",
    email: "jody.kung@uconn.edu",
    paragraph: "My name is Jody Kung and I am a Junior MIS major with a Marketing minor. During my time as an undergraduate, I've taken on leadership positions in organizations like the Learning Community Ececutive Council, Pi Beta Phi, and HackUConn, which have enabled me to sharpen my project management and problem-solving skills.",
    label: 'Goč, Serbia',
    imgPath:'../../static/img/headshots/cmo.png',
  },
  {
    name: "Robert Damjanovich",
    year: "Sophomore",
    position: "Chief Technology Officer",
    major: "Finance",
    email: "robert.damjanovich@uconn.edu",
    paragraph: "My name is Robert Damjanovich and I am a sophomore Finance major. In addition to being CTO for IMA, I am also Secretary for the Polish Cultural Society. I like to trade stock and am interested in Investment Banking. After graduation, I hope to be employed in one of the major Finance firms.",
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:'../../static/img/headshots/cto.png',
  },
];

const useStyles =
 makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 500,
    },
    img: {
      height: 300,
      display: 'block',
      maxWidth: 300,
      overflow: 'hidden',
      width: '100%',
      borderRadius: 5
    },
    bigimg: {
      MaxHeight: 600,
      maxWidth: 600,
      paddingLeft: 15,
      borderRadius: 45
    },
  }),
);

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = eboard.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1 == eboard.length ? 0 : prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1 == -1 ? eboard.length - 1 : prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Layout title="About Us">
      <Container maxWidth='xl'>
      <Grid container direction='column'>
          <Grid item >
            <h1 style={{marginTop:10}}> About us</h1>
          </Grid>
          <Grid item >
            <h2>Who we are:</h2> 
          </Grid>
          <Grid container direction='row' style={{paddingBottom: 15}}>  
            <Grid item xs justify='flex-start'>
              <Grid>   
                  <p>The Information Management Association (IMA) is a student-run organization, at the University of Connecticut, that provides resources for students interested in the field of Information Technology. We allow students to develop their professional skill-set by connecting them to relevant job opportunities, all while creating an inviting community.</p>
                  <p>Our meetings and events involve inviting IT representatives from various industries to connect with students and teach them about the industry, their specific companies, and potential job opportunities. We also focus on professional development by offering networking opportunities, resume building workshops, and mock interviews.</p>
                  <p>Together we create a network of individuals passionate about information systems, analytics, and industry technology. </p> 
              </Grid>
            </Grid>
            <Grid item xs justify='flex-end'>
            <img className={classes.bigimg} src="https://www.business.uconn.edu/wp-content/uploads/sites/969/2015/09/2015-09-30_bschool.jpg"></img>  
            </Grid>
          </Grid >
          <Grid container justify="center" style={{backgroundColor: 'lightgrey', borderRadius: 10}}>
            <Grid item>
              <h1 style={{marginBottom: 20, marginTop: 20}}>Meet the Executive Board</h1> 
            </Grid>
            <Grid item>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents>
                {eboard.map((step, index) => (
                  <div key={step.label} className={classes.root}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Grid container direction='row' justify='space-evenly'>
                     <Grid item sm={3}>
                      <h2>About me</h2>
                      <p> {step.paragraph} </p>
                      </Grid>
                      <Grid item sm={3}>
                        <img className={classes.img} src={step.imgPath}/>
                      </Grid>
                      
                      <Grid item sm={3} >
                      <Grid container direction='column'>
                            <text><h2>{step.position}</h2></text>
                            <text>{step.name }</text> 
                            <text>{step.year }</text> 
                            <text>{step.major }</text> 
                            <a href = {`mailto: ${step.email}`}><text>{step.email}</text></a> 
                            </Grid>
                        </Grid>
                    </Grid>) : null}
                </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={<Button size="small" onClick={handleNext}> Next <KeyboardArrowRight /> </Button>}
                backButton={<Button size="small" onClick={handleBack}> <KeyboardArrowLeft/>Back</Button>}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}