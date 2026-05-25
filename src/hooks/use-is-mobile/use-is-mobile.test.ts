// @vitest-environment happy-dom
import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useIsMobile } from "./use-is-mobile";

type MediaQueryHandler = () => void;

let changeHandler: MediaQueryHandler | null = null;
let currentMatches = false;

const mockMq = {
  get matches() {
    return currentMatches;
  },
  addEventListener: vi.fn((_: string, handler: MediaQueryHandler) => {
    changeHandler = handler;
  }),
  removeEventListener: vi.fn(),
};

beforeEach(() => {
  changeHandler = null;
  currentMatches = false;
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => mockMq),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
  mockMq.addEventListener.mockClear();
  mockMq.removeEventListener.mockClear();
});

const triggerChange = (matches: boolean) => {
  currentMatches = matches;
  changeHandler?.();
};

describe("useIsMobile", () => {
  it("returns false initially when not mobile", () => {
    currentMatches = false;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("returns true initially when mobile", () => {
    currentMatches = true;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("updates to true when viewport shrinks to mobile", () => {
    currentMatches = false;
    const { result } = renderHook(() => useIsMobile());

    act(() => triggerChange(true));

    expect(result.current).toBe(true);
  });

  it("updates to false when viewport grows to desktop", () => {
    currentMatches = true;
    const { result } = renderHook(() => useIsMobile());

    act(() => triggerChange(false));

    expect(result.current).toBe(false);
  });

  it("registers change listener on mount", () => {
    renderHook(() => useIsMobile());
    expect(mockMq.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });

  it("removes change listener on unmount", () => {
    const { unmount } = renderHook(() => useIsMobile());
    unmount();
    expect(mockMq.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );
  });
});
