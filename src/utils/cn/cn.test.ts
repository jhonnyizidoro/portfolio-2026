import { describe, expect, it } from "vitest";

import { cn } from "./cn";

describe("cn", () => {
  it("joins multiple strings", () => {
    expect(cn("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("returns single string unchanged", () => {
    expect(cn("foo")).toBe("foo");
  });

  it("returns empty string with no args", () => {
    expect(cn()).toBe("");
  });

  it("ignores null", () => {
    expect(cn("foo", null, "bar")).toBe("foo bar");
  });

  it("ignores undefined", () => {
    expect(cn("foo", undefined, "bar")).toBe("foo bar");
  });

  it("ignores false", () => {
    expect(cn("foo", false, "bar")).toBe("foo bar");
  });

  it("ignores true (not string or number)", () => {
    expect(cn("foo", true, "bar")).toBe("foo bar");
  });

  it("converts numbers to strings", () => {
    expect(cn("foo", 42)).toBe("foo 42");
  });

  it("deduplicates repeated class names", () => {
    expect(cn("foo", "bar", "foo")).toBe("foo bar");
  });

  it("handles all-falsy args", () => {
    expect(cn(null, undefined, false)).toBe("");
  });

  it("ignores empty string (falsy)", () => {
    expect(cn("foo", "", "bar")).toBe("foo bar");
  });
});
