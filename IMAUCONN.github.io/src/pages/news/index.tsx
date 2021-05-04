import React, { useEffect, useState } from "react";
import Layout from '@theme/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListIcon from '@material-ui/icons/List';
import { Container } from "@material-ui/core";

//this is a lookup table to get rid of HTLM escape characters https://www.werockyourweb.com/html-escape-characters/
function convert_named_html_character_code(str: string) {
  const chars = {
    'sp': ' ', 
    'blank': ' ',	
    'excl': '!',
    'quot': '“',
    'num': '#',
    'dollar': '$',
    'percnt': '%',
    'amp': '&',
    'apos': '‘',
    'lpar': '(',
    'rpar': ')',
    'ast': '*',
    'plus': '+',
    'comma': ',',
    'hyphen': '−',
    'dash': '–',
    'period': '.',
    'sol': '/',
    'colon': ':',
    'semi': ';',
    'equals': '=',
    '&quest': '?',
    'commat': '@',
    'lsqb': '[',
    'bsol': '\\',
    'rsqb': ']',
    'caret': '^',
    'lowbar': '_',
    'lcub': '{',
    'verbar': '|',
    'rcub': '}',
    'tilde': '~',
    'sim': '~',
    'nbsp': ' ',
    'iexcl': '¡',
    'cent': '¢',
    'pound': '£',
    'curren': '¤',
    'yen': '¥',
    'brkbar': '¦',
    'sect': '§',
    'uml': '¨',
    'die': '¨',
    'copy': '©',
    'ordf': 'ª',
    'laquo': '«',
    'not': '¬',
    'reg': '®',
    'hibar': '¯',
    'deg': '°',
    'plusmn': '±',
    'sup2': '²',
    'sup3': '³',
    'acute': '´',
    'micro': 'µ',
    'para': '¶',
    'middot': '·',
    'cedil': '¸',
    'sup1': '¹',
    'ordm': 'º',
    'raquo': '»',
    'frac14': '¼',
    'half': '½',
    'frac34': '¾',
    'iquest': '¿',
  };
  return chars[str];
}
//This strips the HTML tags from the strings in the news
function strip(str: string) : string
{
  return str.
    replace('<![CDATA[', '').
    replace(']]>', '').
    replace('Read article', '').
    replace(/<a .*\/a>/, '').
    replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode)).
    replace(/(&(\w+);)/g, (match, capture, str) => convert_named_html_character_code(str));
}
//this is an interface showing each element in news
interface News_Article {
  link: string;
  description: string;
  title: string;
  pubDate: string;
}

export default function App() {
  //loads the news rss feed
  const [items, setItems] = useState<News_Article[]>([]);
//
  const load_news_articles = async () =>
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

  useEffect(() => {
    load_news_articles()
  }, []);
  //renders list component for news_article
  const news_article = (item: News_Article) => {
    return (
        <List>
        <ListItem>
          <ListItemIcon >
            <ListIcon style={{ fontSize: 60, paddingRight: 15 }} />
          </ListItemIcon>
          <ListItemText 
            primary={<h2><a href= {strip(item.link)}>{strip(item.title)}</a></h2>}
            secondary={strip(item.description)}
          />
        </ListItem>
      </List>
    );
  };
  //displays the news article
  return (
    <Layout title="News">
      <Container maxWidth='xl'>
        {/* Header for the news site */}
      <h1 style={{marginTop:10, marginBottom:25}}>Latest News in MIS</h1>
      {/* desplays each new_article  */}
      {items.map(news_article)}
      </Container>
    </Layout>
  );
}