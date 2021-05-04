import React, { useState }  from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { makeStyles, TableContainer, Table, TableHead, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Grid, Container, GridSpacing } from '@material-ui/core';

//styles the table and headers
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    paddingTop: 10,
  }
});

//function that creates the data for the rows
function createData(name: string, date: string, location: string, room: string, time: string) {
  return {name, date, location, room, time};
}

const rows = [
  //create data using name date location room and time in items'
  createData('OPIM Innovate Demo', "March 9, 2021", "N/A", "WebEx", "7:00PM EST"),
  createData('Class Registration Meeting', "March 16, 2021", "N/A", "WebEx", "7:00PM EST"),
  createData('IT Security with Kevin Brown', "March 23, 2021", "N/A", "WebEx", "7:00PM EST"),
  createData('Salary Negotiation Workshop', "March 30, 2021", "N/A", "WebEx", "7:00PM EST"),
  createData('The Hartford', "April 16, 2021", "N/A", "WebEx", "7:00PM EST"),
];

export default function App() {
  return (
    <Layout title="Members">
      <Container maxWidth='xl'>
        {/* Header for the members page */}
        <h1 style={{marginTop:10, marginBottom:25}}>
          Welcome Current and Prospecting Members! 
        </h1>
        <Grid container direction='row' justify='center' spacing={4} style={{gap:20}}>
          <Grid item xs style={{backgroundColor: 'lightgrey', borderRadius: 10}}>
            {/* Meetings Header */}
            <h2 style={{marginBottom:10}}>
            Meetings
            </h2>
            {/* Paragraph for Meetings */}
            <p>
              IMA meetings give students the opportunity to network with employers and also participate in technical workshops to improve various skillsets.  
              <strong> Tuesday</strong> meetings are typically reserved for company recruitment and networking. <strong>Wednesday</strong> meetings are typically reserved for technical workshops and hands-on experience in the Gladstein Lab. 
            </p>
            <p>
              If you are looking to sign into a meeting or are interested in reviewing our meeting minutes, please click the respective buttons below. 
            </p>
            {/* Button that links to uconntact events page to sign in */}
            <Grid container justify='space-evenly'>
              <Link style={{marginRight:10}}
                className={clsx('button button--primary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Sign In
              </Link>
              {/* Button that links to the meeting minutes markdown files under docs */}
              <Link
                className={clsx('button  button--primary button--lg',)}to={useBaseUrl('docs/')}>Meeting Minutes
              </Link>
            </Grid>
          </Grid>
          <Grid item xs style={{backgroundColor: 'lightgrey', borderRadius: 10}}>
            {/* Header for Membership */}
            <h2 style={{marginBottom:10}}>
              Membership
            </h2>
            {/* Paragraph for Membership */}
            <p>
            Being a member of IMA is the first step in securing a job in the IT field upon graduation. 
            </p>
            <p>
            IMA membership will not only give you a wealth of information relevant to the IT industry today, but it will provide you with invaluable networking and professional development opportunities.
            </p>
            <p>
              If you are interested in joining IMA, please click on the button below. 
            </p>
            {/* Button that links to ucontact IMA page */}
            <Grid container justify='center'>
              <Link 
                className={clsx('button button--primary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
              </Link>
            </Grid>
          </Grid> 
        </Grid>
          {/* Header for the upcoming meetings */}
          <h2 style={{marginTop:30, marginBottom:10}}>Upcoming Meetings</h2>
          {/* Table that lists upcoming meetings */}
          <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            {/* Table header and rows to describe  */}
            <TableRow>
              {/* Each Cell in the header of the table */}
              <TableCell><strong> Name </strong></TableCell>
              <TableCell align="left"><strong> Date </strong></TableCell>
              <TableCell align="left"><strong> Location </strong></TableCell>
              <TableCell align="left"><strong> Room </strong></TableCell>
              <TableCell align="left"><strong> Time </strong></TableCell>
            </TableRow>
          </TableHead>
          {/* Table  body */}
          <TableBody>
            {rows.map((row) => (
              //each row in the table
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="left">{row.room}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </Container>
    </Layout>
  );}