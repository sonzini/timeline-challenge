import dayjs from "dayjs";

import { DATE_FORMAT } from "./dateUtils";

export const formatEvent = (event) => {
    const start = dayjs(event.start, DATE_FORMAT);
    const end = dayjs(event.end, DATE_FORMAT);

    return {
        ...event,
        start,
        end,
        length: end.diff(start, 'day') + 1,
    };
}

export const sortEvents = (events) => {
    return events.sort((a, b) => a.start.diff(b.start, 'day'));
}