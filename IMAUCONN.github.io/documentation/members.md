# Members Documentation

## File Location
In order to change any components, you will need to go to the following path: 

`src/pages/members/index.tsx`

## Components 
- Meetings & Membership
- Sign In Button
- Meeting Minutes Button
- Join Now Button
- Upcoming Meetings Table 

## Meetings & Membership
- This is where you would describe IMA meetings and membership benefits. 
- The introductory text is dispersed via `<p>` tags.

## Sign In Button
- This is a button that links to the UConntact Events page, allowing members to sign into meetings.

## Meeting Minutes Button
- This is a button that links to the minutes (notes) of each meeting. 

## Join Now Button
- This is a button that links to the UConntact IMA page, allowing new members to sign up. 

## Upcoming Meetings Table 
- This is a table that holds all of the information for upcoming IMA meetings. 
- It is dispersed via `<Table>`, `<TableContainer>`, `<TableHead>`, `<TableRow>`, `<TableCell>` & `<TableBody>` tags
- You can add a new row using `createData()` function in the `rows` list. 
- For example, if you wanted to add a new row for an upcoming Tuesday meeting, you would do so in the following format:
    ` createData('OPIM Innovate Demo', "March 9, 2021", "N/A", "WebEx", "7:00PM EST"), `


