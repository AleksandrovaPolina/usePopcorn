


export default function Box({children}:{children: React.ReactNode}) {
  return (
    <div className="box">
          <button className="btn-toggle">–</button>
          {children}
        </div>
  )
}
