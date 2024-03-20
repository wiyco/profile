export function isCurrentPath(nextPathname: string, targetPath: string) {
  return "/" + nextPathname.split("/")[1].replace(/[?].*/, "") === targetPath.replace(/[?].*/, "");
}
