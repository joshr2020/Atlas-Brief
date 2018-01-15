# Atlas-Brief

## Contributing

1. First clone a version of this repository to your computer either using the command line or Github Desktop.
2. Make sure you have node.js and npm installed on your computer. Install the webpack build tool (if you haven't already) with `sudo npm install -g webpack`.
3. Then navigate to the directory where you cloned the project and install all dependencies using `npm install -d`.
4. Make sure you have python3 installed on your computer. If you are on mac you can `brew install python3`. Install the pipenv environment manager tool (if you haven't already) with `pip3 install pipenv`.
5. Then navigate to the directory where you cloned the project and install all dependencies using `pipenv install -d`.

The client-side source code (JavaScript) is in `client/`, the server-side source code (Python Flask) is in `server/` and the assets (bundled JavaScript, CSS, HTML, images, etc.) are in `static/`.

One of the most important keys to productivity is tooling, which I have setup but you will need to hook your editor into. Talk to me about how to do it, it really helps!

To try the application, bundle with JavaScript `npm run dev-build`. Or, you can open a separate  shell and type `npm run watch`. Leave this running, and it will rebundle your JavaScript every time you make a change. Then to launch the server, type `pipenv run python server`. Point your browser to `http://localhost:5000/`.

IMPORTANT: By default, your browser will cache files served by our server. I don't know for other browser, but for Chrome or Opera, you need to disable the cache. Open developer tools (Right-click then Inspect Element), and choose the Network tab (may have to enlarge the developer tools pane to see it), then, near the top, check the box, disable cache (again may have to enlarge the tools pane). This will only stay like this when you have developer tools open, so keep that in mind. Let me know if you have questions.

## What we need to do
- Backend
  - Write a program that takes our GeoJSON data in `dist/world.geo.json` and removes all irrelevant properties, with the ability to add new ones once we decide what information our map needs to hold. Will need to look up documentation on GeoJSON and its format and work with a JSON library in the chosen language.
  - It's a little early, but we should think about how we want to store our articles. I think a content management system like Drupal might be a good option, but I don't know too much in this area.

- Styling

  - We need to think about how we want our site to look like,  I think before any more CSS and HTML  is written, we should work on a wireframe of our website (a visual guide to our final site). There is a really good free tool called InvisionApp to do this, when you guys are ready, make an account and send me your email address so I can add you as collaborators.

  - I don't know too much here, but since we are all relatively new to frontend, I think we should really go for a good CSS framework to help us out. It will save a ton of time and effort. I think the best three options to choose from are Bootstrap4, Bulma, or Materialize.css. Each has its own distinct look, Materialize the most so, but being so opinionated, it will probably help us get off the ground more quickly (at the risk of looking a lot like other material design applications). But work on the wireframe first.

- Map
  - Read about GeoJSON and its format so we can use the `geoData` object to populate the searchbar's autocompletion array and color the map appropriately according to properties of each country.
## Learning More

- GeoJSON

  - The GeoJSON file in `static/world.geo.json` is huge and a little hard to read, but since that is the file that we will be manipulating it is worth a shot looking at it.

  - Check out the surprisingly readable [GeoJSON specification](http://geojson.org/geojson-spec.html) (the parts about geometries aren't really relevant to us though, so feel free to skip them). 
- Basic HTML, CSS, and JavaScript
  - To learn, check out codecademy's short courses on HTML and CSS.

  - For review,  [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is by far the best reference documentation out there.
