import React from 'react';
import { Calendar } from 'antd';
import './calendarPage.css';
import { Link } from 'react-router-dom';

export function CalendarPage (){

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className='parent'>
        
        <div className='top_bar'>
        <div className='box'>
          <h1 className='title'>СМШ</h1>
          <Link className='link145'><h2 className='news'>Новости</h2></Link>
          <Link className='link145'><h2 className='news'>Уведомления</h2></Link>
        </div>
    </div>

    <div className='navigation'>
      <Link to="/main" className='link'>Расписание</Link>
      <Link to="/" className='link'>Домашнее задание</Link>
      <Link to="/" className='link'>Оценки</Link>
      <Link to="/calendar" className='link'>Календарь</Link>
      <Link to="/" className='link'>Задолжность</Link>
      <Link to="/" className='link'>Проекты</Link>
      <Link to="/" className='link'>Посещаемость</Link>
    </div>

        <div className='main'>
            <Calendar onPanelChange={onPanelChange} />
        </div>
    
    </div>
  );
}