const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenElements = document.querySelectorAll(".hidden");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  handleTransition(username);
}

function handleTransition(username) {
  // 기존의 로그인 화면 페이드 아웃
  loginForm.classList.add("fade-out");

  // 로그인 폼 숨김 처리
  loginForm.style.display = "none";

  // 나머지 숨겨진 요소 페이드 인
  hiddenElements.forEach((element) => {
    element.classList.remove("hidden");
    element.classList.add("fade-in");
  });

  // 환영 메시지 설정
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 이미 저장된 사용자 이름이 있을 경우, 화면 전환을 처리
  handleTransition(savedUsername);
}
