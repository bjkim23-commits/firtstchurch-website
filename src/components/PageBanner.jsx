export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative py-24 md:py-32 text-center text-white overflow-hidden">
      {image ? (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F2440]/90 via-[#1B3A5C]/85 to-[#2A5A8C]/75" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2440] via-[#1B3A5C] to-[#2A5A8C]" />
      )}
      <div className="relative z-10 max-w-[680px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
        {subtitle && <p className="text-base md:text-lg font-light opacity-75">{subtitle}</p>}
      </div>
    </section>
  )
}
