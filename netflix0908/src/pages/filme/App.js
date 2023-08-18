import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  const[ filme,setFilme] = useState('');
  const[ y,setY] = useState(1);
  const[ lista,setLista] = useState([]);


  async function pesq (){
    let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme ;
    let x= await axios.get(url);
    setLista(x.data.Search)


    


  }

  useEffect (() => {
    pesq (`http://www.omdbapi.com/?apikey=357573e6&s=${filme}`);

  })[filme]



  async function plus (){
      
    let w= y +1
    setY(w)
    let url= 'http://www.omdbapi.com/?apikey=357573e6&s=' + filme + '&page=' + w;
    let x= await axios.get(url);
    setLista(x.data.Search)
  }

 



  return (
    <div className="App">

      <div className='s-0'>
                <div className='cabecalho'>

                    <div className='c-1'>
                      <img src='/assets/images/logo.png' alt='' />
                      <h1> Portifolio.me</h1>
                      <p> Início</p>
                      <p> Séries</p>
                      <p> Filmes</p>
                      <p> Bombando</p>
                      <p> Minha lista</p>
                    </div>


                    <div className='c-2'>

                      <div className='c-2-input'>
                       <input type='text' placeholder='Pesquise pelo Título'value={filme} onChange={e => setFilme(e.target.value)}/> <button onClick={pesq}><img src='/assets/images/icon-buscar.png' alt='' /></button>
                     </div>

                      <h5>Bruno fofo</h5>
                     <img src='/assets/images/sino.png' alt=''/>
                     <img src='/assets/images/icon.png' alt=''/>
                      <img src='/assets/images/seta.png' alt='' id='seta'/>

                    </div>

                </div>


      <div className='s1'>


      <div className='s-1-text'>
        <h1> Friends</h1>
        <p> Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentem vingar em Nova York  </p>
        <button>Assistir</button>
      </div>

      
      </div>


      <div className='s1-pesq'>
        <p className='resultado'>Resultado da Busca</p>
      <div className='scroll'>

            {lista.map(item =>
            <tr className='tb-corp-1'>
            <td className='tb-corp'> <img src={item.Poster} alt='' className='img'/></td>
            
            </tr>
            
            )}
            <div> <button onClick={plus} className='plus'> <img src='/assets/images/plus.png' alt=''/> </button></div>
            
        </div>

      </div>
      
      
      
      




      

      </div>






    </div>
  );
}

export default App;
