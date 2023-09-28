import Image from "next/image";

interface EmptyProps {
  label: string;
}

export default function Empty({
  label
}: EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative">
        <Image 
          alt="Empty"
          width={400}
          height={400}
          quality={100}
          src="/empty.png"
        />
      </div>
      <p className="pt-5 text-muted-foreground text-md text-center">
        {label}
      </p>
    </div>
  )
}
