import React from 'react';
import { Badge, Calendar } from 'antd';

const getListData = (value) => {
  let listData;
  const needDate = 10;

  if (value.date() === needDate) {
    listData = [
      {
        type: 'warning',
        content: 'This is warning event.',
      },
    ];
  }

  return listData || [];
};

function App() {
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return <Calendar dateCellRender={dateCellRender} />;
}
export default App;
