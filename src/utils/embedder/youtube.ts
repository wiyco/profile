function isYouTubeLink(link: string): boolean {
  return link.match(/youtu\.*be/g) !== null;
}

function hasMusicInTitle(title: string): boolean {
  return title.toLocaleLowerCase().includes("music");
}

export { hasMusicInTitle, isYouTubeLink };
