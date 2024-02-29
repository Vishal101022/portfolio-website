function Loading() {
  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-rose-400"></div>
      <div>
        <h1 className="text-xl ">Loading...</h1>
      </div>
    </div>
  );
}
export default Loading;
