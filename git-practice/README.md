# Git練習サイト

Git・GitHubの操作を覚えるための小さなWebサイトです。

## 中身

- `index.html`：ページ本文
- `css/style.css`：見た目
- `js/app.js`：ボタンを押したときの動作
- `.gitignore`：Gitで追跡したくないファイルの指定

## 動かし方

`index.html` をブラウザで開いてください。インストール作業は不要です。

## 練習課題

1. `index.html` の見出しを変えて `git add` → `git commit`
2. `git switch -c feature/change-color` でブランチを作成
3. `css/style.css` のボタンの色を変えてコミット
4. `git push -u origin feature/change-color` でGitHubへ送信
5. GitHubで `feature/change-color` から `main` にPull Requestを作成してマージ
6. ローカルで `git switch main` → `git pull origin main`

※ GitHub側でファイルを直接変更する練習も可能です。変更後は `git pull` で取り込みましょう。
