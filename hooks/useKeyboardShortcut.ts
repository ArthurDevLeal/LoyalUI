import { useEffect, useCallback, useRef } from 'react';

type KeyboardKey = string;
type KeyCombo = KeyboardKey[];
type KeyboardEventHandler = (event: KeyboardEvent) => void;

interface KeyboardShortcutOptions {
  /**
   * Event to listen for ('keydown', 'keyup', or 'keypress')
   * @default 'keydown'
   */
  eventType?: 'keydown' | 'keyup' | 'keypress';
  
  /**
   * Target element to attach the event listener
   * @default window
   */
  target?: Window | HTMLElement | null;
  
  /**
   * Whether the shortcut should be enabled
   * @default true
   */
  enabled?: boolean;
  
  /**
   * Whether to prevent default browser behavior when shortcut is triggered
   * @default true
   */
  preventDefault?: boolean;
  
  /**
   * Whether to stop event propagation when shortcut is triggered
   * @default false
   */
  stopPropagation?: boolean;
  
  /**
   * Whether the shortcut requires exact modifier match
   * (e.g., if true, Ctrl+A won't trigger if Ctrl+Shift+A is pressed)
   * @default false
   */
  exactMatch?: boolean;
}

/**
 * React hook to handle keyboard shortcuts
 * @param keys Array of keys that make up the shortcut (e.g., ['Control', 'a'])
 * @param callback Function to execute when the shortcut is triggered
 * @param options Configuration options
 */
export function useKeyboardShortcut(
  keys: KeyCombo,
  callback: (event: KeyboardEvent) => void,
  options: KeyboardShortcutOptions = {}
): void {
  const {
    eventType = 'keydown',
    target = typeof window !== 'undefined' ? window : null,
    enabled = true,
    preventDefault = true,
    stopPropagation = false,
    exactMatch = false,
  } = options;

  // Store the callback in a ref to avoid re-creating the handler on each render
  const callbackRef = useRef<KeyboardEventHandler>(callback);
  
  // Update the callback ref when the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set of currently pressed keys
  const pressedKeys = useRef<Set<KeyboardKey>>(new Set());

  // Convert keys array to a Set for faster lookups
  const keysSet = useRef<Set<KeyboardKey>>(new Set(keys));

  // Normalize key names (e.g., 'Ctrl' to 'Control')
  const normalizeKey = useCallback((key: string): string => {
    const keyMap: { [key: string]: string } = {
      ' ': 'Space',
      'ctrl': 'Control',
      'esc': 'Escape',
      'cmd': 'Meta',
      'command': 'Meta',
      'win': 'Meta',
      'windows': 'Meta',
      'opt': 'Alt',
      'option': 'Alt',
      'del': 'Delete',
      'ins': 'Insert',
    };

    return keyMap[key.toLowerCase()] || key;
  }, []);

  const handleKeyEvent = useCallback((event: KeyboardEvent) => {
    if (!enabled) return;

    const key = normalizeKey(event.key);
    
    if (eventType === 'keydown') {
      pressedKeys.current.add(key);
    } else if (eventType === 'keyup') {
      pressedKeys.current.delete(key);
    }

    // Check if all required keys are pressed
    const allKeysPressed = Array.from(keysSet.current).every(k => 
      pressedKeys.current.has(normalizeKey(k))
    );

    // For exact match, ensure no extra modifier keys are pressed
    const isExactMatch = !exactMatch || (
      pressedKeys.current.size === keysSet.current.size
    );

    if (allKeysPressed && isExactMatch) {
      if (preventDefault) event.preventDefault();
      if (stopPropagation) event.stopPropagation();
      callbackRef.current(event);
    }
  }, [enabled, eventType, exactMatch, normalizeKey, preventDefault, stopPropagation]);

  // Handle key up to clean up pressed keys
  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    const key = normalizeKey(event.key);
    pressedKeys.current.delete(key);
  }, [normalizeKey]);

  // Clean up pressed keys when window loses focus
  const handleBlur = useCallback(() => {
    pressedKeys.current.clear();
  }, []);

  useEffect(() => {
    if (!target || !enabled) return;

    // Update keysSet if keys change
    keysSet.current = new Set(keys.map(normalizeKey));
    
    target.addEventListener(eventType, handleKeyEvent as EventListener);
    
    // Always listen for keyup to properly track pressed keys
    if (eventType !== 'keyup') {
      target.addEventListener('keyup', handleKeyUp as EventListener);
    }
    
    // Clean up pressed keys when window loses focus
    window.addEventListener('blur', handleBlur);

    return () => {
      target.removeEventListener(eventType, handleKeyEvent as EventListener);
      if (eventType !== 'keyup') {
        target.removeEventListener('keyup', handleKeyUp as EventListener);
      }
      window.removeEventListener('blur', handleBlur);
    };
  }, [target, enabled, eventType, keys, handleKeyEvent, handleKeyUp, handleBlur, normalizeKey]);
}

// Export additional types for consumers
export type { KeyboardShortcutOptions, KeyCombo };