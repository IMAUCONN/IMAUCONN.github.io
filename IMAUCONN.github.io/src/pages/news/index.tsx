import React, { useState } from "react";
import Layout from '@theme/Layout';

function strip(str: string) : string
{
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

async function rssitems()
{
  const res = await fetch(`https://api.allorigins.win/get?url=http://www.business.uconn.edu/category/opim-innovate/feed`);
    const { contents } = await res.json();
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    let items: any = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link").innerHTML,
      description: el.querySelector("description").innerHTML,
      title: el.querySelector("title").innerHTML,
      pubDate: el.querySelector("pubDate").innerHTML,
    }));
    return (feedItems);
}
export default function App() {
  const [items, setItems] = useState([]);
  const f = (item) => {
    return (
      <div>
        <h1>{strip(item.title)}</h1>
        <p>{strip(item.description)}</p>
         <p>{strip(item.pubDate)}</p> 
        <a href={strip(item.link)}>{item.link}</a>
      </div>
    );
  };
  
  return (
    <Layout title="News">
    <div className="App">
      <button onClick= {async () => {console.log("refresing");setItems(await rssitems())}}> refresh</button>
      {items.map(f)}
    </div>
    </Layout>
  );
}