import { cn } from "../lib/utils/cn";

const ReviewsCard = (props) => {
  const { img, name, type, onClick, active } = props || {}
  
  return (
    <button
      className={cn(
        'inline-flex justify-start items-center border border-primary rounded-20 py-[1px] px-5 lg:w-[491px] md:w-[400px] w-[300px] h-[92px] my-1',
        active && 'bg-gradient-primary text-white'
      )}
      onClick={onClick}
    >
      <img src={img} alt="" />
      <div className="text-start">
        <p>{name}</p>
        <p>{type}</p>
      </div>
    </button>
  )
}

export default ReviewsCard
