import { color } from 'framer-motion'
import Main from './Main'
// import TempBlock from '../components/block'
import styles from './styles/Pages.module.scss'

import logo1 from '../assets/cinema/c1.jpg'
import logo2 from '../assets/cinema/c2.jpg'
import logo3 from '../assets/cinema/c3.jpg'

import img1 from '../assets/cinema/11.png'
import img2 from '../assets/cinema/12.png'
import img3 from '../assets/cinema/13.png'
import { LogoBlock } from '../components/image'



export default function App() {
  return (
    <div className={styles.app}>
      <div style={{ maxWidth: '1124px', margin: '0 auto' }}>
        {/* block 1 */}
        <div
          style={{
            margin: '0 auto',
            padding: '96px 16px',
            textShadow: '1px 2px grey',
          }}
        >
          <h1
            style={{ padding: '24px 0', fontSize: '50px', lineHeight: '120%' }}
          >
            Забудьте о реальности и погрузитесь <br /> в мир кино
          </h1>
          <div
            style={{
              padding: '24px 0 100px 0',
              fontSize: '24px',
              lineHeight: '120%',
            }}
          >
            Мы следим за тенденциями и новинками в индустрии, чтобы ты мог быть
            в курсе самых актуальных событий в мире кино. Если ты ищешь идеи для
            вечернего просмотра или хочешь узнать больше о твоих любимых актерах
            и режиссерах, то тебе.
          </div>

          <button
            style={{
              background: 'orange',
              padding: '18px 74px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '24px',
              color: 'white',
                          
              
            }}
            
            
          >
            <a
              href="#part1"
              style={{
                scrollBehavior: 'smooth',
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Новости Кино
            </a>
          </button>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '64px',
            }}
          >
            <a href="#part1" style={{ scrollBehavior: 'smooth' }}>
              <div style={{ margin: '0 auto' }} className={styles.animation}>
                <ion-icon
                  name="chevron-down-outline"
                  style={{ fontSize: '64px', color: 'white' }}
                  background="white"
                ></ion-icon>
              </div>
            </a>
          </div>
        </div>

        {/* block 2 */}

        <div
          style={{
            margin: '0 auto',
            padding: '12px 16px 0 16px ',
            textShadow: '1px 2px grey',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.07)',
            
          }}
          id="part1"
        >
          {[{text1:" Сайт, посвященный обзорам кино", text2:" Здесь вы найдете самые интересные и актуальные обзоры на лучшие фильмы всех жанров", text3:"Наши обзоры помогут вам определиться, какой фильм выбрать на  вечер, что посмотреть на выходных, какую премьеру не пропустить. Мы анализируем не только сюжеты и актерские игры, но и множество  других факторов, таких как музыка, операторская работа, визуальные эффекты и многое другое."},
          {text1:" Новинки кино", logo1:img1, logo2:img2, logo3:img3},
          {text1:" Истории актеров", text2:" Тайны закулисья или что происходит за кадром.", text3:"Самые интересные истории о которых почти никто не знает. Вы сможете узнать много интересных подробностей не только о фильме, но другие интересные подробности"}].map((item)=>{
            return (
<div style={{ flexBasis: '31%' }}>
            <h1
              style={{
                padding: '24px 0',
                fontSize: '42px',
                lineHeight: '130%',
                height: '120px',
                display: 'flex',
                justifyContent:'center',
                alignItems:'flex-start',
                textAlign: 'center'
              }}
            >
              {item.text1}
            </h1>
            <div
              style={{
                padding: '24px 0 100px 0',
                fontSize: '18px',
                lineHeight: '130%',
                height: '120px'
              }}
            >
              {item?.text2 || <LogoBlock logo={item.logo1}/>}
            </div>
            <div
              style={{
                padding: '24px 0 20px 0',
                fontSize: '20px',
                lineHeight: '130%',
              }}
            >
              {item?.text3 || <LogoBlock logo={item.logo2}/>}
            </div>
          </div>
            )
          })}  
          
          {/* block - 2   button + arrow */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: ' 24px 0 84px 0',
              }}
            >
              <a href="#part2" style={{ scrollBehavior: 'smooth' }}>
                <div style={{ margin: '0 auto' }} className={styles.animation}>
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ fontSize: '64px', color: 'white' }}
                    background="white"
                  ></ion-icon>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Block-3 */}
        <div
          id="part2"
          style={{
            padding: ' 0 24px',
            background: 'rgba(255, 255, 255, 0.07)',
          }}
        >
          <h1
            style={{
              padding: '24px 0',
              fontSize: '42px',
              lineHeight: '130%',
              color: '#f4bc30',
              textShadow: '1px 0 yellow',
            }}
          >
            Главные кинопремьеры 2023 года: <br /> что ждать в кино
          </h1>
          <div
            style={{
              padding: '24px 0 100px 0',
              fontSize: '24px',
              fontWeight: 500,
              lineHeight: '130%',
            }}
          >
            Новый год обещает быть насыщенным в кинематографе, и мы с
            нетерпением ждем выхода нескольких ожидаемых фильмов. В 2023 году
            зрители смогут насладиться продолжениями любимых франшиз и новыми
            увлекательными историями.
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {[
              {
                text1: 'Аватар 3',
                text2:
                  'Продолжение блокбастера 2009 года от режиссера Джеймса Кэмерона.',
                img: logo1,
              },
              {
                text1: 'Мстители: Война за Землю',
                text2:
                  'Продолжение истории о супергероях Marvel, которые снова вынуждены объединиться, чтобы спасти мир. На этот раз команда Мстителей столкнется с новой угрозой, которая может погубить всю человеческую цивилизацию.',
                img: logo2,
              },
              {
                text1: 'Бэтмен: Начало',
                text2:
                  'Новый фильм о легендарном супергерое, который расскажет о его начальных годах и первых приключениях в качестве мстителя Готэма.',
                img: logo3,
              },
            ].map((item) => (
              <div
                key={item.text1}
                style={{
                  flexBasis: '33%',
                  padding: "16px 16px",
                  display: 'flex',
                  flexDirection: 'column',
                  
                  position: 'relative',
                  borderRadius: '16px',
                  height: '500px',
                }}
              >
                <h4
                  style={{
                    padding: '12px 0',
                    fontSize: '30px',
                    lineHeight: '130%',
                    color: 'white',
                    textShadow: '1px 0 yellow',
                    zIndex: 1,
                    width: '80%',
                    height: "64px"
                  }}
                >
                  {item.text1}
                </h4>
                <div
                  style={{
                    width: '90%',
                    padding: '0',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '140%',
                    zIndex: 1,
                    textShadow: '0 1px white',
                   
                  }}
                >
                  {item.text2}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: ' -12px',
                    zIndex: 0,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    opacity: 0.7,
                  }}
                >
                  <img src={item.img} width={'340px'} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Main />
        {/* <TempBlock /> */}
      </div>
    </div>
  )
}
