// trajanje, pocetna vrijednost, vrijednost promjene, trajanje u ms
function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function animate(startValue, endValue, durationMs) {}

function myStopFunction(f) {
  clearInterval(f);
}

function scrollDown() {
  animate(scrollY, offset - 200, 1000);
}
