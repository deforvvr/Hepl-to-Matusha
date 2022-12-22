import React from 'react';
import { Pagination } from 'antd';
const App = () => <Pagination defaultCurrent={1} total={50} />;

import './mainPage.css';
import { Link } from 'react-router-dom';

export function MainPage() {
return(
  
  <div className='parent'>
    
    <div className='top_bar'>
        <div className='box'>
          <h1 className='title'>СМШ</h1>
          <Link className='link145'><h2 className='news'>Новости</h2></Link>
          <Link className='link145'><h2 className='news'>Уведомления</h2></Link>
        </div>
    </div>

    <div className='data_bar'>
      <Link to="/in_proceed" className='arrow_box'></Link>
      <Link to="/in_proceed" className='data_button'>01</Link>
      <Link to="/in_proceed" className='data_button'>02</Link>
      <Link to="/in_proceed" className='data_button'>03</Link>
      <Link to="/in_proceed" className='data_button'>04</Link>
      <Link to="/in_proceed" className='data_button'>05</Link>
      <Link to="/in_proceed" className='data_button'>06</Link>
      <Link to="/in_proceed" className='data_button'>07</Link>
      <Link to="/in_proceed" className='arrow_box'></Link>
    </div>

    <div className='schedule'>
      <h1 className='date'>Понедельник 01.01.2023</h1>

      <div className='container'>
        <p className='lesson'>1. Русский язык</p>
        <p className='time'>8.30 - 9.15</p>
      </div>
      <p className='chill_time'>Перемена 20 минут</p>
      <div className='container'>
        <p className='lesson'>1. Русский язык</p>
        <p className='time'>8.30 - 9.15</p>
      </div>
      <p className='chill_time'>Перемена 20 минут</p>
      <div className='container'>
        <p className='lesson'>1. Русский язык</p>
        <p className='time'>8.30 - 9.15</p>
      </div>
      <p className='chill_time'>Перемена 20 минут</p>
      <div className='container'>
        <p className='lesson'>1. Русский язык</p>
        <p className='time'>8.30 - 9.15</p>
      </div>
      <p className='chill_time'>Перемена 20 минут</p>
      <div className='container'>
        <p className='lesson'>1. Русский язык</p>
        <p className='time'>8.30 - 9.15</p>
      </div>
    </div>

    <div className='navigation'>
      <Link to="/main" className='link'>Расписание</Link>
      <Link to="/in_proceed" className='link'>Домашнее задание</Link>
      <Link to="/in_proceed" className='link'>Оценки</Link>
      <Link to="/calendar" className='link'>Календарь</Link>
      <Link to="/in_proceed" className='link'>Задолжность</Link>
      <Link to="/in_proceed" className='link'>Проекты</Link>
      <Link to="/in_proceed" className='link'>Посещаемость</Link>
    </div>
  </div>
);
}
