const form = document.getElementById("loginForm"), msg = document.getElementById("message");
form.addEventListener("submit", async e => {
  e.preventDefault();
  const data = new URLSearchParams();
  data.append("username", form.username.value.trim());
  data.append("password", form.password.value.trim());
  try {
    const res = await fetch("https://YOUR_RENDER_APP.onrender.com/login", {
      method: "POST", body: data
    });
    const json = await res.json();
    if (json.success) {
      window.location.href = "index.html";
    } else {
      msg.textContent = "帳號或密碼錯誤！";
    }
  } catch {
    msg.textContent = "無法連接伺服器";
  }
});
