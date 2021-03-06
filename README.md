# VINCI website

#### Development & Testing

To keep the website maintainable, the conference website is static and built using [pug](https://pugjs.org/api/getting-started.html) (used to define pages as well as templates with more efficient syntax) and webpack.
In addition, development requires [Node.js](https://nodejs.org/en/).

- First, run `npm install` to fetch all dependencies.
- Starting development server: `npm start`
- Building the website: `npm run build` (for testing purposes only).

Major conference information such as title, year, location as well as submission and notification dates are specified in [conference.json](conference.json).
For submission updates, multiple dates can be specified, with the last beeing used and displayed as latest valid date. Previous dates will be displayed but crossed out.

#### Deployment

The action for deployment is specified in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
It will be triggered automatically when any changes are pushed to the master branch.
