let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");

function f() {
  let tim = new Date();
  let hr = tim.getHours() * 30 + 0.5 * tim.getMinutes();
  let mi = tim.getMinutes() * 6;
  let se = tim.getSeconds() * 6;

  h.style.transform = `rotate(${hr}deg)`;
  m.style.transform = `rotate(${mi}deg)`;
  s.style.transform = `rotate(${se}deg)`;
}
f();
setInterval(f, 1000);
