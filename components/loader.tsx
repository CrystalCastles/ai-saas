import Image from "next/image"

export default function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-14 h-10 relative animate-pulse">
        <Image alt="logo" fill src="/loading-logo.png" />
      </div>
      <p className="text-md text-muted-foreground">
        rectifAI is thinking...
      </p>
    </div>
  )
}
