

const tagStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  p: 'text-base',
  span: 'text-base',
};

const Typography = ({
  tag = "p",
  className,
  children
}) => {

  const Tag = tagStyles.hasOwnProperty() ? tag : "p";
  return (
    <Tag className={`font-sans text-nowrap leading-6 tracking-normal text-[#000000] ${tagStyles[Tag]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Typography