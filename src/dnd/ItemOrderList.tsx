import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ItemData } from "./ItemData";
import { Item } from "./Item";

interface IProps {
  initItems: ItemData[];
}
/**
 * A component for intuitive reordering using drag and drop
 * @param props see IProps
 */
export const ItemOrderList = (props: IProps) => {
  const { initItems } = props;
  const [orderState, setOrderState] = useState<number[]>(
    initItems.map((item, idx) => idx)
  );
  useEffect(() => {
    setOrderState(initItems.map((item, idx) => idx));
  }, [initItems]);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="hello">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ overflow: "hidden" }}
          >
            {orderState.map((val, idx) => {
              const item = initItems[val];
              return <Item key={item.id} item={item} index={idx} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
