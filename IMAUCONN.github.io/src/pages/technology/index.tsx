import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { Grid, Container, StylesProvider } from '@material-ui/core';

function Hello() {
  return (
    <Layout title="Technology">
      <Container maxWidth='xl' >
        {/* Header to the technology page */}
        <h1 style={{marginTop: 10, marginBottom: 20}}> 
        Additional Resources That Are Very Valuable to IMA Members:
        </h1>
        <Grid xl container direction='row' style={{ gap: 32 }}>
          <Grid md container direction='column' alignItems='center' justify='flex-start' spacing={2}> 
            <Grid item xs>
              {/* Picture of VIBE */}
              <img style={{borderRadius: 20}}
              src="https://innovatelabs.uconn.edu/wp-content/uploads/sites/2164/2021/03/VIBE_logo2-400x400.jpg"
              alt="Picture of VIBE logo" width="200" height="200">
              </img>
            </Grid>
            <Grid item xs>
              {/* Button for the Tech Kits */}
              <Link 
                className={clsx('button button--primary button--lg',)}to={useBaseUrl('https://innovatelabs.uconn.edu/opim-innovate-2/vibe/')}>Vibe Tech Kits
              </Link>
            </Grid>
            <Grid item xs>
              {/* Paragraphs explaining the Tech Kits */}
              <p>
                The Virtual Innovation Building Experience (VIBE) is an online, self-paced program offered through OPIM Innovate with the purpose of helping students gain hands-on learning experience with innovative technology. They provide students with the opportunity to earn resume credentials and understand how emerging technology and analytics is changing the world. 
              </p>
              <p>
                This goal is achieved through “Tech Kits”', which are self-paced learning modules concentrated on specific technologies. Each technology is broken down into three 30 - 60 minute Tech Kits that range from the levels of Beginner, Intermediate, and Advanced. 
              </p>
            </Grid>
          </Grid>
          
          <Grid md container direction='column' alignItems='center' justify='flex-start' spacing={2}> 
            <Grid item xs>
              {/* Picture of OPIM Department */}
              <img style={{borderRadius: 20}}
              src="https://opim.business.uconn.edu/wp-content/uploads/sites/725/2018/09/bus171108_carina_zamudio-16.jpg"
              alt="Picture of OPIM Workshop" width="300" height="200">
              </img>
            </Grid>
            <Grid item xs>
              {/* Button linking to OPIM Department */}
              <Link 
                className={clsx('button button--primary button--lg',)}to={useBaseUrl('https://opim.business.uconn.edu/')}>OPIM Department
              </Link>
            </Grid>
            <Grid item xs>
              {/* Paragraph explaining the OPIM Department */}
              <p>
                The Department of Operations and Information Management (OPIM) at the University of Connecticut is a combination of Operations Management and Management Information Systems. It offers concepts and models of operations research, including problem definition and modeling along with information systems topics including project management concepts, hardware and software technology. 
              </p>
              <p>
              The Department of OPIM at the University of Connecticut offers undergraduate majors in Management Information Systems and in Management and Engineering for Manufacturing, a new joint program developed and offered with the School of Engineering.
              </p>
            </Grid>
          </Grid>
          
          <Grid md container direction='column' alignItems='center' justify='flex-start' spacing={2}> 
            <Grid item xs>
              {/* Picture of MIS class */}
              <img style={{borderRadius: 20}}
              src="https://opim.business.uconn.edu/wp-content/uploads/sites/725/2013/07/feature_sulin.jpg"
              alt="Picture of MIS Class" width="300" height="200">
              </img>
            </Grid>
            <Grid item xs>
              {/* Button linking to the MIS Website */}
              <Link 
                className={clsx('button button--primary button--lg',)}to={useBaseUrl('https://undergrad.business.uconn.edu/academics/majors/mis/')}>MIS Major
              </Link>
            </Grid>
            <Grid item xs>
              {/* Paragraph explaining the MIS Major */}
              <p>
                Management Information Systems (MIS), housed in the Operations and Information Management Department, is a fast growing major that teaches skills that lie at the interface between business functions and information technologies. These include highly sought after proficiencies that help identify technology improvements in business practices including accounting, finance, marketing, operations and everything in between, formulate creative solutions, manage teams that will implement solutions and understand business requirements with the perspective of technologies. Students who major in MIS are eligible to apply to the 4+1 Analytics Track within the Master of Science in Business Analytics and Project Management (MSBAPM) Program.
              </p>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Hello;