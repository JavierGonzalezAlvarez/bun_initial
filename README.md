# bun. initial view
- having a look at bun

## install bun
https://bun.sh/docs/installation

$ curl -fsSL https://bun.sh/install | bash

- response:
bun was installed successfully to ~/.bun/bin/bun 
Added "~/.bun/bin" to $PATH in "~/.bashrc" 
To get started, run: 
  source /home/javier/.bashrc 
  bun --help 

## uninstall 
$ rm -rf ~/.bun 

## create structure
$ bun init

## run file
$ bun index.ts

## create a project from a template remix
$ bun create remix

## install, node version 18 is needed.
$ nvm install 18.18.0
$ nvm use 18.18.0

- path: ./my-remix-app
$ npm run dev

## create file toml
$ bunfig.toml
-add test & features such as logging

## debugger
$ bun --inspect index.ts
