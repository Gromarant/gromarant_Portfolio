import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { LangContext } from "../../../context/LangContext.jsx";
import Home from "../../../pages/Home/Home.jsx";
import About_me from "../../../pages/About_me/About_me.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import English from "../../../data/en.json";
import Spanish from "../../../data/es.json";
import { lang_en } from '../../../utils.js';
import Go_up_btn from '../../Go_up_btn/Go_up_btn.jsx';
import { scrollUp } from "../../../utils.js";
import RRSS from '../../RRSS/RRSS.jsx';

function Main() {
  const [ lang, setLang ] = useState('en');

  useEffect(() => { 
    const storage = JSON.parse(localStorage.getItem('lang'));
    (storage) ? setLang(JSON.parse(localStorage.getItem('lang'))) : lang
  }, [lang]);

  return(
    <>
      <LangContext.Provider value={{lang, setLang}}>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home translate={lang_en(lang) ? English : Spanish}/>}/>
          <Route path='/about_me' element={<About_me translate={lang_en(lang) ? English : Spanish}/>}/>
        </Routes>
        <Go_up_btn onClick={scrollUp} title={`${lang === 'en' ? 'scroll up' : 'Subir' }`}/>
        <RRSS classProp='rrss contact_icons' rrss={lang_en(lang) ? English.rrss : Spanish.rrss} footer={lang_en(lang) ? English.mailTo : Spanish.mailTo}/>
        <Footer translate={lang_en(lang) ? English : Spanish} />
      </LangContext.Provider>
    </>
  )
}

export default Main;