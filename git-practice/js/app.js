const button = document.querySelector("#change-message");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "JavaScriptの変更もGitで管理できる！";
});
