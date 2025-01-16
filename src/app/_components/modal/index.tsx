"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type TProps = {
  title: string;
  children: ReactNode;
};

export function Modal({ title, children }: TProps) {
  const [isOnClientSide, setIsOnClientSide] = useState(false);
  const [dragToLeft, setDragToLeft] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsOnClientSide(true);
  }, []);

  useEffect(() => {
    const oldOverflowYValueOnBody = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = oldOverflowYValueOnBody;
    };
  }, [isOnClientSide]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDragToLeft(true);
    }, 10);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  if (!isOnClientSide) return null;

  async function CloseModal() {
    setDragToLeft(false);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 500);
    });

    router.back();
  }

    const formattedTitle = title.split("").reduce((previousValue: string, currentValue:string) => {

        if(previousValue.length === 0) return currentValue.toUpperCase()

        if (previousValue[previousValue.length - 1] === " " && currentValue !== " ") return previousValue + currentValue.toUpperCase()

        return previousValue + currentValue
    }, "")

  return createPortal(
    <div
      className="w-full h-full fixed top-0 left-0 bg-neutral-800/10 z-50 flex justify-end"
      onClick={() => {
        CloseModal();
      }}
    >
      <article
        className={[
          "w-full md:max-w-3xl md:h-screen p-4 pb-8 flex flex-col gap-4 h-full bg-neutral-100 md:border-l-2 md:border-gray-300 shadow-2xl shadow-neutral-700 overflow-y-auto",
          dragToLeft ? "translate-x-0" : "translate-x-full",
          // the transition duration must be the same one of the time out that runs when calling CloseModal() - why? so we await for the translating-x animation to end before deleting the node
          "transition-all duration-500",
        ].join(" ")}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <header className="w-full flex items-center justify-between">
          <h1>{formattedTitle}</h1>
          <button
            onClick={() => {
              CloseModal();
            }}
            className="text-neutral-800 p-1 rounded-sm hover:bg-gray-200 transition-all duration-150"
          >
            <X className="w-4 h-4" />
          </button>
        </header>
        {children}
      </article>
    </div>,
    document.body,
  );
}
