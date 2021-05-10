# Regulatory Navigation Tool

This project is a React implementation built by the [Legal Innovation Lab Wales](https://legaltech.wales/) of the 
"Regulatory Navigation Tool" provided by [LawTech UK](https://technation.io/lawtech-uk-resources/).

The current tool is provided as an interactive PDF which requires a user to have Adobe Acrobat Reader DC installed 
whereas this project, as an interactive webpage, can be viewed directly in the user's browser.

---

### Overview

The webpage is split into 4 sections mirroring the 4 pages of the PDF, each of these sections are split by a horizontal
line and are represented in the DOM as `<section>` elements inside a parent `<main>`.

The sections are referred too in the parent index as `Cover`, `Why`, `Tool` and `Acknowledgements` as short-hands for 
the information each section is attempting to convey.

Most of these sections consist purely of static-content however the `Tool` section contains a few components that are
used to control the functionality of the regulatory navigation tool, these are the `tool` and the `explainer`.

The `tool` and `explainer` components content are populated dynamically by 3 data structures, these are the `activities`, 
`regulators` and `countries`. Currently, an `activity` can have many `regulators` and each `regulator` belongs to a single 
`country`.

Note: A regulator can also have many `profession`/`professional_body` fields so can be passed as either a string or an
array, see "Intellectual Property Regulation Board" for an example of this.

These data structures are currently captured by 3 JSON files found in the projects `public` folder. By building the 
project with these dynamic data structures we can easily add, amend and remove to any of these structures.

---

### Development

To run this project locally you will need `npm` installed, with this installed you can run `npm install` from the 
projects root directory (which will import the project dependencies) and `npm start` which should start up a webserver 
serving this page on `http://localhost:3000`