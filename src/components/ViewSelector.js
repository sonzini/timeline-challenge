import { viewOptions } from "../utils/viewUtils";

export const ViewSelector = ({ view, setView }) => {
    return (
        <div className="flex items-center border-gray-900 border rounded-lg px-2">
            <div className="text-gray-600">View:</div>
            {Object.keys(viewOptions).map((option, index) => (
                <div key={index} onClick={() => setView(option)} className={`ml-2 p-1 cursor-pointer ${view === option ? 'text-blue-500' : 'text-gray-600'}`}>{option}</div>
            ))}
        </div>
    );
}