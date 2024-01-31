export default function Divider({ margin }: { margin: number }) {
    // this varible is for dynamic color in tailwind
    const possible = [
        "my-1",
        "my-2",
        "my-3",
        "my-4",
        "my-5",
        "my-6",
        "my-7",
        "my-8",
        "my-9",
        "my-10",
    ]
  return (
    <div
      className={`my-${margin} h-0.5 w-full bg-zinc-300 dark:bg-zinc-700`}
    ></div>
  );
}
