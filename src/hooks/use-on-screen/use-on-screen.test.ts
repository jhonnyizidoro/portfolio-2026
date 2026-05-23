// @vitest-environment happy-dom
import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useOnScreen } from "./use-on-screen";

type IntersectionCallback = (entries: IntersectionObserverEntry[]) => void;

let intersectionCallback: IntersectionCallback | null = null;

const mockObserverInstance = {
  observe: vi.fn(),
  disconnect: vi.fn(),
};

class MockIntersectionObserver {
  constructor(cb: IntersectionCallback) {
    intersectionCallback = cb;
  }
  observe = mockObserverInstance.observe;
  disconnect = mockObserverInstance.disconnect;
}

beforeEach(() => {
  intersectionCallback = null;
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

afterEach(() => {
  vi.unstubAllGlobals();
  mockObserverInstance.observe.mockClear();
  mockObserverInstance.disconnect.mockClear();
  document.body.innerHTML = "";
});

const triggerIntersection = (isIntersecting: boolean) => {
  intersectionCallback?.([{ isIntersecting } as IntersectionObserverEntry]);
};

describe("useOnScreen", () => {
  it("returns false initially", () => {
    const el = document.createElement("div");
    const { result } = renderHook(() => {
      const ref = { current: el };
      return useOnScreen(ref);
    });
    expect(result.current).toBe(false);
  });

  it("returns true when element enters viewport", () => {
    const el = document.createElement("div");
    const { result } = renderHook(() => useOnScreen({ current: el }));

    act(() => triggerIntersection(true));

    expect(result.current).toBe(true);
  });

  it("returns false when element leaves viewport", () => {
    const el = document.createElement("div");
    const { result } = renderHook(() => useOnScreen({ current: el }));

    act(() => triggerIntersection(true));
    act(() => triggerIntersection(false));

    expect(result.current).toBe(false);
  });

  it("observes the ref element", () => {
    const el = document.createElement("div");
    renderHook(() => useOnScreen({ current: el }));

    expect(mockObserverInstance.observe).toHaveBeenCalledWith(el);
  });

  it("disconnects observer on unmount", () => {
    const el = document.createElement("div");
    const { unmount } = renderHook(() => useOnScreen({ current: el }));

    unmount();

    expect(mockObserverInstance.disconnect).toHaveBeenCalled();
  });

  it("returns false and does not observe when ref is null", () => {
    const { result } = renderHook(() => useOnScreen({ current: null }));

    expect(result.current).toBe(false);
    expect(mockObserverInstance.observe).not.toHaveBeenCalled();
  });
});
