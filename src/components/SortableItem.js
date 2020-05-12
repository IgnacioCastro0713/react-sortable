import React from "react";
import { SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white mx-auto m-4 p-4 notification-box flex">
      <div className="pr-2">
        <svg
          className="fill-current text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path
            className="heroicon-ui"
            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.46a1 1 0 0 1 1.42-1.42 3 3 0 0 0 4.24 0 1 1 0 0 1 1.42 1.42 5 5 0 0 1-7.08 0zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />F
        </svg>
      </div>
      <div>
        <div className="text-sm pb-2">{value.title}</div>
        <div className="text-sm text-gray-600  tracking-tight ">
          {value.description}
        </div>
        <div className="text-sm text-gray-500  tracking-tight ">
          {value._id}
        </div>
      </div>
    </div>
  );
});

export default SortableItem;
