cd dist
echo todo.cocode.pro > CNAME
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/nguyenvancongdev/web-vue.git master:gh-pages
pause
echo .