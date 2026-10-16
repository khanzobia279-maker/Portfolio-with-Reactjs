const GradientButton = ({ text, link, className = '' }) => {
  return (
    <a
      href={link}
      className={`btn ${className} min-w-51.25 rounded-full border-2 border-transparent px-12 py-2 text-center font-heading uppercase lg:py-3`}
    >
      {text}
    </a>
  )
}

export default GradientButton
