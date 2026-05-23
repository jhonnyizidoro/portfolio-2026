// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { scrollTo } from "./scrollTo";

describe("scrollTo", () => {
  let scrollToSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollToSpy = vi.fn();
    window.scrollTo = scrollToSpy as unknown as typeof window.scrollTo;
    Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
  });

  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  const addElement = (id: string, top: number) => {
    const el = document.createElement("div");
    el.id = id;
    vi.spyOn(el, "getBoundingClientRect").mockReturnValue({
      top,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    document.body.appendChild(el);
    return el;
  };

  it("does nothing when element not found", () => {
    scrollTo("nonexistent");
    expect(scrollToSpy).not.toHaveBeenCalled();
  });

  it("does nothing when id is empty string", () => {
    scrollTo("");
    expect(scrollToSpy).not.toHaveBeenCalled();
  });

  it("scrolls to element with default 150px offset", () => {
    addElement("section", 500);

    scrollTo("section");

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 350,
      behavior: "smooth",
    });
  });

  it("applies custom offset", () => {
    addElement("section", 500);

    scrollTo("section", { offset: 80 });

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 420,
      behavior: "smooth",
    });
  });

  it("accounts for current scrollY", () => {
    addElement("section", 300);
    Object.defineProperty(window, "scrollY", { writable: true, value: 200 });

    scrollTo("section");

    expect(scrollToSpy).toHaveBeenCalledWith({
      top: 350,
      behavior: "smooth",
    });
  });

  it("always uses smooth behavior", () => {
    addElement("section", 100);

    scrollTo("section");

    expect(scrollToSpy).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: "smooth" }),
    );
  });
});
