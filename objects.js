playlist = {judee sill: "the kiss"}
function updatePlaylist(list, artist, song){
  return Object.assign({}, list, {artist: song})
}
function removeFromPlaylist(list, artist){
  delete list.artist;
  return list
}