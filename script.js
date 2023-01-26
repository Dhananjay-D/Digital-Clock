setInterval(
  function() {

    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;

    if (h < 12) {
      document.getElementById("meridian").innerHTML = "AM";
    } else {
      document.getElementById("meridian").innerHTML = "PM";
    }

  }, 1000)
