import { useEffect, useState } from "react";
import dayjs from "dayjs";
import DatePicker from "react-tailwindcss-datepicker";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { DATE_FORMAT } from "../utils/dateUtils";

export const EventDialog = ({ event, onSave, onDelete, onClose }) => {
    const [name, setName] = useState('');
    const [dates, setDates] = useState({
        startDate: null,
        endDate: null,
    });

    const handleSubmit = () => {
        const newEvent = {
            ...event,
            name,
            start: dayjs(dates.startDate),
            end: dayjs(dates.endDate),
        };

        onSave(newEvent);
    }

    // Update event data when opening the dialog
    useEffect(() => {
        setName(event && event.name ? event.name : '');
        setDates({
            startDate: event && event.start ? event.start.toDate() : null,
            endDate: event && event.end ? event.end.toDate() : null,
        });
    }, [event]);

    const action = event && event.id ? 'Edit' : 'Create';
    const title = event && event.id ? `Edit event ${event.id}` : 'Create new event';

    return (
        <Dialog open={!!event} handler={onClose} size="xs" aria-hidden>
            <DialogHeader>{title}</DialogHeader>
            <DialogBody>
                <div className="flex flex-col gap-2">
                    <form>
                        <div className="grid">
                            <div className="col-span-3">
                                <label htmlFor="name" className="block mt-4 text-md font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete='off'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                                />
                            </div>
                            <div className="col-span-3">
                                <label htmlFor="start" className="block mt-4 text-md font-medium leading-6 text-gray-900">
                                    Dates
                                </label>
                                <DatePicker
                                    className="start border-2 border-pink-300 placeholder-gray-500 rounded-2xl w-full h-12 p-5 outline-none"
                                    value={dates}
                                    onChange={(v) => setDates(v)}
                                    displayFormat={DATE_FORMAT}
                                    useRange={false}
                                    startFrom={dayjs("2021-01-01", DATE_FORMAT)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </DialogBody >
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={onClose}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                {action === 'Edit' && (
                    <Button variant="text" color="red" onClick={() => onDelete(event.id)} className="mr-1">
                        <span>Delete</span>
                    </Button>
                )}
                <Button variant="gradient" color="green" onClick={handleSubmit}>
                    <span>{action}</span>
                </Button>
            </DialogFooter>
        </Dialog >
    )
}