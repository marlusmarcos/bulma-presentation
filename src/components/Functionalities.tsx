import React from 'react';

const Functionalities: React.FC = () => {
  return (
    <div className="content container">
      <h2 className="title is-2 has-text-primary">Funcionalidades do Bulma</h2>
      <p className="has-text-white is-size-4 has-text-justified">
        Bulma é rico em funcionalidades, fornecendo uma gama completa de componentes
        e elementos para ajudar na construção de interfaces web elegantes e eficientes.
      </p>
      <p className="has-text-white is-size-4 has-text-justified">
        Com Bulma, você pode facilmente lidar com tarefas comuns como criar um sistema de grid,
        projetar botões estilizados, formulários completos, notificações, barras de navegação e muito mais.
      </p>
      <h3 className="title is-3 has-text-primary">Exemplo de Cartão:</h3>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Título do Cartão</p>
        </header>
        <div className="card-content">
          <div className="content">
            Este é um exemplo de um cartão Bulma. Cartões são uma ótima maneira de exibir informações
            de forma concisa e atraente. Além disso, eles são totalmente personalizáveis com classes Bulma.
          </div>
        </div>
      </div>
      <h3 className="title is-3 has-text-primary">Exemplo de Notificação:</h3>
      <div className="notification is-success">
        Esta é uma notificação de sucesso. Bulma fornece classes para diferentes tipos de notificações.
      </div>
      <h3 className="title is-3 has-text-primary">Exemplo de Mensagem:</h3>
      <article className="message">
        <div className="message-header">
          <p>temos aqui o título</p>
          <button className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          E aqui nós temos o corpo de uma mensagem, por exemplo
        </div>
      </article>

      <h3 className="title is-3 has-text-primary">Exemplo de Menus:</h3>
      <div>
      <aside class="menu">
        <p class="menu-label">
          Disciplinas
        </p>
        <ul class="menu-list">
          <li><a>FW JS</a></li>
          <li><a>FMC2</a></li>
        </ul>
        <p class="menu-label">
          IMD
        </p>
        <ul class="menu-list">
          <li><a>Prédio</a></li>
          <li>
            <a class="is-active">Projetos</a>
            <ul>
              <li><a>Smart metrópole</a></li>
              <li><a>SUEDS</a></li>
              <li><a>LABS</a></li>
            </ul>
          </li>
          <li><a>Contatos</a></li>
          <li><a>Professores</a></li>
          <li><a>Servidores</a></li>
        </ul>
        
      </aside>
      </div>
     
      
     
      



    </div>

  



  );
};

export default Functionalities;
