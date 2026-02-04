import { useState } from "react"



export default function Box({children}:{children: React.ReactNode}) {
  const [isClosed, setIsClosed] = useState(false)


  return (
    <div className="box">
          <button className="btn-toggle" onClick={()=>setIsClosed(!isClosed)}>{isClosed? '+' : '–'}</button>
          {isClosed? '' : children}
    </div>
  )
}


