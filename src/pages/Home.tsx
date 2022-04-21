import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="text-justify leading-loose">
      <section id="home" className="main-bg section">
        <div className="main-content intro-container">
          <h2 className="mb-10 text-4xl">
            Buscamos os seus recicláveis em várias cidades!
          </h2>
          <div className="intro-content">
            <p className="intro-text text-lg">
              A <b>recycrew</b> é uma plataforma de contratação de coletores
              especializados em mais de 25 tipos de materiais recicláveis! Nós
              conectamos doadores de materiais que seriam descartados a
              coletores espalhados por todo do Brasil. Faça sua parte por um
              mundo melhor, recicle!
            </p>
            <div className="intro-iframe">
              <div className="iframe">
                <iframe
                  src="https://www.youtube.com/embed/WdvcKK1eLHc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="white-bg">
        <div className="main-content">
          <h2 className="mb-10 text-4xl">quem somos</h2>
          <p>Somos a futura maior empresa de reciclagem do Brasil.</p>
          <p>
            <b>A recycrew</b> é uma empresa brasileira, prestadora de serviços
            eletrônicos na área de coleta de materiais recicláveis,através de um
            aplicativo de coleta que permite a busca por coletores baseado na
            localização, oferecendo um serviço semelhante ao tradicional
            catador. É conhecido popularmente como serviços de coleta de
            recicláveis.
          </p>
          <p>
            Você já parou para pensar para onde estão sendo enviadas as
            toneladas de lixo potencialmente reciclaveis diariamente no Brasil?
            O cenário realmente não é bom. De acordo com dados do governo
            federal, menos de 20% dos municípios do país contam com a coleta de
            lixo que conta com a separação, entre orgânicos e recicláveis. Para
            se ter uma ideia, dos cerca de 80 milhões de toneladas de lixo
            gerados no Brasil por ano, pouco mais de 3 milhoes de toneladas são
            encaminhados para a reciclagem, sem contar o fato de que esse tipo
            de serviço está concentrado nas regiões sul e sudeste. Uma situação
            muito diferente do que pode ser observado em vários países da
            Europa, onde o índice de coleta seletiva já ultrapassa os 50%.
          </p>
          <p>
            Apesar das toneladas de lixo gerados diariamente pelas grandes
            cidades, o serviço de coleta seletiva promovido por elas, ainda fica
            restrito a um número reduzido de bairros. Ou seja, mais um indicador
            de que o terrível cenário de desperdicio de materiais reciclaveis e
            de poluição vividos no país, possa ser pior do que parece. A
            Recycrew nasce com o compromisso de buscar os recicláveis de porta
            em porta, antes que eles sejam descartados de maneira inadequada, e
            dessa forma além de crontribuir para diminuição da poluição,
            contribuindo também para geração de renda e economia de recursos.
          </p>
          <p>
            Faça sua parte e contribua com o desenvolvimento socioeconômico de
            sua cidade!
          </p>
        </div>
      </section>

      <section id="como-funciona" className="como-funciona main-bg section">
        <div className="main-content como-funciona-content">
          <h2 className="grid-main-heading mb-10 text-4xl">como funciona</h2>
          <p className="grid-description">Entenda como trabalhamos!</p>
          <div className="grid">
            <article>
              <h3>°</h3>
              <p>
                Diante dessa catastrofe ambiental, trazemos o serviço de
                intermediação entre você, que quer descartar seus recicláveis de
                uma maneira adequada, e os coletores de recicláveis espalhados
                por todo o Brasil! Dessa maneira, além de contribuir com a
                diminuição do impacto ao meio ambiente, você pode também
                contribuir que o os cerca de 14 bilhões de reais perdidos com a
                falta de reciclagem todos os anos, possam ter uma destinação
                mais justa.
              </p>
            </article>
            <article>
              <h3>°</h3>
              <p>
                Você só precisa separar o materiais recicláveis que seriam
                descartados no lixo comum, acessar o aplicativo da{' '}
                <b>recycrew</b>, solicitar a coleta, e esperar pelo acionamento
                de um coletor altamente preparado para ir ao seu endereço e
                retirar o material no prazo combinado.
              </p>
            </article>
            <article>
              <h3>°</h3>
              <p>
                Para isso, basta acessar a loja virtual do seu smartphone,
                baixar o aplicativo, fazer o cadastro, informar qual material
                reciclável que deseja doar e solicitar a retirada com um
                coletor. Assim juntos, trabalharemos por um mundo mais
                sustentável.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="galeria" className="white-bg section">
        <div className="main-content">
          <h2 className="grid-main-heading mb-10 text-4xl">galeria</h2>
          <p className="grid-description">Materiais que coletamos:</p>
          <div className="grid">
            <div className="galeria-img">
              <img
                src="https://images.unsplash.com/photo-1554183905-ce6c75652070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="lata de refrigerante amassada"
              />
            </div>
            <div className="galeria-img">
              <img
                src="https://images.pexels.com/photos/1068992/pexels-photo-1068992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="garrafa de vidro"
              />
            </div>
            <div className="galeria-img">
              <img
                src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="um túnel de livros velhos"
              />
            </div>
            <div className="galeria-img">
              <img
                src="https://cdn.pixabay.com/photo/2020/05/04/10/31/the-bottle-5128607_960_720.jpg"
                alt="garrafas de plastico"
              />
            </div>
            <div className="galeria-img">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/23/12/37/files-1614223_960_720.jpg"
                alt="papeis velhos"
              />
            </div>
            <div className="galeria-img">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/10/02/pile-1868894_960_720.jpg"
                alt="pneus"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="precos" className="white-bg section">
        <div className="main-content">
          <h2 className="mb-10 text-4xl">preços</h2>
          <p>
            Essa é a melhor parte! Você promove o desenvolvimento econômico da
            sua cidade, ajuda na diminuição do gasto de energia com a exploração
            de materias primas, mantem a cidade limpa e tudo isso, sai de GRAÇA!
          </p>
          <p>
            Mas você deve estar se perguntando, mas como isso é possível? E quem
            paga os coletores? Quem mantêm essa plataforma funcionando?
          </p>
          <p>
            Pois é, tudo isso é possível apenas porque possuimos um programa de
            patrocínio, que é alvo de centenas de empresas. Para ser uma empresa
            parceira entre em contato pelo email, recycrewprojeto@gmail.com.
          </p>
          <div className="responsive-table">
            <table>
              <caption>tabela de empresas parceiras</caption>
              <tbody>
                <tr>
                  <td>Refrigerante diet</td>
                  <td>Que papelão!</td>
                  <td>Leite</td>
                  <td>Creme de leite Peixoto</td>
                  <td>Microsloft</td>
                </tr>
                <tr>
                  <td>Panettone</td>
                  <td>Papel</td>
                  <td>Cerveja em lata</td>
                  <td>Iso Por não</td>
                  <td>Pear</td>
                </tr>
                <tr>
                  <td>Fralda</td>
                  <td>Cobre de Cobre</td>
                  <td>Embalagem plástica</td>
                  <td>Caixa de Leite</td>
                  <td>Amazonia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="main-bg section">
        <div className="main-content intro-content">
          <div className="contact-form">
            <h1 className="text-4xl">Fale conosco:</h1>
            <fieldset className="form-grid">
              <div className="form-group">
                <label htmlFor="first-name"></label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="sobrenome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message"></label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="digite aqui, sua mensagem"></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit">enviar mensagem</button>
              </div>
            </fieldset>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer white-bg">
        <p>Copyright Recycrew 2022</p>
      </footer>

      <a className="back-to-top" href="#home">
        ➤
      </a>
    </div>
  );
};

export default Home;
