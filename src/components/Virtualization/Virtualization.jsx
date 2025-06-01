import { Link } from "react-router";
import { useState } from "react";

const itemHeight = 40;
const virtualContainerHeight = 400;

const Virtualization = () => {
  const elementsNum = Math.floor(virtualContainerHeight / itemHeight);
  const [itemsList, setItemList] = useState([0, elementsNum]);
  const virtualArr = Array.from({ length: 10000 }, (_, index) => index);

  //   console.log(endIndex);
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + elementsNum;
    setItemList([startIndex, endIndex]);
  };

  return (
    <div className="py-5">
      <header className="flex h-10 justify-between px-4">
        <h1 className="text-2xl font-semibold">Virtualization</h1>
        <div className="flex items-center">
          <Link to="/" className="hover:text-red-400">
            Back to Home
          </Link>
        </div>
      </header>

      <div
        className={
          "w-[400px] border mx-auto bg-gray-100 overflow-auto " +
          (virtualContainerHeight === 400 ? "h-[400px]" : "")
        }
        onScroll={(e) => handleScroll(e)}
      >
        <div
          className="relative"
          style={{ height: virtualArr.length * itemHeight }}
        >
          {virtualArr.slice(itemsList[0], itemsList[1]).map((item, index) => {
            // console.log((itemsList[0] + index) * itemHeight + 10);
            console.log(index);
            return (
              <div
                key={index}
                className={
                  "bg-amber-400 border-t-2 absolute w-full " +
                  (itemHeight === 40 ? "h-[40px]" : "")
                }
                // style={{ top: (itemsList[0] + index) * itemHeight }}
                style={{ transform: `translateY(${(itemsList[0] + index) * itemHeight}px)` }}
              >
                Item Number-{item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Virtualization;
