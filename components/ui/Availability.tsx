// availability component in React

export const AvailabilityStatus = ({
  isAvailable,
}: {
  isAvailable: boolean;
}) => {
  return (
    <div>
      {isAvailable ? (
        <span className="flex   text-sm items-center space-x-2 bg-green-200/40 px-2 py-1 border rounded-md">
          <i className="inline h-2 w-2 rounded-full bg-green-500"></i>
          <span className="text-green-500">Available for Work</span>
        </span>
      ) : (
        <span className="flex  items-center text-sm space-x-2 bg-red-200/40 px-2 py-1 border rounded-md">
          <i className="inline h-2 w-2 rounded-full bg-red-500"></i>
          <span className="text-red-500">Not Available</span>
        </span>
      )}
    </div>
  );
};
