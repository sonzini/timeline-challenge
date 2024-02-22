import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

// Data
import timelineItems from '../timelineItems';

// Custom Components
import { Title } from './Title';
import { Event } from './Event';
import { Header } from './Header';

// Custom Hooks
import { useTimeline } from '../hooks/useTimeline';
import { EventDialog } from './EventDialog';
import { viewOptions } from '../utils/viewUtils';
import { ViewSelector } from './ViewSelector';

export const Timeline = () => {
    const [activeEvent, setActiveEvent] = useState(null);
    const [view, setView] = useState('Medium'); // Small, Medium, Large
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 8,
        },
    }))

    const { items, arrayDates, firstDate, updateEvent, addEvent, removeEvent } = useTimeline(timelineItems);

    const handleDragEnd = (event) => {
        const { active, over, collisions } = event;

        if (!collisions.length) {
            return;
        }

        if (active.id !== over.id) {
            const newEvent = {
                ...active.data.current,
                start: dayjs(over.id),
                end: dayjs(over.id).add(active.data.current.length - 1, 'day'),
            };
            updateEvent(active.id, newEvent);
        }
    }

    const handleAddEventClick = () => {
        setActiveEvent({}); // Open dialog
    }

    const handleSaveEvent = (event) => {
        if (activeEvent.id) {
            updateEvent(activeEvent.id, event);
        } else {
            addEvent(event);
        }
        setActiveEvent(null);
    }

    const handleDeleteEvent = (event) => {
        removeEvent(event);
        setActiveEvent(null);
    }

    return (
        <>
            <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
                <Header>
                    <ViewSelector view={view} setView={setView} />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleAddEventClick}>Add Event</button>
                </Header>
                <div className="mx-auto">
                    <div className={'overflow-x-auto bg-transparent'}>
                        <div className='grid gap-2 min-w-10' style={{ gridTemplateColumns: `repeat(${arrayDates.length}, minmax(${viewOptions[view]}px, 1fr))` }}>
                            {arrayDates.map(date => <Title key={date} date={date} />)}
                            {items.map(event =>
                                <Event event={event} key={event.id} firstDate={firstDate} onEdit={setActiveEvent} />
                            )}
                        </div>
                    </div>
                </div>
            </DndContext>
            <EventDialog event={activeEvent} onClose={() => setActiveEvent(null)} onSave={handleSaveEvent} onDelete={handleDeleteEvent} />
        </>
    );
};