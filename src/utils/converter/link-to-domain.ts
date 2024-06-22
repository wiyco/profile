function linkToDomain(link: string) {
  return link.match(/https?:\/\/([^/]+)\/?/)?.[1];
}

export { linkToDomain };
