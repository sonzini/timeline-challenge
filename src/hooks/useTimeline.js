import { useMemo, useState } from "react";
import { getArrayDates, getFirstDate, getLastDate } from "../utils/dateUtils";
import { formatEvent, sortEvents } from "../utils/eventUtils";
import { getTimelineItems } from "../utils/timelineUtils";

export const useTimeline = (defaultValues = []) => {
    const [events, setEvents] = useState(() => sortEvents(defaultValues.map(formatEvent)));

    // Get dates
    const firstDate = useMemo(() => getFirstDate(events), [events]);
    const lastDate = useMemo(() => getLastDate(events), [events]);
    const arrayDates = useMemo(() => getArrayDates(firstDate, lastDate), [firstDate, lastDate]);

    const items = useMemo(() => getTimelineItems(events), [events]);

    // Actions
    const addEvent = (event) => {
        // Fake id
        const id = Math.random().toString(36).substr(2, 9);
        const newEvents = sortEvents([...events, formatEvent({ ...event, id })]);
        setEvents(newEvents);
    }

    const removeEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    }

    const updateEvent = (id, newEvent) => {
        const newEvents = sortEvents(events.map(event => event.id === id ? formatEvent(newEvent) : event));
        setEvents(newEvents);
    }

    return {
        items,
        firstDate,
        arrayDates,
        addEvent,
        removeEvent,
        updateEvent,
    };
}