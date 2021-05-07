import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Header,Footer} from 'lilw-react-components'
import Cover from "./sections/cover";
import { default as SectionOne } from "./sections/why/section";
import { default as SectionTwo } from "./sections/tool/section";
import { default as SectionThree } from "./sections/final/section";

ReactDOM.render([
      <Header a11y_header_desc='Expertise Directory'/>,
        <main>
          <Cover/>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </main>,
      <Footer/>
    ],
    document.getElementById('root')
)
