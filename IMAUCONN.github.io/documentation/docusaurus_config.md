# Docusaurus Configuration Documentation

## File Location
In order to change any components, you will need to go to the following path: 

`docusaurus.config.js`

## Components
- title
- tagline
- url
- baseUrl
- onBrokenLinks
- onBrokenMarkdownLinks
- favicon
- organizationName
- projectName
- themeConfig
- navbar
- footer 
- presets

## `title`
This is where you can change the title of the homepage and the browser's tab title.

## `tagline`
This is where you can change the introductory text on the homepage. 

## `url`
This is the url for the side. This should not change.

## `baseurl`
This is the root directory of the website. This should not change.

## `onBrokenLinks` & `onBrokenMarkdownLinks`
These are the behaviors that occur when missing resources are attempted to be loaded. This should not change.

## `favicon`
This is the icon that appears on the browser's tab. 

## `organizationName` & `projectName`

These components link to the IMA github repository. These should not change.

## `themeConfig`
This is the component that allows the website's colors to change. 

## `navbar`
This is the header for every page throughout the site. 

Within it is a `title`, `style`, `alt`, `src`, `items`. 
- Title is the title displayed. 
- Style can be changed from "dark" to "primary". 
- Alt (short for alternate) is text printed in the case that the image is not available. 
- Src (short for source) is the image that is displayed on the navbar. 
- Items is a list of buttons displayed on the navbar that are linked to different pages. Each item has three elements:
    - `to`, `label`, `position`
        To is the page that each item redirects to.
        Label is the title that is displayed in the navbar. 
        Position is the location of that item on the navbar. 

## `footer`
This is the footer for every page throughout the site.

Within it is a `style` & `links`

- Style can be changed from "dark" to "primary". 
- Links is a list of buttons displayed on the footer that are linked to different pages. Each link has 2 elements:
    - `title`, `items`
        Title is the text title of the column-wise group.
        Items are the links within the group. Items have 2 elements:
        - `label`, `href`
            Label is the title displayed in the footer for each link.
            Href is the link for each text in the footer. 

## `presets`
This is the property which takes a preset configuration provided by Docusaurus. These should not change. 
