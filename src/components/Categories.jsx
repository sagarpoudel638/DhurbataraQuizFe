import React from "react";
import LoksewaIcon from "../assets/images/PSC_logo_Nepal.png"
import ShikshakSewaIcon from "../assets/images/TSC.png"
import BankingSewaIcon from "../assets/images/banks-logo.jpg"
import NepaliArmyIcon from "../assets/images/nepal army.png"
import NepalPoliceIcon from "../assets/images/nepal police.png"
import NursingIcon from "../assets/images/nursing.png"

const Categories = () => {
    const categories = [
        { id: 1, name: "लोकसेवा आयोग", icon: LoksewaIcon},
        { id: 2, name: "शिक्षक सेवा आयोग", icon: ShikshakSewaIcon },
        { id: 3, name: "बैंकिङ सेवा", icon: BankingSewaIcon },
        { id: 4, name: "नेपाल सेना", icon: NepaliArmyIcon },
        { id: 5, name: "नेपाल पुलिस", icon: NepalPoliceIcon },
        { id: 6, name: "नर्सिङ", icon: NursingIcon },
        { id: 7, name: "अन्य स्वास्थ्यसम्बन्धी क्षेत्र", icon: NursingIcon },
      ];
  return (
    <section className="bg-white py-25 dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="border-b border-stroke dark:border-dark-3 pb-2 mb-6">
          <h2 className="text-2xl font-semibold text-[#66E7EC] dark:text-[#66E7EC]">
            Categories
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"> 
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center justify-center p-4 bg-[#66E7EC] text-white rounded-lg shadow-md hover:bg-[#4DBCC8] transition duration-300 cursor-pointer"
            >
              <img src={category.icon} alt={category.name} className="h-16 w-16 object-contain" />
              <h3 className="mt-2 text-lg font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
