import React, { Suspense } from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function CopyrightYear() {
  const year = new Date().getFullYear();
  return <>{year}</>;
}

function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        ©{" "}
        <Suspense fallback={null}>
          <CopyrightYear />
        </Suspense>{" "}
        {config.author}. All rights reserved.
      </p>
      <SocialMediaButtons />
      <p className="z-10 text-xs text-gray-500 dark:text-gray-400">
        Design based on{" "}
        <a
          href="https://github.com/Naresh-Khatri/3d-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          3d-portfolio by Naresh Khatri
        </a>
      </p>
    </footer>
  );
}

export default Footer;
