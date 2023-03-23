

export default function Stack({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 max-w-xl">{children}</div>;
}
