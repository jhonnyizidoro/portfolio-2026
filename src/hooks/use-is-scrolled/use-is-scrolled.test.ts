// @vitest-environment happy-dom
import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useIsScrolled } from "./use-is-scrolled";

describe("useIsScrolled", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
  });

  afterEach(() => {
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
  });

  describe("resetOnZeroOnly: false (default toggle)", () => {
    it("returns false initially", () => {
      const { result } = renderHook(() => useIsScrolled({ offset: 200 }));
      expect(result.current).toBe(false);
    });

    it("returns true when scrollY exceeds offset", () => {
      const { result } = renderHook(() => useIsScrolled({ offset: 200 }));

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 201,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });

    it("returns false when scrollY equals offset (not strictly greater)", () => {
      const { result } = renderHook(() => useIsScrolled({ offset: 200 }));

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 200,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(false);
    });

    it("resets to false when scrolled back below offset", () => {
      const { result } = renderHook(() => useIsScrolled({ offset: 200 }));

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 300,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 100,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(false);
    });

    it("reacts to different offset values", () => {
      const { result } = renderHook(() => useIsScrolled({ offset: 50 }));

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 51,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });
  });

  describe("neverReset: true (permanent latch)", () => {
    it("returns false initially", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, neverReset: true }),
      );
      expect(result.current).toBe(false);
    });

    it("returns true when scrollY exceeds offset", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, neverReset: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 201,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });

    it("stays true after scrolling back below offset", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, neverReset: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 300,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      act(() => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });

    it("removes listener after latching true", () => {
      const addSpy = vi.spyOn(window, "addEventListener");
      const removeSpy = vi.spyOn(window, "removeEventListener");

      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, neverReset: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 201,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);

      const scrollListenerRemoved = removeSpy.mock.calls.some(
        ([event]) => event === "scroll",
      );
      expect(scrollListenerRemoved).toBe(true);

      addSpy.mockRestore();
      removeSpy.mockRestore();
    });
  });

  describe("resetOnZeroOnly: true (latch until zero)", () => {
    it("returns true when scrollY exceeds offset", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, resetOnZeroOnly: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 201,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });

    it("stays true when scrolled back below offset but not to zero", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, resetOnZeroOnly: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 300,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 100,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });

    it("resets to false when scrollY reaches zero", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, resetOnZeroOnly: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 300,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      act(() => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(false);
    });

    it("does not reset when scrollY is non-zero but below offset", () => {
      const { result } = renderHook(() =>
        useIsScrolled({ offset: 200, resetOnZeroOnly: true }),
      );

      act(() => {
        Object.defineProperty(window, "scrollY", {
          writable: true,
          value: 300,
        });
        window.dispatchEvent(new Event("scroll"));
      });

      act(() => {
        Object.defineProperty(window, "scrollY", { writable: true, value: 1 });
        window.dispatchEvent(new Event("scroll"));
      });

      expect(result.current).toBe(true);
    });
  });
});
