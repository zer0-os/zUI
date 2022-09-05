import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';

export const formatWei = (wei: BigNumber | string, decimalPlaces?: number) => {
  return formatBigNumberString(formatUnits(wei, decimalPlaces), decimalPlaces);
};

export const formatBigNumberString = (str: string, decimalPlaces?: number) => {
  const split = str.split('.');
  return `${Number(str.split('.')[0]).toLocaleString()}${
    split.length === 2 && split[1] !== '0' ? '.' + split[1].slice(0, decimalPlaces ?? 18) : ''
  }`;
};

export const formatFiat = (amount: number | string) => {
  return Number(amount).toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const formatPercentage = (percentage: number | string) => {
  return formatFiat(percentage) + '%';
};

export const formatTimestamp = (timestamp: string) => {
  return new Date(Number(timestamp)).toLocaleDateString();
};
