const ProblemSolutionCard = ({ img, title, des1, des2 }) => {
  return (
    <>
      <div className="w-[272px] h-[349px] flex gap-3 flex-col shadow-lg p-5 hover:bg-gradient-primary group hover:cursor-pointer transition-all duration-300 rounded-20">
        <div className="flex flex-col gap-3">
          <div className="space-y-3">
            <img
              src={img}
              alt={title}
              className="bg-gradient-primary rounded-full h-[58px] w-[58px]"
            />
            <h3 className="group-hover:text-white text-secondary font-bold font-nunito-sans text-[18px] leading-6 ">
              {title}
            </h3>
          </div>
          <div className="space-y-3">
            <p className="group-hover:text-white text-accent">{des1}</p>
            {des2 && (
              <p className="group-hover:text-white text-accent">{des2}</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemSolutionCard
