# PersonnelApp

git config --local user.name "gdeepak"
git config --local user.email "gdepakji@gmail.com"

git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a

git add & git commit 

docker compose build --no-cache
docker compose up -d