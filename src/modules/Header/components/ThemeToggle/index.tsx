import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { TbSun, TbMoonStars } from "react-icons/tb";

export const ThemeToggle = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" my="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark' ? <TbSun size="1.1rem" /> : <TbMoonStars size="1.2rem" />}
            </ActionIcon>
        </Group>
    );
}