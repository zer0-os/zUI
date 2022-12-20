/*
 * f: truncateAddress
 */

export const truncateAddress = (address: string): string => {
  return `${address?.substring(0, 4)}...${address?.substring(address?.length - 4)}`;
};

/*
 * f: truncateDomain
 */

export const truncateDomain = (domainName: string, maxCharacterLength: number) => {
  if (domainName?.length > maxCharacterLength) {
    const splits = domainName.split('.');
    if (splits?.length > 2) {
      return `${splits[0]}...${splits[splits?.length - 1]}`;
    }
    return domainName;
  }
  return domainName;
};
