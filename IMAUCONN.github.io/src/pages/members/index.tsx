import React, { useState }  from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { makeStyles, TableContainer, Table, TableHead, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import { Grid, Container, GridSpacing } from '@material-ui/core';


// function strip(str: string) : string
// {
//   return str.replace("<![CDATA[", "").replace("]]>", "");
// }
// const [items, setItems] = useState([]);
// async function rssitems()
// {
//   console.log("refresing")
//   const res = await fetch(`https://api.allorigins.win/get?url=https://events.uconn.edu/api/rss/?calendar%5B%5D=557`);
//     const { contents } = await res.json();
//     console.log(contents);
//     const feed = new window.DOMParser().parseFromString(contents, "text/xml");
//     let items: any = feed.querySelectorAll("item");
//     const feedItems = [...items].map((el) => ({
//       location: el.querySelector("location").innerHTML,
//       buildingroom: el.querySelector("buildingroom").innerHTML,
//       date: el.querySelector("date").innerHTML,
//       start_time: el.querySelector("start_time").innerHTML,
//       stop_time: el.querySelector("stop_time").innerHTML,
//     }));
//     return (feedItems);
// }
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    paddingTop: 10,
  }
});

function createData(name: string, date: string, location: string, room: string, time: string) {
  return {name, date, location, room, time};
}

const rows = [
  //for loop items create data using name date location room and time in items'
  //for items: items
  //
  createData('Frozen yoghurt', "159", "6", "24", "4.0"),
  createData('Ice cream sandwich', "", "9.0", "37", "4.3"),
  createData('Ice cream sandwich', "", "9.0", "37", "4.3"),
  createData('Ice cream sandwich', "", "9.0", "37", "4.3"),
  createData('Ice cream sandwich', "", "9.0", "37", "4.3"),
];

export default function App() {
  return (
    <Layout title="Hello">
      <Container maxWidth='xl'>
            <h1 style={{marginTop:10, marginBottom:10}}>
              Welcome Current and Prospecting Members! 
            </h1>
            <Grid container direction='row' spacing={4}>
            <Grid item xs>
                <h2 style={{marginTop:10, marginBottom:10}}>
                Meetings
                </h2>
                <p>
                  IMA meetings give students the opportunity to network with employers and also participate in technical workshops to improve various skillsets.  
                  <strong> Tuesday</strong> meetings are typically reserved for company recruitment and networking. <strong>Wednesday</strong> meetings are typically reserved for technical workshops and hands-on experience in the Gladstein Lab. 
                </p>
                <p>
                  If you are looking to sign into a meeting or are interested in reviewing our meeting minutes, please click the respective buttons below. 
                </p>
                <Link style={{marginRight:10}}
                  className={clsx('button button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Sign In
                </Link>
                <Link
                  className={clsx('button  button--secondary button--lg',)}to={useBaseUrl('docs/')}>Meeting Minutes
                </Link>
              </Grid>
              <Grid item xs>
                <h2 style={{marginTop:10, marginBottom:10}}>
                  Membership
                </h2>
                <p>
                Being a member of IMA is the first step in securing a job in the IT field upon graduation. IMA membership will not only give you a wealth of information relevant to the IT industry today, but it will provide you with invaluable networking and professional development opportunities.
                </p>
                <p>
                  If you are interested in joining IMA, please click on the button below. 
                </p>
                <Link 
                  className={clsx('button button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
                </Link>
              </Grid> 
            </Grid>
        
        <h2 style={{marginTop:20, marginBottom:10}}>Upcoming Meetings</h2>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong> Name </strong></TableCell>
            <TableCell align="right"><strong> Date </strong></TableCell>
            <TableCell align="right"><strong> Location </strong></TableCell>
            <TableCell align="right"><strong> Room </strong></TableCell>
            <TableCell align="right"><strong> Time </strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.room}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
          {/* <button onClick= {async () => {console.log("refresing");setItems(await rssitems())}}> refresh</button>
        {items.map((item) => {
          return (
            <div>
              <h1>{strip(item.title)}</h1>
              <h1>{strip(item.location)}</h1>
              <a href={strip(item.link)}>{item.link}</a>
            </div>
          );
        })} */}
      </Container>
    </Layout>
  );}