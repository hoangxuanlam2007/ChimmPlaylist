function returnHome() {
    window.location.href = '../';
}

function sendBtn() {
    swal("Đã gửi!", "Gửi tin nhắn thành công!", "success");
}

// Loading Function
function loadingFunction() {
    document.getElementById("loading-bg").style.opacity = "0";
    document.getElementById("loading-bg").style.zIndex = "-1";
  }
  
  // Scroll to top after a refresh
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  } else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
  }