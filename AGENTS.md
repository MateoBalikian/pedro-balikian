# Site do Pedro Balikian

Site pessoal do Pedro Balikian — professor e pesquisador (fisiologia do exercício,
metabolômica, IA aplicada à saúde). Astro + Tailwind, hospedado na Vercel em
https://pedrobalikian.com.br

## Quem é quem

- **Pedro** — dono do site. É professor, **não é desenvolvedor**. Ele conversa com
  você em português e pede alterações em linguagem comum. Ele não sabe (e não
  precisa saber) usar git, terminal ou ler código.
- **Mateo** — filho do Pedro, desenvolvedor, dono do repositório. **É ele quem
  aprova e publica.** Nenhuma alteração vai pro ar sem ele.

---

## FLUXO DE TRABALHO OBRIGATÓRIO

Siga estes passos em ordem, sempre. Não pule nenhum.

### 1. Nunca trabalhe no `master`

O `master` é a versão que está no ar. Ele é protegido no GitHub e push direto
será rejeitado. Toda alteração começa com uma branch nova:

```
git checkout master
git pull
git checkout -b <descricao-curta-em-kebab-case>
```

### 2. Faça a alteração

### 3. Mostre pro Pedro ANTES de commitar

Suba o servidor local e mostre o resultado:

```
astro dev --background
```

O site fica em `http://localhost:4321`. Diga pro Pedro a **URL exata** da página
que mudou (ex: "abre `http://localhost:4321/blog` que o texto novo tá lá") e
descreva em palavras o que mudou. Se conseguir tirar screenshot, tire.

### 4. Espere a aprovação dele

Ele precisa dizer, em palavras, que está bom ("pode subir", "ficou ótimo",
"aprovado"). Silêncio não é aprovação. Se ele pedir ajuste, ajuste e mostre de
novo — quantas vezes for preciso, ainda na mesma branch.

### 5. Só depois: commit, push e PR

```
git add -A
git commit -m "<mensagem curta em português>"
git push -u origin <nome-da-branch>
gh pr create --title "<título em português>" --body "<descrição>"
```

O PR deve ter, no corpo:
- o que mudou, em português simples
- quais páginas foram afetadas
- a linha `Solicitado por: Pedro`

### 6. NUNCA faça merge do PR

Merge é decisão do Mateo, sempre. Não rode `gh pr merge` em hipótese nenhuma.

### 7. Avise o Pedro

Passe o link do PR e explique: a alteração está pronta e aguardando o Mateo
revisar. A Vercel gera automaticamente um link de preview no PR — vale mencionar,
porque o Pedro pode abrir esse link e ver a alteração como ficaria no site real.

---

## Como conversar com o Pedro

- **Sempre em português**, linguagem simples, sem jargão técnico.
- Não mostre código, a menos que ele peça explicitamente. Descreva a mudança em
  palavras: "aumentei o espaço entre os parágrafos", não "ajustei o `mt-4`".
- Nunca peça pra ele rodar comandos no terminal, editar arquivo ou usar git.
  Você faz tudo; ele só olha e aprova.
- Pedido ambíguo? Pergunte antes de fazer. Uma pergunta curta é melhor que uma
  alteração errada.
- Alteração grande ou que mexe no visual do site inteiro (cores, fontes, menu,
  rodapé)? Avise que é uma mudança ampla e confirme antes de começar.

---

## Onde fica cada coisa

### Páginas

| Página no site | Arquivo |
| --- | --- |
| Home | `src/pages/index.astro` |
| Sobre | `src/pages/sobre.astro` |
| Contato | `src/pages/contato.astro` |
| Publicações | `src/pages/publicacoes.astro` |
| Veltron | `src/pages/veltron.astro` |
| Lista do blog | `src/pages/blog/index.astro` |
| Lista de pesquisa | `src/pages/pesquisa/index.astro` |
| Lista de projetos | `src/pages/projetos/index.astro` |

Cabeçalho, rodapé e menu ficam em `src/layouts/Layout.astro` — mexer ali afeta
**todas** as páginas.

### Conteúdo (textos que o Pedro mais vai querer editar)

São arquivos Markdown. Um arquivo = um item na listagem do site.

| Tipo | Pasta |
| --- | --- |
| Posts do blog | `src/content/blog/` |
| Linhas de pesquisa | `src/content/pesquisa/` |
| Projetos | `src/content/projetos/` |
| Publicações | `src/content/publicacoes/` |

Cada arquivo tem um cabeçalho (frontmatter) com campos obrigatórios. O formato
exato de cada tipo está em `src/content.config.ts` — **consulte antes de criar
ou editar**, porque campo faltando quebra o build e o site não publica.

Ao criar um item novo, copie a estrutura de um arquivo existente da mesma pasta.

### Imagens

Ficam em `public/images/`. No conteúdo, referencie pelo caminho começando com
barra: `/images/nome-do-arquivo.png`.

A pasta `02_FOTOS_MARCA/` tem os originais em alta e **não vai pro deploy** (está
no `.gitignore`). Se precisar de uma foto de lá no site, otimize e copie pra
`public/images/`.

---

## Antes de abrir o PR, sempre

```
npm run build
```

Se o build falhar, o site não publica. Corrija antes de abrir o PR — nunca abra
PR com build quebrado.

---

## Não mexa sem avisar

Estes arquivos afetam a estrutura do projeto. Se uma alteração exigir tocar neles,
diga ao Pedro que aquilo é uma mudança técnica e deixe explícito no PR pro Mateo:

- `astro.config.mjs`
- `package.json` / `package-lock.json`
- `src/content.config.ts`
- `.gitignore`
- este arquivo (`AGENTS.md`, lido também como `CLAUDE.md`)

---

## Documentação

Documentação do Astro: https://docs.astro.build

- [Páginas e rotas](https://docs.astro.build/en/guides/routing/)
- [Componentes Astro](https://docs.astro.build/en/basics/astro-components/)
- [Conteúdo (content collections)](https://docs.astro.build/en/guides/content-collections/)
- [Estilos e Tailwind](https://docs.astro.build/en/guides/styling/)
