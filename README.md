![Capa do Portfólio](https://github.com/user-attachments/assets/0ec5572c-267f-4cc2-983d-5b186636c6a3)

![Status do Projeto](https://img.shields.io/badge/status-em_desenvolvimento-yellow?style=for-the-badge)

Este é o repositório do meu portfólio pessoal, **yure.dev**. Uma _single-page application_ (SPA) moderna e interativa desenvolvida para apresentar minhas habilidades, projetos e minha jornada como desenvolvedor Front-End.

O site foi construído do zero, com foco em interfaces eficientes, responsivas e visualmente consistentes.

**Visite a versão (em desenvolvimento):** https://yure.dev.br

---

## 📬 Vamos nos Conectar

- **LinkedIn:** [www.linkedin.com/in/yurelima016](https://www.linkedin.com/in/yurelima016)
- **Email:** [yurelimasouza@gmail.com](mailto:yurelimasouza@gmail.com)

---

## 🚀 Tecnologias e Metodologias

Este projeto foi construído utilizando as principais tecnologias e padrões do Front-End moderno:

- **HTML5:** Para a estrutura semântica do site.
- **CSS3:** Para toda a estilização, utilizando:
  - **Responsividade:** Layout adaptável para desktops, tablets e celulares usando _Media Queries_.
  - **Metodologia BEM:** Nomenclatura de classes (Bloco, Elemento, Modificador) para um CSS organizado e escalável.
  - **Flexbox** e **CSS Grid:** Para layouts complexos e alinhamentos precisos.
  - **Variáveis CSS (Custom Properties):** Para um tema dinâmico e fácil manutenção de cores e fontes.
  - **`clip-path`:** Para a criação estilizada das tags de Soft Skills.
  - **Transições (`transition`):** Para animações suaves na troca de tema e interações.
- **JavaScript (ES6+):** Para toda a interatividade e lógica do site.
  - **Manipulação do DOM:** Para atualizar dinamicamente o conteúdo, incluindo o menu mobile.
  - **API `fetch` e `async/await`:** Para comunicação assíncrona com o Formspree.
  - **`localStorage`:** Para salvar as preferências de tema (Dark/Light) e idioma (PT/EN) do usuário.
  - **`navigator.language`:** Para detectar o idioma padrão do navegador do usuário.
  - **`data-attributes`:** Utilizados para vincular o DOM ao JavaScript de forma limpa (ex: `data-translate` e `data-skill`).
- **Formspree:** Para o envio de formulários de contato sem a necessidade de um back-end.

---

## ⚡ Funcionalidades Implementadas

O site já conta com as seguintes seções interativas e funcionais:

### 1. Design Responsivo (Mobile & Desktop)

- **Adaptação Completa:** O layout se ajusta perfeitamente a diferentes tamanhos de tela.
- **Menu Mobile:** Navegação otimizada para celulares com um menu "gaveta" (off-canvas) interativo.
- **Layout Fluido:** Uso de unidades relativas (`%`, `vh`, `vw`, `rem`) e funções CSS modernas (`clamp()`) para tipografia e espaçamentos dinâmicos.

### 2. Sistema de Tradução (i18n)

- **Internacionalização Completa:** O site alterna dinamicamente entre **Português (PT)** e **Inglês (EN)**.
- **Detecção Automática:** Identifica o idioma do navegador na primeira visita.
- **Persistência de Dados:** A preferência de idioma é salva no `localStorage`.
- **Atualização Sem Recarregar:** Tradução instantânea de textos, `placeholders` e botões.

### 3. Tema Dinâmico (Dark/Light)

- **Alternância de Temas:** Lógica completa para troca entre claro e escuro.
- **Detecção de Preferência:** Verifica a configuração do sistema operacional (`prefers-color-scheme`).
- **Persistência:** Salva a escolha do usuário no navegador.
- **Ícone Dinâmico:** O botão de tema alterna entre sol e lua.

### 4. Seção "Skills" Interativa

- **Animação Automática:** Carrossel que percorre as _Hard Skills_ com barras de progresso.
- **Conteúdo Dinâmico:** Atualização em tempo real de logos, títulos e nível de habilidade (estrelas).
- **Interação do Usuário:** Clique para selecionar e visualizar detalhes de uma skill específica imediatamente.

### 5. Formulário de Contato Funcional

- **Envio Assíncrono:** Utiliza `fetch` para enviar mensagens via **Formspree** sem recarregar a página.
- **Feedback Visual:** Botão de envio com estados de "Enviando...", "Sucesso" ou "Erro", traduzidos automaticamente.

### 6. Seção "About Me"

- **Idade Dinâmica:** Cálculo automático da idade com base na data de nascimento.

---

## 🚧 Próximos Passos (Roadmap)

Este projeto continua evoluindo! As próximas funcionalidades planejadas são:

- **[ ] Seção de Projetos:** Implementação de uma galeria ou carrossel na seção `#projects` para exibir trabalhos realizados.
- **[ ] Melhorias de Acessibilidade (a11y):** Refinamento da navegação por teclado e leitores de tela.
- **[ ] Testes de Performance:** Otimização do carregamento de imagens e scripts.

---

## 🛠️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/yurelima016/portfolio.git](https://github.com/yurelima016/portfolio.git)
   ```
2. Acesse o diretório do projeto:

   ```bash
   cd portfolio
   ```

3. Abra o arquivo index.html diretamente no seu navegador de preferência.
