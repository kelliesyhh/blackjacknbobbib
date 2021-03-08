import React, { Component, useEffect, useState } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import useWindowSize from 'react-use-window-size';
import Confetti from 'react-confetti';

const App = () => {
    const [foo, setFoo] = useState('bar')
    const [resumeData, setResumeData] = useState({})
    const { width, height } = useWindowSize()

  useEffect(() => {
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        setResumeData(data)
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  })

    return (
      <div className="App">
        <Confetti
          width={width}
          height={height}
        />
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        <Portfolio data={resumeData.portfolio}/>
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
}

export default App;
