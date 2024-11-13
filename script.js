function playSong(song) {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    audioSource.src = song;
    audioPlayer.load();
    audioPlayer.play();
}
