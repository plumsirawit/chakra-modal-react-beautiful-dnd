import React, { forwardRef } from "react";
import { ItemData } from "./ItemData";
import { Draggable } from "react-beautiful-dnd";

interface IProps {
  item: ItemData;
  index: number;
}
export const Item = forwardRef<any, IProps>((props, ref) => {
  const { item, index } = props;
  return (
    <Draggable draggableId={item.id} index={index} ref={ref}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item.id}
        </div>
      )}
    </Draggable>
  );
});
