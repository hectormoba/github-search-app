## Github user search app

Here we code a simple search app that works with Github's API. This app follow a expected behaviour detailled below. 

### Expected behaviour

- On first load, shows the profile information for Octocat.
- Displays an error message if no user is found when a new search is made.
- If a GitHub user hasn't added their name, shows their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, shows the text "This profile has no bio" with transparency added.
- If any of the location, website, twitter, or company properties are empty, shows the text "Not Available" with transparency added.
- Website, twitter, and company information are links to those resaources. For the company link, it is removed the `@` symbol and the company page on GitHub is linked.

### What we use React

We know that this app has a limited funtionallity and we would have been able to use vanilla JS and HTML. But we use React, because we think about reusability and scalabilty. If anybody wants grow app up, it will be easer for them.

### About projects and styles

This projects was done following the requirements of FrontEnd mentor challenges. We mustn't share any material, like design systems files. Instead, feel free to change colours or take it from `_variables.scss` file.

You can see a deployed versio[here](https://gh-searchuserapp.netlify.app/).
