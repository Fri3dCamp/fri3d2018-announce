# fri3d2018-announce
Announcement page of Fri3d Camp 2018

## Howto

De site wordt gemaakt met GitHub Pages / Jekyll. Bundler is nodig om de site
te genereren. Zie [https://help.github.com/articles/using-jekyll-with-pages](https://help.github.com/articles/using-jekyll-with-pages) voor
help ivm het opzetten van je werkomgeving.

### MacOS

Sinds El Capitan is /usr/bin niet meer schrijfbaar, waardoor je problemen ondervindt met het opzetten van Jekyll. Er zijn een aantal manieren om dat te omzeilen:

Installeer Ruby via homebrew:

```bash
$ brew install ruby
```
Vervolgens zal `gem install jekyll bundler` werken zonder foutmelding.

Installeer de Jekyll gem in je user folder:

```bash
$ gem install jekyll bundler --user-install
```

## Gebruikte Tools

[https://www.w3.org/TR/html5/](HTML5) -- We verwachten een relatief moderne browser
[http://lesscss.org/](LESS) -- CSS pre-processor
[http://gulpjs.com/](Gulp) -- Task runner   
[https://www.npmjs.com/](NPM) -- Package manager  
[http://jekyllrb.com/](Jekyll) -- Static site generator  

## Meewerken aan de site...

Fork, edit en bezorg ons een "pull request".

## Minimale instructies om te overleven:

```bash
$ git clone https://github.com/Fri3dCamp/fri3d2018-announce
$ cd fri3d2018-announce
$ git checkout gh-pages
$ npm install
$ bundle update
$ bundle exec jekyll serve
```

## LESS

De site gebruikt LESS voor het genereren van de CSS. Om een nieuwe minified style.css te genereren doe je:

```bash
$ gulp
```

Je zal merken dat dit ook het regenereren van de Jekyll site triggert.

Check [http://localhost:4000](http://localhost:4000) om je wijzigingen te valideren.

Wil je een niet-minified css genereren dan doe je

```bash
$ gulp dev
```
