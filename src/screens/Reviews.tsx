import { Meta } from "src/components/Meta";
import type { FC } from "react";
import { ReviewsHeroModule } from "../modules/Hero/ReviewsHero";

export const Reviews: FC = () => {
  return (
    <>
      <Meta
        title="Отзывы"
        description="Мнение пользователей о продукции, производимой Sport-Next"
      />
      <ReviewsHeroModule />
    </>
  );
};
