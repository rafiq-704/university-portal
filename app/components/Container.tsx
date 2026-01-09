
const Container = ({children, className='py-12 md:py-24'}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 md:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container
