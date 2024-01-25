// availability component in React

export const AvailabilityStatus = ({
  isAvailable,
}: {
  isAvailable: boolean;
}) => {
  const status = isAvailable ? "Available for Work" : "Not Available";
  const colors = isAvailable ? "green" : "red";
  // this varible is for dynamic color in tailwind
  const possible = [
    "bg-green-200/40",
    "bg-red-200/40",
    "text-green-500",
    "text-red-500",
    "bg-green-500",
    "bg-red-500",
  ];
  return (
    <div>
      <span
        className={`flex items-center text-sm space-x-2 bg-${colors}-200/40 px-2 py-1 border rounded-md`}
      >
        {/* dot icon */}
        <i className={`inline h-2 w-2 rounded-full bg-${colors}-500`}></i>
        {/* text */}
        <span className={`text-${colors}-500`}>{status}</span>
      </span>
    </div>
  );
};
