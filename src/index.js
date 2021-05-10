import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Header,Footer} from 'lilw-react-components'
import { default as Cover } from "./sections/cover/section";
import { default as Why } from "./sections/why/section";
import { default as Tool } from "./sections/tool/section";
import { default as Acknowledgements } from "./sections/acknowledgements/section";

ReactDOM.render([
      <Header a11y_header_desc='Expertise Directory'/>,
        <main>
          <Cover />
          <Why />
          <Tool />
          <Acknowledgements />
        </main>,
      <Footer/>
    ],
    document.getElementById('root')
)
