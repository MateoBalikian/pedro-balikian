# Setup do PC do Pedro

Checklist para deixar a máquina do Pedro pronta para editar o site conversando
com o Claude. Feito uma vez só — depois ele só abre o Claude e pede as coisas.

Quem executa: **Mateo**. O Pedro não precisa fazer nada disso.

## 1. Programas necessários

| Programa | Versão mínima | Para quê |
| --- | --- | --- |
| Node.js | 22.12 | rodar o site localmente |
| Git | qualquer | versionamento |
| GitHub CLI (`gh`) | qualquer | abrir os PRs |
| Claude Code | atual | é com quem o Pedro conversa |

Windows:

```
winget install OpenJS.NodeJS.LTS Git.Git GitHub.cli
```

macOS:

```
brew install node git gh
```

Conferir depois: `node -v` (>= 22.12), `git --version`, `gh --version`.

## 2. Identidade do git como Pedro

```
git config --global user.name "Pedro Balikian"
git config --global user.email "<email-da-conta-balikianpedro-cloud>"
```

O email **tem que ser exatamente o email cadastrado na conta do GitHub dele**.
A protecao do `master` exige aprovacao extra para commits que o GitHub nao
consegue associar a uma conta — email errado faz todo PR dele emperrar.

## 3. Login no GitHub como Pedro

```
gh auth login
```

Escolher: GitHub.com → HTTPS → autenticar no navegador, logado na conta
`balikianpedro-cloud`.

Conferir: `gh auth status` deve mostrar `balikianpedro-cloud`.

## 4. Clonar o repositório

**Tem que ser `git clone`.** Baixar o ZIP pelo botao "Download ZIP" do GitHub
nao funciona: a pasta vem sem conexao com o repositorio, entao nao da pra criar
branch nem abrir PR. Se ja existir uma pasta baixada por ZIP na maquina, apague.

```
git clone https://github.com/MateoBalikian/pedro-balikian.git
cd pedro-balikian
npm install
```

## 5. Conferir se ficou tudo certo

Rodar os quatro, dentro da pasta `pedro-balikian`:

```
git remote -v
```
Tem que mostrar `github.com/MateoBalikian/pedro-balikian`. Se der erro dizendo
que nao e um repositorio, a pasta veio de ZIP — volte ao passo 4.

```
node -v
```
Tem que ser 22.12 ou maior.

```
git log --oneline -1
```
Tem que mostrar um commit. Confirma que o historico veio junto.

```
head -1 CLAUDE.md
```
Tem que aparecer `# Site do Pedro Balikian`. Se o arquivo estiver vazio ou so
com a palavra `AGENTS.md`, o Claude vai comecar sem nenhuma instrucao e o fluxo
de PR nao vai ser seguido — nesse caso me avise.

## 6. Testar o site

```
npm run dev
```

Abrir `http://localhost:4321` — o site deve aparecer. `Ctrl+C` encerra.

## 7. Claude Code

Instalar, fazer login na conta Claude e abrir o Claude **dentro da pasta
`pedro-balikian`**. Ele lê o `CLAUDE.md` sozinho e já começa sabendo o fluxo
(branch → mostrar no localhost → aprovação do Pedro → PR → Mateo publica).

## 8. Atalho pro Pedro

Deixar um atalho na área de trabalho que abra o terminal já dentro da pasta do
projeto com o Claude rodando. Assim ele clica em um ícone e já está conversando.

---

## Do lado do GitHub (feito pelo Mateo, uma vez)

- [ ] Adicionar `balikianpedro-cloud` como colaborador com permissão **Write**
      em Settings → Collaborators
- [ ] Criar o ruleset protegendo o `master` (exige PR + 1 aprovação,
      bypass para Repository admin)
