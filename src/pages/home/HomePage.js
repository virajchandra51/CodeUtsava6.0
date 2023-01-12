import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './HomePage.css';
import '../../App.css';
import Section1 from '../../sections/section1/Section1';
import Section2 from '../../sections/section2/Section2';
import Section3 from '../../sections/section3/Section3';
import Section4 from '../../sections/section4/Section4';
import Section6 from '../../sections/section6/Section6';
import Section7 from '../../sections/section7/Section7';
import Section8 from '../../sections/section8/Section8';
export default class HomePage extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section6/>
        <Section7/>
        <Section8/>
      </div>
    )
  }
}
