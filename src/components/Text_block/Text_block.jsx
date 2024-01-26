import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { lang_en } from '../../utils';

function Text_block({title, desc, func=null, authors=null, academic_title=null, date=null, academy=null, fileLink=null}) {
  const { lang } = useContext(LangContext);
  const hasFunctionalities = func !== null;
  const hasAuthors = authors !== null;
  const hasAcademic_title = academic_title !== null;
  const hasDate = date !== null;
  const hasAcademy = academy !== null;
  const hasFileLink = fileLink !== null;

  return(
    <>
      <article>
        <h1>{title}</h1>
        <p>{desc}</p>
        { hasFunctionalities && hasAuthors ? 
          <section>
            { lang_en(lang) ? <h2>Functionalities:</h2> : <h2>Functionalidades:</h2>}
            <ul>
              { func?.map((functionality, index) => <li key={`${title}_functionalitie_${index}`}>{functionality}</li>)}
            </ul>
            { lang_en(lang) ? <p>Develop by: </p> : <p>Desarrollado por: </p>}
            { authors?.map((author, index) => <p key={`${title}_${author}_${index}`}>{author}</p>)}
          </section>
          : null
        }
        { hasAcademic_title && hasDate && hasAcademy && hasFileLink ?
          <section>
            <article>
              <h2>{academic_title} | {date}</h2>
              <p>{academy}</p>
            </article>
            <a href={fileLink} target='_blank'><button>{`${lang_en(lang) ? 'See link' : 'abrir link'}`}</button></a>
          </section>
          : null
        }
      </article>
    </>
  )
}

export default Text_block;