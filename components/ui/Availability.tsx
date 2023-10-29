// availability component in React

export const AvailabilityStatus = ({isAvailable}: {isAvailable:boolean}) => {
  return (
    <div>
       <p>{isAvailable ? "Available for Work" : "Not Available"}</p>
    </div>
  )
}
