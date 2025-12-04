

const CustomImage = ({
  imgSrc,
  imgAlt,
  className,
}) => {
  return (
    <img src={imgSrc} alt={imgAlt} className={className} />
  )
}

export default CustomImage