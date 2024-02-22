# Timeline by Jorge Mariel

This is a coding challenge for Prediktive. I took some inspirations decisions to make the challenge a little bit more interesting and show off not only my code knowledge but also my UI/UX experience.

### Time Taken
The creation of this project took me 3 hours. I acknowledge that there are some things to improve but I didn't want to extend the available time any more.

### Design
I like my design because no information is lost in the view (except the year for simplification), also the data look compact and easy to find the events.

### Technologies
If I have to start the project again, I would start with Next.js and TypeScript to make the code more simple and easy to maintain.

### Inspirations
To make this UI I took some inspirations in other project that I worked in. Also, I searched designs on uplabs.com and Google Photos and Pinterest.

### Future Improvements
If I had more time I would add tests for the event form and improve the UI by adding a zebra style to the background grid and improving the drag and drop feature by making the day column droppable.

Feel free to reach out with any questions or feedback!

## How to run

Install dependencies:

### `npm install`

Run the project:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Requirements and features

- Arrange events in a compact space-efficient way
- If event A concludes prior to the commencement of event B, their corresponding bars should align within the same column
- Events with large names will truncate the text. Opening it will show the full information
- Clicking the event will open a dialog to view, edit or delete the event (inline was not the best for dates)
- Create event button will prompt a dialog to create a new event
- If a event is changed, the events will rearrange automatically
- Drag and drop: To move an event drag it to the desire new start date. The start date background will turn green.
- View switch: There are 3 predefined views. Which change the size of the days
    - Small: Days will have a size of 50px
    - Medium: Days will have a size of 100px (Default)
    - Large: Days will have a size of 200px

## Integrations

- For styles: [tailwind-css](https://tailwindcss.com/)
- For date handling: [dayjs](https://day.js.org/)
- For date picker: [react-tailwindcss-datepicker](https://react-tailwindcss-datepicker.vercel.app/)
- For drag n drop: [dndkit](https://dndkit.com/)

## Assumptions

- The timeline can be horizontal
- The start date is before end date
- No data will persist
- Sample data will be available in `src/timelineItems.js`
