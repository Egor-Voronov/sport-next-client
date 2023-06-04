import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { useStyles } from "./styles";
import { TbCheck } from "react-icons/tb";
import image from "public/assets/logo.svg";
import Link from "next/link";
import { useContext } from "react";
import { LinksContext } from "../../../ui/NavigationLinks/NavigationLinksContext";

export const AboutHero = () => {
  const { classes } = useStyles();
  const { active, setActiveLink } = useContext(LinksContext);

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>SPORT NEXT</span> - <br /> Мы
              предоставляем лучшие спортивные товары
            </Title>
            <Text color="dimmed" mt="md">
              Мы предлагаем широкий ассортимент высококачественных спортивных
              товаров. Независимо от вашего уровня подготовки или предпочтений в
              спорте, мы стремимся быть вашим надежным партнером в достижении
              успеха.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <TbCheck size={rem(10)} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Высокое качество</b> – Наша команда постоянно отбирает только
                самые качественные спортивные товары, чтобы обеспечить вам
                надежность, долговечность и удовлетворение в каждой покупке.
              </List.Item>
              <List.Item>
                <b>Доступные цены</b> – Мы гордимся предлагаемыми нами
                конкурентоспособными ценами, чтобы сделать спортивные товары
                доступными для всех.
              </List.Item>
              <List.Item>
                <b>Широкий выбор</b> – Мы предлагаем разнообразие спортивных
                товаров, чтобы удовлетворить любые потребности и предпочтения
                спортсменов и спортивных энтузиастов.
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="/catalog" onClick={() => setActiveLink("/catalog")}>
                <Button radius="xl" size="md" className={classes.control}>
                  В каталог
                </Button>
              </Link>
              <Link href="/reviews" onClick={() => setActiveLink("/reviews")}>
                <Button
                  variant="default"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  Смотреть отзывы
                </Button>
              </Link>
            </Group>
          </div>
          <Image
            alt="Логотип компании"
            src={image.src}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
};
