# Homepage Documentation

## File Location
In order to change any components, you will need to go to the following path: 

`src/pages/homepage/index.tsx`

## Components 
- Introductory Text & Title
- Join Now Button
- Images with Captions

## Introductory Text
- These components are located in the `docusaurus.config.js` file. 
- You can change both by editing the `title` and `tagline` variables.

## Join Now Button
- The button is created using the `<Link>` component.
- It links to the IMA UConntact website page for new membership.
- To change this, change the URL link within the `useBaseUrl` function.

## Images with Captions
- These images are located in the `features` variable.
    - They refer to images located in the `static/img` folder.
    - To change these, add new .jpg or .png files to this folder and properly refer to them in the `imageURL` variable.
- To change the captions that go along with them, change the text within the `title` variable.