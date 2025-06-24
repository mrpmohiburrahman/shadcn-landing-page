import { LogoIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="block">
      {/* Container */}
      <div className="w-full px-10 py-16 mx-auto md:py-20 ">
        {/* Component */}
        <div className="flex flex-col justify-between sm:flex-row">
          <div>



            <a
              rel="noreferrer noopener"
              href="/"
              className="flex ml-2 text-xl font-bold"
            >
              <LogoIcon />
              Pixel Log
            </a>
            <div className="flex flex-col-reverse items-start justify-between mt-3 ml-3 md:flex-row sm:items-center sm:flex-col">
              <p className="text-sm text-gray-500 sm:text-base">
                © Copyright 2025. All rights reserved.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex items-start justify-start mb-4 max-w-72">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bb99e6cf78_MapPin.svg" alt="" className="inline-block mr-3" />
              <p className="text-sm text-gray-500 sm:text-base">
                3502 Bhuiya Road, Joypur, BD
              </p>
            </div>
            <div className="flex items-start justify-start mb-4 max-w-72">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg" alt="" className="inline-block mr-3" />
              <p className="text-sm text-gray-500 sm:text-base">
                mrpmohiburrahman@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 border-black mb-14"></div>

      </div>
    </footer>
  );
}
