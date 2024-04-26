function isCurrentPath(nextPathname: string, targetPath: string) {
  return "/" + nextPathname.split("/")[1].replace(/[?].*/, "") === targetPath.replace(/[?].*/, "");
}

function isExternalPath(path: string) {
  return path.startsWith("http");
}

export { isCurrentPath, isExternalPath };
