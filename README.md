# Ask Apps Tech Classes - Session 2

### Summary:
In this exercise, you will build a React application that allows us to view a playlist of videos and change which video is being displayed in your video player.

The necessary structure and styling for the application has already been provided, but there are several parts of the application logic that don't work yet.

No CSS/HTML changes are required to complete this exercise. The goal is to focus on JavaScript and React.

This application has a VideoPlayer component at its root, which renders a VideoList component, in addition to some other elements to represent the video viewer and some option buttons.

The VideoList component renders a collection of VideoButton components.

The VideoButton component renders an element that allows the user to select a video.

## Pre-requisites:
* Node - [https://nodejs.org/en/](https://nodejs.org/en/)

## Setup instructions:
* Download this project as a .zip file (https://github.com/andylu821/tech-classes-session-2/archive/master.zip) or use Git to checkout this repository
* In a command line terminal, navigate into the root directory of this project (the directory that has this file in it) and run `npm install`
* To run the application locally, run `npm start`
* Whenever you save changes to the code files in the `/src` directory, the page will automatically reload to reflect your changes
* There are ultimately 4 files in the `/src` directory that need to be changed, and while the recommended order helps make your progress more visible as you develop the application, the changes are not strictly dependent on each other, so feel free to jump around if you get stuck on a particular part.
* Anything prefaced with "as an additional challenge" in the code comments of this application is not required to complete this exercise.

## Exercise 1 - `/src/utilities.js`
* This file contains a number of opportunities for additional challenges after completing the base exercise, but at first, the only part of this file that needs to be changed is the `getVideoIdFromPageUrl` function.
* This function takes in a page URL, like `'https://vimeo.com/315518030'`, and needs to be written so that it separates out just the video ID, like `'315518030'`, and returns it.
* For helpful String methods you can use to achieve this goal, try referencing [the String documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2) for more information.

## Exercise 2 - `/src/VideoPlayer.js`
* This file requires a number of different changes. After familiarizing yourself with the file as a whole to understand the structure of the component, direct your attention to the `render` function.
* Update the `render` function so that it passes the appropriate values to the elements it renders depending on the values in its state. (More details are in the code comments of the function itself.)
* Update the state-setting functions `handleVideoButtonClick`, `toggleSidebarState`, `goToPreviousVideo`, and `goToNextVideo` so that they update the component's state appropriately. (More details are in the code comments of the functions themselves.)

## Exercise 3 - `/src/VideoList.js`
* This component is much less complex than the VideoPlayer component. In this file, update the `render` function so that it passes the correct values to the components that it renders. (More details are in the code comments of the function itself.)

## Exercise 4 - `/src/VideoButton.js`
* Just like in the VideoList component, this component needs some updates to its `render` function. Update this function so that it passes the appropriate values to the elements it renders depending on the values in its props. (More details are in the code comments of the function itself.)

## Advanced Exercise 1 - Filtering and transforming data
* In `/src/utilities.js`, direct your attention to the `getVideoTitleFromPageTitle` function.
* This function was not necessary, but it could make our inerface a little nicer. Vimeo appends the words "on Vimeo" to the end of the title of a video to create the title of the page the video is on. To transform our page history data into video data more accurately, rewrite this function to return the title with this extra suffix removed, effectively returning the video title.
* Next, direct your attention to the `filterHistory` function.
* This function was also not necessary, but it becomes necessary if the `getVideoHistory` function is updated to use a different constant. You can use `history2`, `history3`, and `history4` in the `getVideoHistory` function to test how effectively your `filterHistory` function returns an array of only the history elements that represent Vimeo videos. The goal here is for your application to behave the same regardless of which constant is used, since none of the additional constants include more Vimeo videos, only entries to be filtered out.

## Advanced Exercise 2 - Managing state and rendering
* In `/src/VideoPlayer.js`, direct your attention to the `render` function.
* On the first render when there is no video data yet, the component renders nothing. Come up with something to display in this scenario that indicates to the user that your application is still loading, instead of just rendering nothing.
* Next, direct your attention to the `goToPreviousVideo` and `goToNextVideo` functions.
* The original instructions call for these functions to do nothing if the previous or next video would be out of bounds. Instead, update this function to "wrap around" the list of videos, so that the previous video from the first video is the last video, and the next video from the last video is the first video.
* Alternatively, update this component so that the buttons that call these functions are properly disabled in the scenarios where their functions wouldn't do anything. This way, the function won't even be called, and the user has a visual indication that the button will have no effect.

## Advanced Exercise 3 - Styling
* The styles included in this application are only the bare minimum required for it to work.
* Experiment with different styles in `/src/VideoButton.css` to customize how your buttons look.
* Experiment with different styles in other parts of the application, possibly different layouts altogether.

## Advanced Exercise 4 - Installing and integrating a new dependency
* There are some parts of this application that rely on conditional logic to use different CSS classes when rendering. Run `npm install classnames` to install the [classnames](https://www.npmjs.com/package/classnames) library as a dependency so that you can use it to help with that logic.
* Review the usage examples in the documentation and update your application to import and use this library when passing in different CSS classes based on conditional logic.

## Contributing
andy.lu@apps.ask.com
brian.mcneely@apps.ask.com

## License
This is released under the MIT license (https://opensource.org/licenses/MIT)