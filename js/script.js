var button = document.getElementById("derpyButton");
var videoContainer = document.getElementById("derpyVideoContainer");
var video = document.getElementById("derpyVideo");
var counter = document.getElementById("counter");
var countSpan = document.getElementById("count");
var messagesContainer = document.getElementById("messages");
var message5 = document.getElementById("message5");
var message10 = document.getElementById("message10");
var message20 = document.getElementById("message20");
var message30 = document.getElementById("message30");
var message50 = document.getElementById("message50");
var message100 = document.getElementById("message100");
var videoEndCount = 0;

videoContainer.style.display = "none";
messagesContainer.style.display = "none";

video.addEventListener('ended', function() {
  videoEndCount++;
  countSpan.textContent = videoEndCount;
  counter.style.display = "block";
  messagesContainer.style.display = "block";
  updateMessages();
  resetDerpy();
});

function toggleDerpy() {
  if (videoContainer.style.display === "none") {
    videoContainer.style.display = "block";
    button.innerHTML = "Дерпи!";
    video.play();
  } else {
    resetDerpy();
  }
}

function resetDerpy() {
  videoContainer.style.display = "none";
  button.innerHTML = "Дерпи?";
  video.pause();
  video.currentTime = 0;
}

function decodeMessage(encodedMessage) {
  try {
    return decodeURIComponent(escape(atob(encodedMessage)));
  } catch (error) {
    console.error("Ошибка декодирования сообщения:", error);
    return "Ошибка декодирования";
  }
}

function updateMessages() {
  if (videoEndCount === 5) {
    message5.textContent = decodeMessage("0JLQsNGDLCDRgtC10LHQtSDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDQvdGA0LDQstC40YLRgdGPINCU0LXRgNC/0Lgh");
  }
  if (videoEndCount === 10) {
    message10.textContent = decodeMessage("0JTQtdGA0L/QuCDQvdCw0LLRgdC10LPQtNCwIQ==");
  }
  if (videoEndCount === 20) {
    message20.textContent = decodeMessage("0JrQsNC60LDRjyDRgtC+INC/0L7QvdC4INC/0LXRgNC10LHQvtGA0YnQuNC70LAg0YEg0LzQsNGE0YTQuNC90LDQvNC4Lg==");
  }
  if (videoEndCount === 30) {
    message30.textContent = decodeMessage("0JTQtdGA0L/QuCAtINC70YPRh9GI0LDRjyDQv9C+0L3QuCE=");
  }
  if (videoEndCount === 50) {
    message50.textContent = decodeMessage("0JTRgNGD0LbQsdCwINGBINCU0LXRgNC/0Lgg0L3QuNC60L7Qs9C00LAg0L3QtSDQt9Cw0LrQsNC90YfQuNCy0LDQtdGC0YHRjyE=");
  }
  if (videoEndCount === 100) {
    message100.textContent = decodeMessage("0JTQtdGA0L/QuCAtINGN0YLQviDQu9GO0LHQvtCy0YwsINCU0LXRgNC/0LggLSDRjdGC0L4g0LbQuNC30L3RjC4=");
  }
}