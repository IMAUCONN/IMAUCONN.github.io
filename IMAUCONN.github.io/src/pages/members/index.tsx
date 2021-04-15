import React, { useState }  from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';


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
        <Link
              className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
        </Link>
        <Link
              className={clsx('button button--outline button--secondary button--lg',)}to={useBaseUrl('https://uconntact.uconn.edu/organization/ima')}>Join Now
        </Link>
        <h1>Upcoming Meetings</h1>
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
