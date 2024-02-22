const getRow = (events) => {
    const result = []
    const remain = []
    let lastRowDate = null;

    events.forEach(event => {
        const eventStart = event.start;
        const eventEnd = event.end;
        
        if (!lastRowDate || eventStart.isAfter(lastRowDate)) {
            result.push(event);
            lastRowDate = eventEnd;
        } else {
            remain.push(event);
        }
    });

    return { result, remain };
}

/*
    check start date of event and store it in a row
    check if previous event has ended, if not, add to the same row
    return all the items in a single array to be rendered
*/
export const getTimelineItems = (events) => {
    const items = [];
    let rem = events;

    while (rem.length) {
        const { result, remain } = getRow(rem);
        items.push(result);
        rem = remain;
    }

    return items.flat();
}
