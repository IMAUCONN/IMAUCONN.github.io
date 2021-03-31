import React from 'react';
import Layout from '@theme/Layout';
import { Container, Grid } from '@material-ui/core';

function Hello() {
  return (
    <Layout>
      <Container maxWidth='xl'>
        <Grid container direction='column'>
          <Grid item xs>
            <h1>Recruitment</h1>
          </Grid>
          <Grid item xs>
            <p>As part of the recruitment process, employers are strongly encouraged to host an information session which allows recruiters to informally meet potential candidates prior to their interviews. Information sessions also provide an opportunity for the employers to increase awareness of their company and additional career prospects.</p>
          </Grid>
          <Grid item xs>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwv5p0ITxzB0Tt7OA-PTIvalQ5BVzbJtqTbUniQE77PQv0_A/viewform?embedded=true" width="640" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </Grid>
      </Grid>
      </Container>
    </Layout>
  );
}

export default Hello;