import { useState } from 'react'
import { Star } from '../Icons'
import SectionTitle from '../common/SectionTitle'
import Container from '../common/container'
import { ReviewsData } from '../lib/db'
import { cn } from '../lib/utils/cn'
import ReviewsCard from './ReviewsCard'

const Reviews = () => {
  const [Active, setActive] = useState(1)
  const ActiveReview = ReviewsData[Active]
  return (
    <Container className="p-[80px] bg-[#F6F6F6] mt-6">
      <SectionTitle gradient="Our Client" className="text-center">
        Reviews From
      </SectionTitle>

      <div className="p-10">
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
          <div className="flex justify-between gap-5">
            <div className="bg-[#E2DED8] lg:ms-0 md:ms-2 ms-3 w-[5px] flex flex-col justify-between">
              <div className="flex flex-col justify-between gap-5">
                {Array.from(Array(3).keys()).map((el, i) => (
                  <div
                    key={i}
                    className={cn(
                      'w-[5px] h-[92px]',
                      el === Active && 'bg-gradient-primary'
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              {ReviewsData.map((props, i) => (
                <ReviewsCard
                  key={i}
                  {...props}
                  active={Active === i}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:w-[575px] md:w-[400px] w-[300px] ms-10">
            <h1 className="font-nunito-sans font-bold lg:text-3xl text-2xl leading-7 lg:leading-10 text-secondary">
              {ActiveReview.review.title}
            </h1>
            <div className="flex gap-1 justify-start items-center">
              {Array.from(Array(ActiveReview.review.stars).keys()).map(el => (
                <Star key={el} />
              ))}
            </div>
            <p className="font-nunito-sans text-base leading-5 text-accent">
              {ActiveReview.review.details}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Reviews
