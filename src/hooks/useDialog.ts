import { useLayoutEffect, useRef } from 'react';

let locks = 0;
let originalOverflow = '';
export function lockScroll() {
  if (locks++ === 0) {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  return () => { if (--locks === 0) document.body.style.overflow = originalOverflow; };
}

export function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const close = useRef(onClose);
  useLayoutEffect(() => { close.current = onClose; });
  useLayoutEffect(() => {
    if (!open || !ref.current) return;
    const panel = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const unlock = lockScroll();
    const focusable = () => (Array.from(panel.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])')) as HTMLElement[]).filter(el => el.getClientRects().length > 0);
    (focusable()[0] ?? panel).focus({ preventScroll: true });
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); close.current(); }
      if (event.key !== 'Tab') return;
      const elements = focusable();
      const first = elements[0] ?? panel;
      const last = elements.at(-1) ?? panel;
      if (!panel.contains(document.activeElement) || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      }
    };
    const focusin = (event: FocusEvent) => {
      if (!panel.contains(event.target as Node)) (focusable()[0] ?? panel).focus();
    };
    document.addEventListener('keydown', keydown);
    document.addEventListener('focusin', focusin);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('focusin', focusin);
      unlock();
      queueMicrotask(() => { if (previous?.isConnected) previous.focus({ preventScroll: true }); });
    };
  }, [open]);
  return ref;
}
