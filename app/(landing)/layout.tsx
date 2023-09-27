export default function LandingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full overflow-auto">
      <video className="w-full h-full object-cover fixed z-[-1]" src="/bg-video.mp4" autoPlay loop muted/>
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
  )
}
