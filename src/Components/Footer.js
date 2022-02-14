import React from "react";

function Footer() {
  return (
    <div className="flex flex-row w-full h-10 fixed bottom-0 justify-end px-2">
      <p className="text-xs text-right font-semibold">
        Made with ❤ by{" "}
        <a target="_blank" href="https://instagram.com/abhishek.421">
          @abhishek.421
        </a>
        <br />
        Copyright © 2022 Poornima College Alumni Society
      </p>
    </div>
  );
}

export default Footer;
