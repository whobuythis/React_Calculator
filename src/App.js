import './App.css';
import {Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BasicCalculator from './components/BasicCalculator';
import InputCalculator from './components/InputCalculator';

function App() {
  const HeaderTitle = "React Calculator";
  const FooterMessage =" © 2023 React Calculator";
  const menu_list = [
    {menu_id: 1, title: "Home", url : "/"},
    {menu_id: 2, title: "Basic Calculator", url : "/basiccalculator", element: <BasicCalculator />},
    {menu_id: 3, title: "Input Calculator", url : "/inputcalculator", element: <InputCalculator />},
    {menu_id: 4, title: "Body Calculator", url : "/bodycalculator"}
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout title={HeaderTitle} footermessage={FooterMessage} menu_list={menu_list} />}>
          {menu_list.map((menu) => (
            <Route key={menu.menu_id} path={menu.url} element={menu.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
