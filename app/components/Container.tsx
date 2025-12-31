
const Container = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`max-w-7xl mx-auto w-full py-12 md:py-24 ${className}`}>
      {children}
    </div>
  )
}

export default Container
