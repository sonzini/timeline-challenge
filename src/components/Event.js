import { useDraggable } from '@dnd-kit/core';

export const Event = ({ event, firstDate, onEdit }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: event.id,
        data: event,
    });

    const shift = event.start.diff(firstDate, 'day') + 1;
    const title = event.start.isSame(event.end, 'day') ? event.start.format('MMM DD') : `${event.start.format('MMM DD')} - ${event.end.format('MMM DD')}`;

    const style = {
        gridColumn: `${shift} / ${shift + event.length}`,
        transform: `${transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : ''}`
    };

    return (
        <div style={style} ref={setNodeRef} onClick={() => onEdit(event)} {...listeners} {...attributes}>
            <div className='p-1 pl-3 h-20 rounded-md bg-blue-100 border-l-4 border-l-blue-400 overflow-hidden'>
                <div className="text-gray-800">{title}</div>
                <div className='overflow-hidden text-ellipsis'>{event.name}</div>
            </div>
        </div>
    );
}