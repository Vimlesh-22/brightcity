"use client";
import React, { useEffect, useState } from "react";

export default function ThemePage() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = stored ? stored : prefersDark ? "dark" : "light";
    setTheme(current);
    if (current === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  };

  const swatch = (
    name: string,
    varName: string,
    border?: boolean
  ) => (
    <div className="flex items-center gap-3">
      <div
        className={`h-10 w-10 rounded-md ${border ? "border" : ""}`}
        style={{ backgroundColor: `hsl(var(${varName}))` }}
      />
      <div className="text-sm">
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground">{varName}</div>
      </div>
    </div>
  );

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Theme</h1>
        <p className="text-muted-foreground">Dark blue theme with sky blue and yellow accents.</p>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="btn-primary px-4 py-2 rounded-md">
          Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
        <span className="text-sm text-muted-foreground">Current: {theme ?? "..."}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Core</h2>
          <div className="grid grid-cols-2 gap-4">
            {swatch("Background", "--background", true)}
            {swatch("Foreground", "--foreground", true)}
            {swatch("Card", "--card", true)}
            {swatch("Card Foreground", "--card-foreground", true)}
            {swatch("Border", "--border", true)}
            {swatch("Input", "--input", true)}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Brand</h2>
          <div className="grid grid-cols-2 gap-4">
            {swatch("Primary", "--primary")}
            {swatch("Primary Foreground", "--primary-foreground", true)}
            {swatch("Secondary (Sky)", "--secondary")}
            {swatch("Secondary Foreground", "--secondary-foreground", true)}
            {swatch("Accent (Yellow)", "--accent")}
            {swatch("Accent Foreground", "--accent-foreground", true)}
            {swatch("Ring", "--ring")}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Examples</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn-primary px-4 py-2 rounded-md">Primary Button</button>
          <button className="btn-secondary px-4 py-2 rounded-md">Secondary Button</button>
          <a className="underline text-primary" href="#">Primary Link</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4">
            <div className="text-title mb-2">Card</div>
            <p className="text-sm text-muted-foreground">Uses card and border tokens.</p>
          </div>
          <div className="p-4 rounded-md border bg-background">
            <div className="font-medium">Background Section</div>
            <p className="text-sm text-muted-foreground">Text and contrast preview.</p>
          </div>
          <div className="p-4 rounded-md" style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))" }}>
            <div className="text-white font-medium drop-shadow">Gradient Preview</div>
          </div>
        </div>
      </div>
    </div>
  );
}

