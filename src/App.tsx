import React from "react";
import { offsetBg } from "./App.css";
import { atoms } from "./sprinkles.css";

function App() {
  return (
    <div
      // className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      className={atoms({
        minHeight: "screen",
        background: "gray-100",
        paddingY: { default: 6, sm: 12 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      })}
    >
      <div
        // className="relative py-3 sm:max-w-xl sm:mx-auto"
        className={atoms({
          position: "relative",
          paddingY: 3,
          maxWidth: { sm: "xl" },
          marginX: { sm: "auto" },
        })}
      >
        <div
          // className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
          className={offsetBg}
        />
        <div
          // className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
          className={atoms({
            position: "relative",
            paddingX: { default: 4, sm: 20 },
            paddingY: { default: 10, sm: 20 },
            background: "white",
            boxShadow: "lg",
            borderRadius: { sm: "3xl" },
          })}
        >
          <div
            // className="max-w-md mx-auto"
            className={atoms({ maxWidth: "md", marginX: "auto" })}
          >
            <div>
              <img
                src="https://play.tailwindcss.com/img/logo.svg"
                // className="h-7 sm:h-8"
                className={atoms({ height: { default: 7, sm: 8 } })}
              />
            </div>
            <div
            // className="divide-y divide-gray-200"
            >
              <div
                // className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                className={atoms({
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  paddingY: 8,
                  color: "gray-700",
                  fontSize: { default: "base", sm: "lg" },
                })}
              >
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul
                  // className="list-disc space-y-2"
                  className={atoms({
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    listStyleType: "disc",
                  })}
                >
                  <li
                    // className="flex items-start"
                    className={atoms({
                      display: "flex",
                      alignItems: "flex-start",
                    })}
                  >
                    <span
                      // className="h-6 flex items-center sm:h-7"
                      className={atoms({
                        height: { default: 6, sm: 7 },
                        display: "flex",
                        alignItems: "center",
                      })}
                    >
                      <svg
                        // className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        className={atoms({
                          flexShrink: 0,
                          height: 5,
                          width: 5,
                          color: "cyan-500",
                        })}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p
                      // className="ml-2"
                      className={atoms({ marginLeft: 2 })}
                    >
                      {"Customizing your "}
                      <code
                        // className="text-sm font-bold text-gray-900"
                        className={atoms({
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "gray-900",
                        })}
                      >
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li
                    // className="flex items-start"
                    className={atoms({
                      display: "flex",
                      alignItems: "flex-start",
                    })}
                  >
                    <span
                      // className="h-6 flex items-center sm:h-7"
                      className={atoms({
                        height: { default: 6, sm: 7 },
                        display: "flex",
                        alignItems: "center",
                      })}
                    >
                      <svg
                        // className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        className={atoms({
                          flexShrink: 0,
                          height: 5,
                          width: 5,
                          color: "cyan-500",
                        })}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p
                      // className="ml-2"
                      className={atoms({ marginLeft: 2 })}
                    >
                      {"Extracting classes with "}
                      <code
                        // className="text-sm font-bold text-gray-900"
                        className={atoms({
                          fontSize: "sm",
                          fontWeight: "bold",
                          color: "gray-900",
                        })}
                      >
                        @apply
                      </code>
                    </p>
                  </li>
                  <li
                    //className="flex items-start"
                    className={atoms({
                      display: "flex",
                      alignItems: "flex-start",
                    })}
                  >
                    <span
                      // className="h-6 flex items-center sm:h-7"
                      className={atoms({
                        height: { default: 6, sm: 7 },
                        display: "flex",
                        alignItems: "center",
                      })}
                    >
                      <svg
                        // className="flex-shrink-0 h-5 w-5 text-cyan-500"
                        className={atoms({
                          flexShrink: 0,
                          height: 5,
                          width: 5,
                          color: "cyan-500",
                        })}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p
                      // className="ml-2"
                      className={atoms({ marginLeft: 2 })}
                    >
                      Code completion with instant preview
                    </p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div
                // className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
                className={atoms({
                  paddingTop: 6,
                  fontSize: { default: "base", sm: "lg" },
                  fontWeight: "bold",
                  borderColor: "gray-200",
                  borderTopWidth: 1,
                })}
              >
                <p>Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    // className="text-cyan-600 hover:text-cyan-700"
                    className={atoms({
                      color: { default: "cyan-600", hover: "cyan-700" },
                    })}
                  >
                    {" "}
                    Read the docs &rarr;{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
