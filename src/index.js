import MusicPlayer from './component/MusicPlayer.js';

require('/src/style/style.scss');

let getChildNode = function (node, className) {
  return Array.from(node.children).filter((child) =>
    child.className.includes(className)
  )[0];
};

let actionBtns = document.querySelectorAll('.js-action');
let actionEffect = function (node) {
  let img = getChildNode(node, 'js-action-img');
  img.src = `./assets/icon/${node.getAttribute('data-actionImg')}.png`;
};

let resetActionEffect = function (node) {
  let img = getChildNode(node, 'js-action-img');
  img.src = `./assets/icon/${node.getAttribute('data-actionImg')}.png`;
};

actionBtns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    actionEffect(this);
  });
});

let initialize = function () {
  let fetchData = fetch('./assets/songs.json');
  fetchData
    .then((response) => response.json())
    .then((data) => {
      let player = new MusicPlayer();
      window.setTimeout(() => {
        player.initialize(data);
      }, 1000);
    });
};
initialize();
