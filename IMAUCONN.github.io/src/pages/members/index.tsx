import React, { useState }  from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { makeStyles, TableContainer, Table, TableHead, Paper, TableBody, TableCell, TableRow } from '@material-ui/core';


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
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

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
        <Link
              className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
        </Link>
        <Link
              className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima/events?showpastevents=true')}>Metting Sign In
        </Link>
        <h1>Upcoming Meetings</h1>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Time</TableCell>
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
    <Link
      className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('docs/')}>Meeting Minutes
    </Link>
    
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
    </Layout>
  );}

