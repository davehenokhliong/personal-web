import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        Made with ❤️ by Dave Henokh Liong.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting. It's available on {" "}
        <a className="text-blue-500 dark:text-purple-300" href="https://github.com/davehenokhliong/personal-web">GitHub</a>.
      </p>
    </footer>
  );
}
