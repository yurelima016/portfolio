![Image](https://github.com/user-attachments/assets/0ec5572c-267f-4cc2-983d-5b186636c6a3)

![yure.dev](https://img.shields.io/badge/status-em_desenvolvimento-yellow?style=for-the-badge)

Este é o repositório do meu portfólio pessoal, **yure.dev**. Uma *single-page application* (SPA) moderna e interativa desenvolvida para apresentar minhas habilidades, projetos e minha jornada como desenvolvedor Front-End.

O site foi construído do zero, com foco em interfaces eficientes, responsivas e visualmente consistentes.

**Visite a versão (em desenvolvimento):** https://yure.dev.br

---

## 📬 Vamos nos Conectar

- **LinkedIn:** www.linkedin.com/in/yurelima016
- **Email:** yurelimasouza@gmail.com

---

## 🚀 Tecnologias e Metodologias

Este projeto foi construído utilizando as principais tecnologias e padrões do Front-End:

- **HTML5:** Para a estrutura semântica do site.
- **CSS3:** Para toda a estilização, utilizando:
  - **Metodologia BEM:** Nomenclatura de classes (Bloco, Elemento, Modificador) para um CSS organizado e escalável.
  - **Flexbox** e **CSS Grid:** Para layouts complexos.
  - **Variáveis CSS (Custom Properties):** Para um tema dinâmico e fácil manutenção de cores e fontes.
  - **`clip-path`:** Para a criação dos tags de Soft Skills.
  - **Transições (`transition`):** Para animações suaves na troca de tema e interações.
- **JavaScript (ES6+):** Para toda a interatividade e lógica do site.
  - **Manipulação do DOM:** Para atualizar dinamicamente todo o conteúdo.
  - **API `fetch` e `async/await`:** Para comunicação assíncrona com o Formspree.
  - **`localStorage`:** Para salvar as preferências de tema (Dark/Light) e idioma (PT/EN) do usuário.
  - **`navigator.language`:** Para detectar o idioma padrão do navegador do usuário.
  - **`data-attributes`:** Utilizados para vincular o DOM ao JavaScript de forma limpa (ex: `data-translate` e `data-skill`).
- **Formspree:** Para o envio de formulários de contato sem a necessidade de um back-end.

---

## ✨ Funcionalidades Implementadas

O site já conta com as seguintes seções interativas e funcionais:

### 1. Sistema de Tradução (i18n)

- **Internacionalização Completa:** O site alterna dinamicamente entre **Português (PT)** e **Inglês (EN)**.
- **Detecção Automática:** Identifica o idioma do navegador (`navigator.language`) na primeira visita.
- **Persistência de Dados:** A preferência de idioma é salva no `localStorage` do usuário.
- **Atualização Sem Recarregar:** O conteúdo é traduzido instantaneamente, incluindo `placeholders` de formulários e texto de botões.

### 2. Tema Dinâmico (Dark/Light)

- **Implementação Completa:** Lógica para alternar entre os temas claro e escuro.
- **Detecção Automática:** Verifica a preferência do sistema (`prefers-color-scheme`) na primeira visita.
- **Ícone Dinâmico:** O ícone de sol/lua é alterado via JavaScript.
- **Salvo no Navegador:** A preferência de tema do usuário é salva usando `localStorage`.
- **CSS Otimizado:** Utiliza `data-theme` no `<body>` para redefinir variáveis CSS, garantindo uma troca de tema limpa e com transições suaves.

### 3. Seção "Skills"

- **Animação Dinâmica:** Uma exibição interativa das minhas _Hard Skills_.
- **Carrossel Automático:** As skills são exibidas (`setTimeout`) uma após a outra, preenchendo uma barra de progresso.
- **Conteúdo Dinâmico:** O logo da tecnologia, o título e o nível (estrelas) são atualizados dinamicamente via JavaScript.
- **Controle do Usuário:** O usuário pode clicar em qualquer skill para "pular" a animação e ver os detalhes imediatamente.
- **Soft Skills:** Exibição das minhas habilidades interpessoais.

### 4. Seção de Contato

- **Formulário Assíncrono:** Um formulário de contato funcional que envia mensagens via **Formspree**.
- **Envio sem Recarregar:** Utiliza `fetch` e `event.preventDefault()` para enviar os dados em segundo plano, sem recarregar a página.
- **Feedback Visual:** O botão de envio atualiza seu texto para "Enviando...", "Enviado!" ou "Erro", respeitando o idioma selecionado.
- **Links Diretos:** Botões de atalho para LinkedIn e GitHub.

### 5. Seção "About Me"

- **Cálculo de Idade:** A minha idade é calculada e exibida automaticamente em tempo real usando JavaScript.

---

## 🚧 Próximos Passos (Roadmap)

Este projeto ainda está crescendo! As próximas seções a serem implementadas são:

- **[ ] Seção de Projetos:** Preencher a seção (`id="projects"`) com um carrossel ou galeria para exibir os projetos em que trabalhei.
- **[ ] Responsividade:** Garantir que o site seja perfeitamente visível em dispositivos móveis (tablets e celulares).

---

## 🛠️ Como rodar o projeto localmente

Você pode clonar este repositório e abrir o `index.html` diretamente no seu navegador.

```bash
# Clone o repositório
git clone [https://github.com/yurelima016/portfolio.git](https://github.com/yurelima016/portfolio.git)

# Acesse o diretório
cd portfolio

# Abra o index.html no seu navegador
