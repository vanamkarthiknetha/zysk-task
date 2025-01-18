/* eslint-disable react/prop-types */
import { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <ul className="">
      
      {items.map((item, index) => (
        <li className={index == items.length-1 ? 'pt-5': ' border-b border-[#EAECF0] pb-8 pt-5'} key={item.title}>
          <a className="flex justify-between cursor-pointer"  onClick={() => handleClick(index)}>
            <p className="font-medium text-lg">
              {item.title}
            </p>
            {
             index !== activeIndex && <img src="Faq/plus-circle.png" alt="" className="h-6" />    
            }
            {
             index === activeIndex && <img src="Faq/minus-circle.png" alt="" className="h-6" />    
            }
          </a>
          {index === activeIndex && (
            <div className="font-normal text-[#475467] pt-3">
              <p>
                {item.content}
              </p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
export default Accordion;
