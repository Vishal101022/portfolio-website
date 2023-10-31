// availability component in React

export const AvailabilityStatus = ({
  isAvailable,
}: {
  isAvailable: boolean;
}) => {
  const status = isAvailable ? "Available for Work" : "Not Available";
  const color = isAvailable ? "green" : "red";

  return (
    <div>
      <span
        className={`flex items-center text-sm space-x-2 
        bg-${color}-200/40 px-2 py-1 border rounded-md`}
      >
        <i className={`inline h-2 w-2 rounded-full bg-${color}-500`}></i>
        <span className={`text-${color}-500`}>{status}</span>
      </span>
    </div>
  );
};
