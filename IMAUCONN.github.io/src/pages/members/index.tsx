import React, { useState }  from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { Grid, Container } from '@material-ui/core';


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
//       link: el.querySelector("link").innerHTML,
//       location: el.querySelector("location").innerHTML,
//       title: el.querySelector("title").innerHTML,
//     }));
//     return (feedItems);
// }

export default function App() {
  return (
    <Layout title="Hello">
      <Container>

        <Grid container direction='row'>

          <Grid>
              <h2>
                Welcome current and prospecting members! 
              </h2>
              <p> 
                Being a member of IMA is the first step to secure a job in the IT field upon graduation. IMA membership will not only give you a wealth of information relevant to the IT industry today, but it will provide you with invaluable networking and professional development opportunities. 
              </p>
              <p>
                So, we are so happy to have you here!
              </p>
          </Grid>

          <Grid item justify='flex-start'>
            <Container>
              <h2>
                Membership
              </h2>
              <p>
                If you are interested in joining IMA, please click on the button below. 
              </p>
              <Link
                className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
              </Link>
            </Container>
          </Grid>

          <Grid item justify='flex-end'>
            <Container>
              <h2>
                Meetings
              </h2>
              <p>
                IMA meetings give students the opportunity to network with employers and also participate in technical workshops to improve various skillsets.  
                <strong> Tuesday</strong> meetings are typically reserved for company recruitment and networking. <strong>Wednesday</strong> meetings are typically reserved for technical workshops and hands-on experience in the Gladstein Lab. 
                are typically held every week.
              </p>
              <p>
                If you are looking to sign into a meeting or are inteested in reviewing our meeting minutes, please click the respective buttons below. 
              </p>
              <Link
                className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Sign In
              </Link>
              <Link
                className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('docs/')}>Meeting Minutes
              </Link>
            </Container>
          </Grid>

        </Grid>
        
        <h3>Upcoming Meetings</h3>
        
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
