import { StarIcon } from "@/assets/icons/CommonIcons";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex gap-[4px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          fill={star <= rating ? "#FFD700" : "#E5E5E5"}
          stroke={star <= rating ? "#FFD700" : "#E5E5E5"}
          className="w-5 h-5 md:w-6 md:h-6 xl:w-9 xl:h-9"
        />
      ))}
    </div>
  );
};

export default StarRating;
