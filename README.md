<p align="center" class="logo">
  <img src="/src/assets/institutional/logoBrics.svg" width="200" title="Observatório dos Sistemas Nacionais de Proteção Socioambiental da Região Amazônica">
</p>

<div align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&logo=REACT"/>

  <img src="https://img.shields.io/static/v1?label=styled components&message=styles&color=pink&logo=STYLEDCOMPONENTS"/>

  <img src="https://img.shields.io/static/v1?label=prettier&message=beutify&color=yellow&logo=PRETTIER"/>

  <img src="https://img.shields.io/static/v1?label=eslint&message=linter&color=blue&logo=ESLINT"/>

  <img src="https://img.shields.io/static/v1?label=typescript&message=code&color=blue&logo=typescript"/>

  <img src="https://img.shields.io/static/v1?label=release&message=v1.0.3&color=green"/>
</div>

# <p align="center" class="title">Projeto PanAmazônia</p>

#### 🧪 Tecnologias

##### - Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript

##### - Esse projeto algumas padronizações:

- Commitizen (Padrões de commit)
- Git Commit Msg Linter (Validação de commit)
- Eslint (Validador de sintaxe e semântica)
- Prettier (Formatador de código)
- EditorConfig (Padrão de visualização editor 'VSCODE')

#### 🚀 Como executar

Clone o projeto do repositório no [TFS](http://tfs-ng.marlin.net:8080/tfs/Marlin/Prototipos/_git/PanAmazoniaTimeline).

Para iniciá-lo, siga os passos abaixo:

```
# Instalar as dependências
> yarn ou npm install

# Iniciar o projeto
> yarn start ou npm run start
```

#### 📋 Commit

Nós adotamos o padrão de commits [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) através da cli [Commitizen](https://github.com/commitizen/cz-cli) e são validados pela lib [git-commit-msg-linter](https://github.com/legend80s/commit-msg-linter#readme) que reportará um erro se o commit estiver fora do padrão.

Todos os commits devem seguir um formato específico:

```
  tipoDoCommit: mensagem do commit
```

Alguns tipos de commits possíveis estão nesta [documentação](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) ou [nesta](https://github.com/legend80s/commit-msg-linter#readme).

##### - Como fazer um commit

Você pode fazer um commit seguindo a forma normal do git `git commit -m "feat: mensagem do meu commit"`, desde que se siga o padrão estipulado, tudo funcionará corretamente.

ou

Caso queira instalar a cli [Commitizen](https://github.com/commitizen/cz-cli) utilize o comando `npm install -g commitizen` e após isso terá acesso ao comando `cz` no terminal para efetuar um commit padronizado.

Alternativamete, caso não queira instalar a cli globalmente, utilize `npx cz`.

#### 🏗️ Build

Este projeto está hospedado em desenvolvimento no servidor [GRM](grminternet.com.br/hmg/panamazonia/) e em produção no servidor [BRICS](https://bricspolicycenter.org/observamazonia/). As credenciais de acesso do servidor de produção estão no [WIKI](http://tfs-ng.marlin.net:8080/tfs/Marlin/Prototipos/_wiki/wikis/Prototipos.wiki?wikiVersion=GBwikiMaster&_a=edit&pagePath=%2FPanAmazônia%20Anotações) do projeto no TFS.

##### - Comando de build manual

```
  #Build Development
  yarn build:dev ou npm run build:dev

  #Build Production
  yarn build:prod ou npm run build:prod

```

Uma vez feito o build, basta clonar os arquivos para o ftp de desenvolvimento ou de produção.

### 🤓 Observações

Em caso de problemas com o linter, instale as extensões `eslint` e `prettier` que estão disponíveis nas extensões do VSCode.

##### - Configurando ESLINT

```
# Abrir configurações do VSCODE
CTRL + Shift + P

# Na caixa de diálogo copie e cole o comando abaixo
>preferences: Open Settings (JSON)

# Copie o comando abaixo e cole na tela que abrirá

 "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    }

# Salve e feche o arquivo.

```

### Demo:

Siga o link -> [PanAmazônia](https://grminternet.com.br/hmg/panamazonia/).

<br>

###### Desenvolvido por equipe:

<img src="https://medcentersauderio.com.br/images/LogoMarlin.png" width="200" title="Observatório dos Sistemas Nacionais de Proteção Socioambiental da Região Amazônica">
