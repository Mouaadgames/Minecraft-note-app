function BackShadow() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0009] to-transparent to-20%"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-[#0009] to-transparent to-20%"></div>
    </div>
  )
}
export default BackShadow