const Button = ({link, className, label}) => {
  return (
    <a href={link ? link: null}>
        <button className={`btn ${className ? className : null}`}>{label ? label : null}</button>
    </a>
  )
}

export default Button