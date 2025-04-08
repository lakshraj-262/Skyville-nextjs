const Section = ({ className, id, customPaddings, children }) => {
  const paddingClasses = customPaddings
    ? customPaddings
    : "py-10 lg:py-16 xl:py-20";

  return (
    <div
      id={id}
      className={`relative ${paddingClasses} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
