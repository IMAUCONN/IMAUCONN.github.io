import React, { useState } from "react";

function strip(str: string) : string
{
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

async function rssitems()
{
  console.log("refresing")
  const res = await fetch(`https://api.allorigins.win/get?url=http://events.uconn.edu/api/rss/?calendar%5B%5D=608&calendar%5B%5D=283`);
    const { contents } = await res.json();
    console.log(contents);
    const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    let items: any = feed.querySelectorAll("item");
    const feedItems = [...items].map((el) => ({
      link: el.querySelector("link").innerHTML,
      location: el.querySelector("location").innerHTML,
      title: el.querySelector("title").innerHTML,
    }));
    return (feedItems);
}
export default function App() {
  const [items, setItems] = useState([]);
  
  return (
    <div className="App">
      <button onClick= {async () => {console.log("refresing");setItems(await rssitems())}}> refresh</button>
      {items.map((item) => {
        return (
          <div>
            <h1>{strip(item.title)}</h1>
            <h1>{strip(item.location)}</h1>
            <a href={strip(item.link)}>{item.link}</a>
          </div>
        );
      })}
    </div>
  );
}