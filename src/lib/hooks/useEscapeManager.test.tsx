import { EscapeManager } from './useEscapeManager';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('EscapeManager', () => {
  let escapeManager: EscapeManager;

  beforeEach(() => {
    escapeManager = new EscapeManager();
  });

  const createKeydownEvent = (key: string): KeyboardEvent => {
    return new KeyboardEvent('keydown', { key });
  };

  it('calls handler on escape press', () => {
    const handler = vi.fn();
    escapeManager.register(handler);

    document.dispatchEvent(createKeydownEvent('Escape'));

    expect(handler).toHaveBeenCalled();
  });

  it('calls nothing if unregistered', () => {
    const handler = vi.fn();
    escapeManager.register(handler);
    escapeManager.unregister();

    document.dispatchEvent(createKeydownEvent('Escape'));

    expect(handler).toHaveBeenCalledTimes(0);
  });

  it('calls only most recently registered callback', () => {
    const firstHandler = vi.fn();
    const secondHandler = vi.fn();

    escapeManager.register(firstHandler);
    escapeManager.register(secondHandler);

    document.dispatchEvent(createKeydownEvent('Escape'));

    expect(firstHandler).toHaveBeenCalledTimes(0);
    expect(secondHandler).toHaveBeenCalledTimes(1);
  });

  it('unregisters only most recently registered callback', () => {
    const firstHandler = vi.fn();
    const secondHandler = vi.fn();

    escapeManager.register(firstHandler);
    escapeManager.register(secondHandler);
    escapeManager.unregister();

    document.dispatchEvent(createKeydownEvent('Escape'));

    expect(firstHandler).toHaveBeenCalledTimes(1);
    expect(secondHandler).toHaveBeenCalledTimes(0);
  });

  it('removes event listener when last handler is unregistered', () => {
    const handler = vi.fn();
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

    escapeManager.register(handler);
    escapeManager.unregister();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  it('adds event listener only once for multiple registrations', () => {
    const addEventListenerSpy = vi.spyOn(document, 'addEventListener');
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    escapeManager.register(handler1);
    escapeManager.register(handler2);

    expect(addEventListenerSpy).toHaveBeenCalledTimes(1);
  });
});
