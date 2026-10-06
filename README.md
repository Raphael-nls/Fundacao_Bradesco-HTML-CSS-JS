<div align="center">

# 📝 Task List — Alternador de Tema

Um site simples com **HTML, CSS e JavaScript** que alterna entre os temas **escuro** e **claro** com um clique.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen?style=for-the-badge)
![Dependências](https://img.shields.io/badge/depend%C3%AAncias-nenhuma-blue?style=for-the-badge)

</div>

---

## 📖 Sobre o projeto

Projeto de prática do curso **Crie um site simples usando HTML, CSS e JavaScript**, da **Fundação Bradesco**.

A página exibe uma lista de tarefas e um botão redondo que troca o tema visual. Não usa frameworks nem bibliotecas, só os três pilares da web:

| Camada | Arquivo | Responsabilidade |
| :----: | ------- | ---------------- |
| 🧱 HTML | [index.html](index.html) | Estrutura e conteúdo da página |
| 🎨 CSS | [main.css](main.css) | Aparência e definição dos temas |
| ⚡ JavaScript | [app.js](app.js) | Comportamento do botão |

---

## ✨ Funcionalidades

- 🌙 Tema **escuro** por padrão (texto verde sobre fundo preto)
- ☀️ Tema **claro** (texto preto sobre fundo branco)
- 🔘 Botão redondo que alterna os temas
- 🏷️ O texto do botão muda conforme o tema (`Dark` / `Light`)
- 🚫 Aviso via `<noscript>` para quem desativou o JavaScript

---

## 🚀 Como executar

Não é preciso instalar nada.

1. Baixe ou clone a pasta do projeto.
2. Abra o arquivo [index.html](index.html) em qualquer navegador (dois cliques).
3. Clique no botão redondo para trocar o tema.

> 💡 Pelo VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração.

---

## 📁 Estrutura de arquivos

```
📦 projeto
 ┣ 📜 index.html   → estrutura da página
 ┣ 🎨 main.css     → estilos e variáveis dos temas
 ┣ ⚡ app.js       → lógica de troca de tema
 ┗ 📘 README.md    → documentação
```

---

## 🧠 Como funciona

### 1️⃣ HTML — a classe do tema

A classe no `<body>` define qual tema está ativo:

```html
<body class="dark-theme">
```

O botão e a lista usam classes (`btn`, `list`) para que o CSS e o JS consigam encontrá-los.

### 2️⃣ CSS — variáveis por tema

Cada tema define **as mesmas variáveis com valores diferentes**. O restante do CSS só usa `var(--nome)`:

```css
.dark-theme  { --bg: var(--black); --frontcolor: var(--green); }
.light-theme { --bg: var(--white); --frontcolor: var(--black); }

body {
    background: var(--bg);
    color: var(--frontcolor);
}
```

Trocar a classe do `body` troca todas as cores de uma vez.

### 3️⃣ JavaScript — alternando as classes

```js
const swither = document.querySelector('.btn');

swither.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }
});
```

- `querySelector('.btn')` encontra o botão.
- `addEventListener('click', ...)` reage ao clique.
- `classList.toggle(...)` liga e desliga uma classe. Alternar as duas ao mesmo tempo garante que o `body` sempre tenha exatamente um tema.
- `classList.contains(...)` verifica o tema atual para escolher o texto do botão.

---

## 🎨 Paleta de cores

| Variável | Cor | Uso |
| -------- | :-: | --- |
| `--green` | `#00ff00` | Texto no tema escuro |
| `--black` | `#000000` | Fundo escuro / texto claro |
| `--white` | `#ffffff` | Fundo claro / botão escuro |

---

## 📚 O que pratiquei

- ✅ Estruturar uma página com HTML semântico
- ✅ Criar variáveis CSS (`:root` e `var()`)
- ✅ Estilizar um botão circular com `border-radius`
- ✅ Selecionar elementos com `querySelector`
- ✅ Tratar eventos com `addEventListener`
- ✅ Manipular classes com `classList`
- ✅ Depurar com o Console do navegador (`F12`)

---

## 🔭 Ideias para evoluir

- [ ] Salvar o tema escolhido no `localStorage`
- [ ] Respeitar a preferência do sistema com `prefers-color-scheme`
- [ ] Permitir adicionar e remover tarefas da lista
- [ ] Substituir o texto do botão por ícones 🌙 / ☀️

---

## 👤 Autor

Feito por **Raphael Oliveira** como parte dos estudos de desenvolvimento web. 🚀
