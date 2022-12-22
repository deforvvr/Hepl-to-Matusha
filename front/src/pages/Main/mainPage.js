
import './mainPage.css';
import { Link } from 'react-router-dom';

export function MainPage() {
  const strInDb = `{"Русский": {"startime": "14:40"}}`
  const objFromServer = JSON.parse(strInDb)

  const arr = Object.entries(objFromServer)



  return (
    <div className="parent">
      <div className="topBlock">

        <h1 className="name">СМШ</h1>
        <Link to="/newsPage" className="news">Новости</Link>
        <Link to="/alertsPage" className="alerts">Уведомления</Link>

      </div>

      <div className="mainBlock">

        <h1 className="date">Понедельник 01.01.2023</h1>

        {arr.map((e,i) => {
          return (
            <div className="container">
              <h2 className="lesson">
                {i+1}. {e[0]}
                <h3 className="time">
                  {e[1].startime}
                </h3>
              </h2>
            </div>
          )
        })}

        <div className="container">

          <h2 className="lesson">
            1. Русский язык
            <h3 className="time">
              8.30-9.15 к.111
            </h3>
          </h2>

        </div>

        <div className="container">

          <h2 className="lesson">
            1. Русский язык
            <h3 className="time">
              8.30-9.15 к.111
            </h3>
          </h2>

        </div>
        <div className="container">

          <h2 className="lesson">
            1. Русский язык
            <h3 className="time">
              8.30-9.15 к.111
            </h3>
          </h2>

        </div>
        <div className="container">

          <h2 className="lesson">
            1. Русский язык
            <h3 className="time">
              8.30-9.15 к.111
            </h3>
          </h2>

        </div>
        <div className="container">

          <h2 className="lesson">
            1. Русский язык
            <h3 className="time">
              8.30-9.15 к.111
            </h3>
          </h2>

        </div>
      </div>

      <div className="navigationPanel">
        <Link to="/homeworks" className="Link">Домашние задания</Link>
        <Link to="/marks" className="Link">Оценки</Link>
        <Link to="/here" className="Link">Посещаемость</Link>
        <Link to="/dolgi" className="Link">Академическая задолжность</Link>
        <Link to="/project" className="Link">Проектная деятельность</Link>
        <Link to="/calendar" className="Link">Календарь</Link>
      </div>

      <div className="dataBar">
      </div>
    </div>
  );
}
