"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

/**
 * Renders an image that can be clicked to toggle between two sizes: a smaller size and a full-size version.
 */
const LogoImage = () => {
  const [fullSize, setFullSize] = useState(false);

  /**
   * Toggles the value of `fullSize` when called.
   */
  const toggleFullSize = () => {
    setFullSize(!fullSize);
  };

  return (
    <div className="relative">
      {!fullSize ? (
        <Link href="/" className="">
          <Image
            className="rounded-lg"
            src="/images/LOGO.jpeg"
            alt=""
            width={100}
            height={50}
            onClick={toggleFullSize}
          />
        </Link>
      ) : (
        <Link
          href="/"
          className=" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg shadow-gray-100"
        >
          <Image
            className="w-[80vw] max-w-[50vw]"
            src="/images/LOGO.jpeg"
            alt=""
            width={500}
            height={500}
            onClick={toggleFullSize}
          />
        </Link>
      )}
    </div>
  );
};

export default LogoImage;
