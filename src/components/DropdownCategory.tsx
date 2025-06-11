import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { useState } from "react";

interface Category {
  name: string;
  // add other properties if needed
}

interface Subcategory {
  id: number;
  name: string;
  category: string;
  // add other properties if needed
}

interface DropdownCategoryProps {
  category: Category;
  dummySubcategories: Subcategory[];
}

export default function DropdownCategory({
  category,
  dummySubcategories,
}: DropdownCategoryProps) {
  const [isShowSubcategory, setIsShowSubcategory] = useState(false);
  return (
    <li className="p-2 flex flex-col cursor-pointer">
      <div
        className="flex flex-row gap-5 justify-between"
        onClick={() => setIsShowSubcategory(!isShowSubcategory)}
      >
        {category.name}
        <Image
          width={10}
          height={6}
          src={`${imagePaths.icon}/dropdownArrow.svg`}
          alt="Dropdown arrow"
          className={`${isShowSubcategory && "rotate-x-180"} transition-transform duration-300`}
        />
      </div>
      
        <ul className={`${isShowSubcategory ? "max-h-40 mt-2": "max-h-0"} overflow-hidden transition-all duration-300 `}>
          {dummySubcategories
            .filter((subcategory) => subcategory.category === category.name)
            .map((subcategory) => (
              <li key={subcategory.id} className="px-4 py-1">
                {subcategory.name}
              </li>
            ))}
        </ul>
     
    </li>
  );
}
