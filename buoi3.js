const yesBtn = document.getElementById("say-yes");
const noBtn = document.getElementById("say-no");

yesBtn.addEventListener("click", function () {
  const answer = document.getElementById("answer");
  answer.innerHTML = "Nhảm nhơn nhậu nhìu nhắm 😚😍💚";
});

noBtn.addEventListener("mouseover", function () {
  noBtn.style.display = "none";
  setTimeout(() => {
    noBtn.style.display = "unset";
  }, 1000);
});
