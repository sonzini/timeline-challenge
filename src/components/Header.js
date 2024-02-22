export const Header = ({ children }) => (
    <div className='flex mb-10 p-4 shadow-lg'>
        <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold mt-1">Timeline</h1>
            <span className="text-sm text-gray-400">By Jorge Mariel</span>
        </div>
        <div className='ml-auto flex gap-4'>
            {children}
        </div>
    </div>
)