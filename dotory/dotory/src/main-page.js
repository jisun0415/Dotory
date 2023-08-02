import React from 'react';
import  {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import PocketPage from './new-pocket';
import Header from './components/header';
import ToDoList from './todolist-page';
import './main-page.css';
import Calendar from './components/calendar';
import DiaryPage from './diary-page'

function MainPage() {
  
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route exact path="/" element={<Calendar/>}/>
        <Route exact path="/todolist" element={<ToDoList/>}/>
        <Route exact path="/diary" element={<DiaryPage/>}/>
        <Route exact path="/new-pocket" element={<PocketPage/>}/>
          
      </Routes>

    </div>
  );
}

export default MainPage;
