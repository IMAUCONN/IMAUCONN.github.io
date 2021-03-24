import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Box, Container, Grid } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const eboard = [
  {
    name: "",
    year: "",
    position: "",
    email: "jenna@gmail.com",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    name: "",
    year: "",
    position: "",
    email: "jenna@gmail.com",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    name: "",
    year: "",
    position: "",
    email: "jenna@gmail.com",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    name: "",
    year: "",
    position: "",
    email: "jenna@gmail.com",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    name: "",
    year: "",
    position: "",
    email: "jenna@gmail.com",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 400,
      overflow: 'visible',
      width: '100%',
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
    <Layout>
      <Container maxWidth='xl'>
      <Grid container direction='column'>
          <Grid item xs>
            <h1>About us</h1>
          </Grid>
          <Grid item>
            <h2>Who we are:</h2> 
          </Grid>
          <Grid container direction='row'>  
            <Grid item xs justify='flex-start'>
              <Container maxWidth='md'>   
                  <p>The Information Management Association (IMA) is a student-run organization, at the University of Connecticut, that provides resources for students interested in the field of Information Technology. We allow students to develop their professional skill-set by connecting them to relevant job opportunities, all while creating an inviting community.</p>
                  <p>Our meetings and events involve inviting IT representatives from various industries to connect with students and teach them about the industry, their specific companies, and potential job opportunities. We also focus on professional development by offering networking opportunities, resume building workshops, and mock interviews.</p>
                  <p>Together we create a network of individuals passionate about information systems, analytics, and industry technology. </p> 
              </Container>
            </Grid>
            <Grid item xs justify='flex-end'>
              <img src='https://hdqwalls.com/wallpapers/best-nature-image.jpg'></img>   
            </Grid>
          </Grid>
          <Grid item>
            <h2>Meet the executive board!</h2> 
          </Grid>
          <Grid item>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {eboard.map((step, index) => (
                <div key={step.label} className={classes.root}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}