import NavLive from './components/NavLive'
import React, { useState } from 'react'
import logoImg from './assets/logo.png'
import imgHeader from './assets/header.jpg'
import imgOne from './assets/imgNewOne.jpg'
import imgTwo from './assets/imgNewTwo.jpg'
import imgHeaderTwo from './assets/headerTwo.jpg'
// import start from './assets/svg/start.svg'


const App = () => {
  const [classNew, setClassNew] = useState(false)

  window.onscroll = () => {
    const scrollY = window.scrollY;
    // const scrollString = '96.2406005859375';


    if(scrollY > '110.2406005859375'){
      setClassNew(true)
      return
    }else{
      setClassNew(false)
    }

  };

  return (
    <>
      <nav>
        <img src={imgHeader} alt='imgHeader' width='100%' className='absolute inset-0 -z-10'/>
        <div className='container mx-auto pb-2'>

          <div className='w-full h-16 mb-16'>
            <div className= {`flex justify-between items-center z-20  ${classNew? 'fixed left-0 bg-black -top-24 text-white translate-y-24 transition-all':' text-white '} w-full`}>
              <div className='flex items-center pt-1'>
                <img src={logoImg} width='100px' height='100px' alt='img' className='hover:rotate-180 rounded-full transition-transform'/>
                <span className='text-xl font-bold pb-1 font-mono'>Básquetbol</span>
              </div>
              

              <div className='flex items-center gap-10'>
                <div>
                  <input type='text' placeholder='hola mundo' className='rounded py-1 px-3 text-sm text-black' />
                </div>
                <ul className={`flex items-center text-sm gap-10 px-5`}>
                  <li>
                    <a href='/'>Inicio</a>
                  </li>
                  <li>
                    <a href='/'>Ligas</a>
                  </li>
                  <li>
                    <a href='/'>Historia</a>
                  </li>
                  <li>
                    <a href='/'>Premios</a>
                  </li>
                  <li>
                    <a href='/'>+</a>
                  </li>
                </ul>
              </div>
              <NavLive/>
            </div>
          </div>

          <article className='flex h-screen relative z-10 gap-10 rounded'>
           
            <section className='flex flex-col w-80 justify-between h-full overflow-hidden shadow-md bg-white p-2'>
              <img src={imgOne} width='100%' alt='imgNews' className='object-cover mx-auto rounded'/>
              <p>texto prueba</p>
              <img src={imgOne} width='100%' alt='imgNews' className='object-cover mx-auto rounded'/>
              <p>texto prueba</p>
              <img src={imgOne} width='100%' alt='imgNews' className='object-cover mx-auto rounded'/>
              <p>texto prueba</p>

              {/* <div className='flex flex-col bg-white justify-between w-full h-full p-2 text-center'>
                <div className='w-full relative'>
                  <h1 className='text-xl underline pt-1'>
                    Basquet ball para todos
                  </h1>

                  <time datatype='18-09-2022' className=' right-0 top-0 text-xs font-bold'>18/ sep/ 2022</time>
                  <span className=' left-0 top-0'>
                    <img src={start} alt='start' className='object-cover' />
                  </span>
                </div>

                <p className='px-1 font-light text-justify'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                  Armonizando también los diversos niveles 
                  de discapacidad de los deportistas.
                </p>

                <div className='w-full flex items-center justify-between'>
                  <p>
                    <a href='/' >#Basquetball</a>,
                    <a href='/' >#sillas</a>,
                    <a href='/' >#BalonMano</a>
                  </p>
                  <div>
                      ❤️
                      👍
                  </div>
                </div>

                <a href='/' className='hover:underline hover:text-blue-600 transition-all text-left'>Leer Mas</a>
              </div> */}
            </section>

            <section className='w-1/2 h-full flex flex-col gap-10 overflow-y-scroll p-2 bg-white'>

              <section className='w-full h-80 flex hover:shadow-md rounded'>
                <img src={imgHeaderTwo} width='50%' alt='imgNews' className='object-cover h-full rounded'/>
                <div className='flex flex-col justify-between p-3 w-full h-full bg-zinc-100 text-center'>
                    <h1 className='text-xl'>
                      Titulo News
                    </h1>
                    <p className='px-1 font-light text-justify'>
                      El baloncesto femenino es de los pocos deportes
                      que se desarrolló casi al mismo tiempo que el masculino,
                      fueron adaptadas a las características motrices de las primeras
                      jugadoras y evolucionaron por separado hasta el último tercio del siglo XX.
                      <br/>
                      <br/>
                      El baloncesto femenino es de los pocos deportes
                      que se desarrolló casi al mismo tiempo que el masculino,

                    </p>
                    <a href='/' className='hover:text-blue-600 hover:underline transition-all text-left'>Leer Mas</a>
                </div>
              </section>

              <section className='w-full h-full flex bg-zinc-100  hover:shadow-md'>
                <img src={imgTwo} alt='imgNews' className='object-cover h-full w-1/2'/>
                <div className='flex flex-col justify-evenly p-3 w-full h-full text-center'>
                    <h1 className='text-xl'>
                      Titulo News
                    </h1>
                    <p className='px-1 font-light text-justify'>
                      El baloncesto femenino es de los pocos deportes
                      que se desarrolló casi al mismo tiempo que el masculino,
                      fueron adaptadas a las características motrices de las primeras
                      jugadoras y evolucionaron por separado hasta el último tercio del siglo XX.
                    </p>
                    <a href='/' className='hover:text-blue-600 hover:underline transition-all text-left'>Leer Mas</a>
                </div>
              </section>

              <section className='w-full h-full flex bg-zinc-100  hover:shadow-md'>
                <img src={imgTwo} alt='imgNews' className='object-cover w-1/2'/>
                <div className='flex flex-col justify-evenly p-3 w-full h-full text-center'>
                    <h1 className='text-xl'>
                      Titulo News
                    </h1>
                    <p className='px-1 font-light text-justify'>
                      El baloncesto femenino es de los pocos deportes
                      que se desarrolló casi al mismo tiempo que el masculino,
                      fueron adaptadas a las características motrices de las primeras
                      jugadoras y evolucionaron por separado hasta el último tercio del siglo XX.
                    </p>
                    <a href='/' className='hover:text-blue-600 hover:underline transition-all text-left'>Leer Mas</a>
                </div>
              </section>

            </section>

            <section className='w-1/3 h-full bg-white'>

            </section>
          </article>

          {/* <article className='flex justify-between relative z-1 mt-2 text-white text-xs pb-20 text-center'>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

            <section className=' w-48 bg-black rounded overflow-hidden'>
              <img src={imgTwo} width='100%' alt='imgNews' className='h-1/2 object-cover'/>
              <div>
                <p className='px-1 font-light'>
                  El básquetbol en silla de ruedas,
                  básicamente para personas con discapacidad física. 
                  Se han adaptado las reglas del baloncesto en las 
                  particularidades de las sillas de ruedas.
                </p>
              </div>
            </section>

          </article> */}

        </div>
      </nav>
      {/* <div className='h-full bg-black'>
        <div className='container mx-auto w-96 p-3 h-full'>
          <iframe className='w-full aspect-video' title='veBn379Jk4A' src={`https://www.youtube.com/watch?v=veBn379Jk4A`}></iframe>
        </div>
      </div> */}
    </>
    
  )
}

export default App
