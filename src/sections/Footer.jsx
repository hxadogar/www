const Footer = () => {
  
    const year = new Date().getFullYear()
    
  return (
    <footer className="mt-20 mb-12 flex flex-col justify-center items-center">
        <p className="tracking-widest font-light font-Rubik">&copy; {year} HxaDogar <br /> All right Reserved.</p>
    </footer>
  )
}

export default Footer