"use client";

import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import DropdownCategory from "./DropdownCategory";
import { useState } from "react";

export default function SearchForm() {
  const [isShowCategories, setIsShowCategories] = useState(false);
  const dummyCategories = [
    { id: 1, name: "Tea House" },
    { id: 2, name: "Games & Toys" },
  ];

  const dummySubcategories = [
    { id: 1, name: "Honey & Detox Tea", category: "Tea House" },
    { id: 2, name: "Tea & Coffee Acc", category: "Tea House" },
    { id: 3, name: "Loose Tea & Herbs", category: "Tea House" },
    { id: 4, name: "Tiki", category: "Tea House" },
    { id: 5, name: "For Girls", category: "Games & Toys" },
    { id: 6, name: "Lego & Puzzle", category: "Games & Toys" },
    { id: 7, name: "Educational Toys", category: "Games & Toys" },
    { id: 8, name: "Others", category: "Games & Toys" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="hidden md:flex flex-row gap-1 flex-3"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-4">
        {/* Search Input */}
        <input
          type="text"
          name="name"
          placeholder="What are you looking for?"
          className="p-2 bg-white rounded-lg outline-none text-sm w-full"
        ></input>
        {/* Category Button */}
        <button
          type="button"
          className="absolute flex flex-row gap-4 justify-between items-center top-0 right-0 h-full px-4 rounded-lg bg-[#F5F5F5] text-[#555555] text-sm cursor-pointer"
          onClick={() => setIsShowCategories(!isShowCategories)}
        >
          Category
          <Image
            width={10}
            height={6}
            src={`${imagePaths.icon}/dropdownArrow.svg`}
            alt="dropdown arrow"
            className={`${isShowCategories && "rotate-x-180"} translate-y-1/2 transition-transform duration-300 `}
          />
        </button>
        {/* Categories dropdown Content */}
        <div
          className={`${
            isShowCategories
              ? "max-h-80 overflow-auto py-2"
              : "max-h-0 overflow-hidden"
          } absolute right-0 bg-white text-black px-5 z-10 rounded-lg transition-all duration-300 shadow-[0px_5px_5px_#858585]`}
        >
          <ul className="">
            <li className="p-2 cursor-pointer">All products</li>
            {dummyCategories.map((category) => (
              <DropdownCategory
                key={category.id}
                category={category}
                dummySubcategories={dummySubcategories}
              />
            ))}
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className="bg-orange rounded-lg px-4 py-1 text-white border-orange outline-orange flex-1 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
