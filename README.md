# OVERVIEW:

This app is a single page React App, using the OpenBreweryDB API.
By default, the app displays breweries in my area, Birmingham, AL. but the user can select a state to see breweries in their area.
React Router is used for routing and to ensure proper navigation between views.
Semantic UI is used for basic styling.
Google React Maps was chosen to display the map.

To run program:

clone repo and run `npm start` in console.

# DESIGN CHOICES:

Styling: I have only 2 css files, one for the ListItems, and a main css file for all other components. This app has minimal styling. I broke out the ListItems, but other than that a single source seemed preferred over a sparse style sheet for each component. If app grew, I might break out styling into a separate .css file for each component.

API request:
Opted for Axios and async await. Fetch and using a promise would also have worked. No grand scheming here, just preference.

Chose to leave all the API call code in App component rather than creating a separate component using `axios.create` to separate some of that logic. There is no key to deal with for this API and that seemed an unnecessary step, but for an API in which there is a client-id or some sort of key, that might be a better choice to keep the App component cleaner.

# WHAT I MIGHT DO DIFFERENT WITH MORE TIME:

- I opted to not utilize Rails for a backend due to the amount of time I had available around work and family obligations. I am more fresh on React than I am at Rails and I wanted to ensure I could complete this in a manner I was fully proud of, rather than potentially hacking together a backend with time pressure due to work and family.

- Better styling/colors. While I appreciate great design and aspire to have good design skills, it does not come naturally to me.

- More conditional rendering so that for Brewery listings that do not have a street address or url, remove the blank space.

- It'd be fun to have some images. The API did not provide any, but I might find a collection of logos or icons that match the theme to render out with each ListItem.

- I have a state search, I might also add a city search.
