set -e
npm run build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Starlight0798/Starlight0798.github.io.git main
cd -