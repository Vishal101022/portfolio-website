// availability component in React

export const AvailabilityStatus = ({
  isAvailable,
}: {
  isAvailable: boolean;
}) => {
  const status = isAvailable ? "Available for Work" : "Not Available";

  return (
    <div>
      <span
        className={`flex items-center text-sm space-x-2 
        ${
          isAvailable ? "bg-green-200/40" : "bg-red-200/40"
        } px-2 py-1 border rounded-md`}
      >
        <i
          className={`inline h-2 w-2 rounded-full ${
            isAvailable ? "bg-green-500" : "bg-red-500"
          }`}
        ></i>
        <span className={`${isAvailable ? "text-green-500" : "text-red-500"}`}>
          {status}
        </span>
      </span>
    </div>
  );
};
