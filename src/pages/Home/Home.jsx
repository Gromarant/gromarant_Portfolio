import RRSS from '../../components/RRSS/RRSS.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Text_block from '../../components/Text_block/Text_block.jsx';
import { isEven } from "../../utils.js";


function Home({translate}) {

  return (
    <>
      <section className='projects'>
        <article className={`project ${ isEven(0) ? 'desc_banner' : 'banner_desc'}`}>
          <Banner
            img={translate.fullPokeApp_title}
            btns={translate.fullPokeApp_links}
            index={0}
          />
          <Text_block title={translate.fullPokeApp_title} desc={translate.fullPokeApp_desc} func={translate.fullPokeApp_functionalities} authors={translate.fullPokeApp_copyRight}/>
        </article>
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(1) ? 'desc_banner' : 'banner_desc'}`}>
          <Banner
            img={translate.gromaSnake_title}
            btns={translate.gromaSnake_links}
            index={1}
          />
          <Text_block title={translate.gromaSnake_title} desc={translate.gromaSnake_desc} func={translate.gromaSnake_functionalities} authors={translate.gromaSnake_copyRight}/>
        </article>      
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(2) ? 'desc_banner' : 'banner_desc'}`}>
          <Banner
            img={translate.funFace_title}
            btns={translate.funFace_links}
            index={2}
          />
          <Text_block title={translate.funFace_title} desc={translate.funFace_desc} func={translate.funFace_functionalities} authors={translate.funFace_copyRight}/>
        </article>    
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>

        <article className={`project ${ isEven(3) ? 'desc_banner' : 'banner_desc'}`}>
          <Banner
            img={translate.robopage_title}
            btns={translate.robopage_links}
            index={3}
          />
          <Text_block title={translate.robopage_title} desc={translate.robopage_desc} func={translate.robopage_functionalities} authors={translate.robopage_copyRight}/>
        </article>
        <RRSS rrss={translate.rrss}/>
        <span className='divisor'></span>
      </section>
    </>
  )
}

export default Home;