/**
 * Pulls the IPFS hash from an IPFS url
 * @param url IPFS url to get hash from
 * @returns IPFS hash from url
 */
export const getHashFromIPFSUrl = (url: string) => {
  const regex = /Qm(\w{44})[/\w]*/;

  if (regex.test(url)) {
    const matches = url.match(regex) as string[];
    return matches?.[0];
  }
};
