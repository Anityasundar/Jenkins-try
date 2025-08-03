function fetchMessage() {
  fetch("/api/message")
    .then(res => res.json())
    .then(data => {
      document.getElementById("response").innerText = data.message;
    });
}
