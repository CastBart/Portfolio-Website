import React from "react";

export default function Header(): React.ReactNode {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Bartosz Zych</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Low-Code Developer</h2>
        <p className="mt-4 max-w-xs leading-normal">I'm an aspiring Full Stack Developer</p>
      </div>
    </header>
  );
}
