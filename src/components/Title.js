import dayjs from "dayjs";
import { useDroppable } from '@dnd-kit/core';

export const Title = ({ date }) => {
    const { isOver, setNodeRef } = useDroppable({
        id: date.toString(),
    });

    const style = {
        backgroundColor: isOver ? 'green' : undefined,
        color: isOver ? 'white' : undefined,
    };

    return (
        <div className="col-span-1 p-1 h-10 rounded-lg overflow-hidden" ref={setNodeRef} style={style}>
            <div className="font-bold text-center border-b-2 p-1">
                {dayjs(date).format('DD/MM').toString()}
            </div>
        </div>
    );
}