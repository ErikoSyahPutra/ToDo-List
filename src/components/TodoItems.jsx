import { TickCircle, Trash } from "iconsax-react";
import React from "react";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {isComplete ? (
          <TickCircle variant="Bold" color="green" size={30} />
        ) : (
          <TickCircle size={30} color="gray" />
        )}
        <p
          className={`capitalize text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <Trash
        onClick={() => {
          deleteTodo(id);
        }}
        className="cursor-pointer"
        size={20}
      />
    </div>
  );
};

export default TodoItems;
