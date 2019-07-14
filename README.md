To run program:

clone repo and run `npm start` in console.

Design choices:

Styling: Single .css file. This app has minimal styling. A single source seemed preferred over a sparse style sheet for each component. If app grew, I might break out styling into a separate .css file for each component.

API request:
Opted for Axios and async await. Fetch and using a promise would also have worked. No grand scheming here, just preference.

Chose to leave all the API call code in App component rather than creating a separate component using `axios.create` to separate some of that logic. There is no key to deal with for this API and that seemed an unnecessary step, but for an API in which there is a client-id or some sort of key, that might be a better choice to keep the App component cleaner.

Slugify url of place name
