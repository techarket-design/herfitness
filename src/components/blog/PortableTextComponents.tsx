import React from "react";
import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-8 mb-4 border-l-4 border-her-primary pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-pink-200 mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-300 text-base leading-relaxed mb-5">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-her-secondary bg-slate-900 p-4 rounded-r-xl italic text-slate-200 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-slate-300 space-y-2 mb-5">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-slate-300 space-y-2 mb-5">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="relative h-80 my-8 rounded-2xl overflow-hidden border border-slate-800">
          <Image
            src={value.asset.url}
            alt={value.alt || "Article illustration"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};
