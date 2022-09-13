import { formatWei, formatBigNumberString, formatTimestamp, formatFiat, formatPercentage } from './format';

describe('format', () => {
  describe('formatFiat', () => {
    it('should convert to locale string', () => {
      expect(formatFiat(1000)).toBe('1,000');
    });

    it('should handle zero', () => {
      expect(formatFiat(0)).toBe('0');
    });

    it('should handle negative numbers', () => {
      expect(formatFiat(-10)).toBe('-10');
    });

    it('should handle fraction digits', () => {
      expect(formatFiat(1211.35432)).toBe('1,211.35');
    });
  });

  describe('formatPercentage', () => {
    it('should convert to locale string', () => {
      expect(formatPercentage(1000)).toBe('1,000%');
    });

    it('should handle zero', () => {
      expect(formatPercentage(0)).toBe('0%');
    });

    it('should handle negative numbers', () => {
      expect(formatPercentage(-10)).toBe('-10%');
    });

    it('should handle fraction digits', () => {
      expect(formatPercentage(1211.35432)).toBe('1,211.35%');
    });
  });

  describe('formatBigNumberString', () => {
    it('should convert to locale string', () => {
      expect(formatBigNumberString('1000')).toBe('1,000');
    });

    it('should apply default 0 dp', () => {
      expect(formatBigNumberString('10')).toBe('10');
    });

    it('should handle specified dp', () => {
      expect(formatBigNumberString('10.3456', 3)).toBe('10.345');
    });

    it('should handle zero', () => {
      expect(formatBigNumberString('0')).toBe('0');
    });

    it('should handle negative numbers', () => {
      expect(formatBigNumberString('-10')).toBe('-10');
    });
  });

  describe('formatWei', () => {
    it('should convert to locale string', () => {
      expect(formatWei('1000000000000000000000')).toBe('1,000');
    });

    it('should apply default 0 dp', () => {
      expect(formatWei('10000000000000000000')).toBe('10');
    });

    it('should handle specified dp', () => {
      expect(formatWei('10345', 3)).toBe('10.345');
    });

    it('should handle zero', () => {
      expect(formatWei('0')).toBe('0');
    });

    it('should handle negative numbers', () => {
      expect(formatWei('-10')).toBe('-0.00000000000000001');
    });
  });

  describe('formatTimestamp', () => {
    const mockDateAndLocale = (timestamp: string, locale: string) => {
      const mockDate = new Date(Number(timestamp));
      jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString(locale));
    };

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should correctly format the timestamp for US locale', () => {
      const timestamp = '1663056440000';
      mockDateAndLocale(timestamp, 'en-US');

      expect(formatTimestamp(timestamp)).toEqual('9/13/2022');
    });

    it('should correctly format the timestamp for UK locale', () => {
      const timestamp = '1663056440000';
      mockDateAndLocale(timestamp, 'en-GB');

      expect(formatTimestamp(timestamp)).toEqual('13/09/2022');
    });

    it('should correctly format the timestamp for Italy locale', () => {
      const timestamp = '1663056440000';
      mockDateAndLocale(timestamp, 'it-IT');

      expect(formatTimestamp(timestamp)).toEqual('13/9/2022');
    });

    it('should correctly format the timestamp for Portugal locale', () => {
      const timestamp = '1663056440000';
      mockDateAndLocale(timestamp, 'pt-PT');

      expect(formatTimestamp(timestamp)).toEqual('13/09/2022');
    });
  });
});
