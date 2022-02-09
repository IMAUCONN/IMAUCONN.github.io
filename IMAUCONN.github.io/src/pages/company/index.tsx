import React from 'react';
import Layout from '@theme/Layout';
import { Container, Grid } from '@material-ui/core';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Hello() {

  const prefix = '/img/company';
   {/* Logos of Companies*/}
  const logos = [
    'Accenture', 
    'Cigna',
    'Deloitte',
    'EY',
    'Northeast_Utilities',
    'PWC',
    'Synchrony',
    'The_Hartford',
    'Travelers',
    'Raytheon',
  ].map(x => `${prefix}/${x}.png`);

  return (
    <Layout title="Company">
      <Container maxWidth='xl'>
        <h1 style={{marginTop:10, marginBottom:10}}>Companies That We Have Worked With: </h1>
      <Grid container direction='row' alignItems='center' style={{backgroundColor:'lightgray', paddingLeft: 10, paddingRight:10, borderRadius: 10}}>
         {/* Display the Logos*/}
        {logos.map((x, idx) => (
          <Grid item xs key={`logo:${idx}`}>
            <img src={x}></img>
          </Grid>
        ))}
      </Grid>
      <h1 style={{marginTop:10, marginBottom:10}} >Recruitment</h1>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs>
             {/* This is a paragraph to address potential recruiters / companies*/}
            <p>
              A crucial aspect of the Information Management Association (IMA) is connecting our members with potential employers. We think that the best way to educate our members about career paths in MIS is to directly connect them with industry professionals (AKA: YOU!). 
            </p>
            <p>
              This can be done in a variety of ways, for example, hosting a <strong> recruitment-focused informational session, a technical workshop, a professional development presentation</strong>, etc. Not only will this allow you to meet potential job candidates prior to the interviewing process, but you also can increase awareness of your company and contribute to the professional growth of our members!
            </p>
            <p>
              Our meetings are on <strong>Tuesday</strong> nights from <strong>7:45PM - 8:30PM EST</strong>. So, if you fit this description and are interested in connecting with IMA, please fill out the form below. It will allow us to get an understanding of what you would like to present, your availability, and any questions or concerns you may have.
            </p>
            <p>
              We look forward to connecting with you! If you are interested in learning more about our club, please feel free to explore our website and take a look at all of the different initiatives we are involved in. 
            </p>
          </Grid>
          <Grid item xs>
             {/* Google form */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwv5p0ITxzB0Tt7OA-PTIvalQ5BVzbJtqTbUniQE77PQv0_A/viewform?embedded=true" width="640" height="1500" frameBorder="0">Loading…</iframe>
          </Grid>
      </Grid>
      </Container>
    </Layout>
  );
}

export default Hello;