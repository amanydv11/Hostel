import React from 'react'
import {useTranslation} from 'react-i18next'
const languages =[
    {code:"en", lang:"English"},
    {code:"hi",lang:"Hindi"},

];

const LanguageSelect = () => {
    const changeLanguage=(lng)=>{
i18n.changeLanguage(lng);
    }
  const {i18n}=  useTranslation()
  return (
    <div className=''>
      {
        languages.map((lng)=>{
            return <button
            className={lng.code===i18n.language? "selected":""}
            key={lng.code} onClick={()=>changeLanguage(lng.code)}>{lng.lang}</button>
        })
      }
    </div>
  )
}

export default LanguageSelect
