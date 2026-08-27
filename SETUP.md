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

Sem isso os commits saem no nome errado:

```
git config --global user.name "Pedro Balikian"
git config --global user.email "<email-do-pedro>"
```

## 3. Login no GitHub como Pedro

```
gh auth login
```

Escolher: GitHub.com → HTTPS → autenticar no navegador, logado na conta
`balikianpedro-cloud`.

Conferir: `gh auth status` deve mostrar `balikianpedro-cloud`.

## 4. Clonar o repositório

```
git clone https://github.com/MateoBalikian/pedro-balikian.git
cd pedro-balikian
npm install
```

## 5. Testar

```
npm run dev
```

Abrir `http://localhost:4321` — o site deve aparecer. `Ctrl+C` encerra.

## 6. Claude Code

Instalar, fazer login na conta Claude e abrir o Claude **dentro da pasta
`pedro-balikian`**. Ele lê o `CLAUDE.md` sozinho e já começa sabendo o fluxo
(branch → mostrar no localhost → aprovação do Pedro → PR → Mateo publica).

## 7. Atalho pro Pedro

Deixar um atalho na área de trabalho que abra o terminal já dentro da pasta do
projeto com o Claude rodando. Assim ele clica em um ícone e já está conversando.

---

## Do lado do GitHub (feito pelo Mateo, uma vez)

- [ ] Adicionar `balikianpedro-cloud` como colaborador com permissão **Write**
      em Settings → Collaborators
- [ ] Criar o ruleset protegendo o `master` (exige PR + 1 aprovação,
      bypass para Repository admin)
