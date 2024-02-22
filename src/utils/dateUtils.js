import dayjs from "dayjs";

export const DATE_FORMAT = 'YYYY-MM-DD';

export const getFirstDate = (events) => {
    const defaultFirstDate = dayjs().subtract(1, 'day');

    if (!events.length) {
        return defaultFirstDate;
    }

    return events[0].start;

}

export const getLastDate = (events) => {
    const defaultLastDate = dayjs().add(1, 'day');

    if (!events.length) {
        return defaultLastDate;
    }

    return events.reduce((acc, event) => event.end.isAfter(acc) ? event.end : acc, events[0].start);
}

export const getArrayDates = (startDate, lastDate) => {
    const dateArray = [];
    let currentDate = dayjs(startDate);


    while (currentDate.isBefore(lastDate) || currentDate.isSame(lastDate)) {
        dateArray.push(currentDate);
        currentDate = currentDate.add(1, 'day');
    }
    return dateArray;
}