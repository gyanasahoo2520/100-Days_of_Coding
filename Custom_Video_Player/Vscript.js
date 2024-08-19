const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const config = {
  sources: [{
    type: 'mp4',
    src: videoUrl,
  }]
};

const element = document.getElementById('player-container');
const player = IndigoPlayer.init(element, config);