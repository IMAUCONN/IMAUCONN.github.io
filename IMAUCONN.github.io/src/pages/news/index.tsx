import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined';
import { Container } from "@material-ui/core";
import Link from "@docusaurus/Link";

function strip(str: string) : string
{
  return str.replace("<![CDATA[", "").replace("]]>", "");
}

export default function App() {
  const [items, setItems] = useState([]);

  const rssitems = async () =>
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
      setItems(feedItems);
  };

  const f = (item) => {
    return (
      <div>
         <List>
              {
                <ListItem>
                  <ListItemIcon >
                    <NewReleasesOutlinedIcon style={{ fontSize: 60, paddingRight: 10 }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={<a href= {strip(item.link)}>{strip(item.title)}</a>}
                    secondary={strip(item.description)}
                  />
                </ListItem>
              }
            </List>
        
    </div>
    );
  };
  useEffect(() => {
    rssitems()
  }, []);
  return (
    <Layout title="News">
      <Container maxWidth='xl'>
      <h1 style={{marginTop:10, marginBottom:25}}>Lastest News in MIS</h1>
      {items.map(f)}
      </Container>
    </Layout>
  );
}