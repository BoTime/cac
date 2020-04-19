# Prerequisites
Check versions of Node and NPM
```bash
npm -v
node -v
```

Install Node
```bash
brew install node@10
brew link node@10
```

# Verify changes locally
```bash
firebase serve --only hosting
```

You will see something like:
```bash
i  hosting: Serving hosting files from: ./
✔  hosting: Local server: http://localhost:5000
```

# Git basics
Terminology:
* repo
* commit
* branch

Most frequent commands:
* Create/switch a branch
```bash
# If <BRANCH_NAME> does not exist, it will be created
git checkout -b <BRANCH_NAME>
# To check what branch you are on currently
git branch -v
```
* Check what files have been modified
```bash
git status
```
* Add files to a commit
```bash
git add <FILENAME>
```
* Write commit message
```bash
git commit -m "PLACEHOLDER"
```
* Push commit to remote
```bash
git push
```
* Pull latest changes
```bash
# Fist check which branch you are on
git pull 
```


