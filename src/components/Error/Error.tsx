export default function Error({children} : {children: string}) {
  return (
    <p className="error">
            <span>⛔️ </span>{children}
          </p>
  )
}
