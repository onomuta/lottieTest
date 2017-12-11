var anim;
var elem = document.getElementById("myCanvas")
var animData = {
  container: elem,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/animData.json'
};
anim = lottie.loadAnimation(animData);
anim.setSubframe(false);