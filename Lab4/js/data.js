const tableHeader = {
    title: "Название игры",
    platform: "Платформа",
    year: "Год создания",
    genre: "Жанр",
    rating: "Рейтинг",
    update: "Обновление",
    gameplay: "Ср. длительность, ч",
    players: "Количество игроков"
}

const videoGames = [
    {
        title: "The Witcher 3: Wild Hunt",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2015,
        genre: "РПГ",
        rating: 9.7,
        update: 2022,
        gameplay: 100,
        players: 500000
    },
    {
        title: "Cyberpunk 2077",
        platform: "Windows, PS5, Xbox Series X",
        year: 2020,
        genre: "РПГ",
        rating: 7.5,
        update: 2023,
        gameplay: 60,
        players: 250000
    },
    {
        title: "Red Dead Redemption 2",
        platform: "Windows, PS4, Xbox One",
        year: 2018,
        genre: "Экшен-приключения",
        rating: 9.8,
        update: 2021,
        gameplay: 120,
        players: 300000
    },
    {
        title: "Elden Ring",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X",
        year: 2022,
        genre: "Экшен-РПГ",
        rating: 9.5,
        update: 2023,
        gameplay: 90,
        players: 400000
    },
    {
        title: "Counter-Strike 2",
        platform: "Windows, Linux",
        year: 2023,
        genre: "Шутер",
        rating: 9.0,
        update: 2024,
        gameplay: 500,
        players: 1500000
    },
    {
        title: "Dota 2",
        platform: "Windows, Linux, Mac",
        year: 2013,
        genre: "МОБА",
        rating: 9.2,
        update: 2024,
        gameplay: 1000,
        players: 800000
    },
    {
        title: "League of Legends",
        platform: "Windows, Mac",
        year: 2009,
        genre: "МОБА",
        rating: 8.9,
        update: 2024,
        gameplay: 800,
        players: 12000000
    },
    {
        title: "Valheim",
        platform: "Windows, Linux",
        year: 2021,
        genre: "Выживание",
        rating: 9.0,
        update: 2023,
        gameplay: 80,
        players: 200000
    },
    {
        title: "Minecraft",
        platform: "Windows, Linux, Mac, PS4, Xbox One, Switch",
        year: 2011,
        genre: "Песочница",
        rating: 9.5,
        update: 2024,
        gameplay: 500,
        players: 15000000
    },
    {
        title: "Grand Theft Auto V",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X",
        year: 2013,
        genre: "Экшен-приключения",
        rating: 9.6,
        update: 2023,
        gameplay: 200,
        players: 2000000
    },
    {
        title: "Fortnite",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X, Switch",
        year: 2017,
        genre: "Королевская битва",
        rating: 8.5,
        update: 2024,
        gameplay: 300,
        players: 5000000
    },
    {
        title: "Apex Legends",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X, Switch",
        year: 2019,
        genre: "Королевская битва",
        rating: 8.7,
        update: 2024,
        gameplay: 250,
        players: 1800000
    },
    {
        title: "Call of Duty: Warzone",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X",
        year: 2020,
        genre: "Шутер",
        rating: 8.3,
        update: 2024,
        gameplay: 150,
        players: 3000000
    },
    {
        title: "Starfield",
        platform: "Windows, Xbox Series X",
        year: 2023,
        genre: "РПГ",
        rating: 7.8,
        update: 2024,
        gameplay: 70,
        players: 350000
    },
    {
        title: "Baldur's Gate 3",
        platform: "Windows, PS5, Mac",
        year: 2023,
        genre: "РПГ",
        rating: 9.9,
        update: 2024,
        gameplay: 120,
        players: 600000
    },
    {
        title: "Hogwarts Legacy",
        platform: "Windows, PS5, Xbox Series X, Switch",
        year: 2023,
        genre: "Экшен-РПГ",
        rating: 8.5,
        update: 2023,
        gameplay: 50,
        players: 400000
    },
    {
        title: "God of War: Ragnarök",
        platform: "PS4, PS5",
        year: 2022,
        genre: "Экшен-приключения",
        rating: 9.4,
        update: 2023,
        gameplay: 40,
        players: 500000
    },
    {
        title: "The Last of Us Part II",
        platform: "PS4, PS5",
        year: 2020,
        genre: "Экшен-приключения",
        rating: 9.2,
        update: 2024,
        gameplay: 30,
        players: 300000
    },
    {
        title: "Horizon Forbidden West",
        platform: "PS4, PS5",
        year: 2022,
        genre: "Экшен-РПГ",
        rating: 9.0,
        update: 2023,
        gameplay: 60,
        players: 350000
    },
    {
        title: "Stardew Valley",
        platform: "Windows, PS4, Xbox One, Switch, Mobile",
        year: 2016,
        genre: "Симулятор",
        rating: 9.3,
        update: 2023,
        gameplay: 150,
        players: 200000
    },
    {
        title: "Terraria",
        platform: "Windows, PS4, Xbox One, Switch, Mobile",
        year: 2011,
        genre: "Приключения",
        rating: 9.2,
        update: 2023,
        gameplay: 200,
        players: 300000
    },
    {
        title: "Rocket League",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2015,
        genre: "Спорт",
        rating: 8.8,
        update: 2024,
        gameplay: 300,
        players: 800000
    },
    {
        title: "Among Us",
        platform: "Windows, PS4, Xbox One, Switch, Mobile",
        year: 2018,
        genre: "Партийная",
        rating: 8.0,
        update: 2023,
        gameplay: 20,
        players: 500000
    },
    {
        title: "Fallout 4",
        platform: "Windows, PS4, Xbox One",
        year: 2015,
        genre: "РПГ",
        rating: 8.7,
        update: 2023,
        gameplay: 80,
        players: 200000
    },
    {
        title: "The Elder Scrolls V: Skyrim",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2011,
        genre: "РПГ",
        rating: 9.4,
        update: 2021,
        gameplay: 200,
        players: 250000
    },
    {
        title: "Destiny 2",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X",
        year: 2017,
        genre: "Шутер",
        rating: 8.5,
        update: 2024,
        gameplay: 500,
        players: 1000000
    },
    {
        title: "Hades",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2020,
        genre: "Рогалик",
        rating: 9.4,
        update: 2021,
        gameplay: 60,
        players: 150000
    },
    {
        title: "Dead Cells",
        platform: "Windows, PS4, Xbox One, Switch, Mobile",
        year: 2018,
        genre: "Рогалик",
        rating: 9.0,
        update: 2023,
        gameplay: 40,
        players: 100000
    },
    {
        title: "Genshin Impact",
        platform: "Windows, PS4, PS5, Mobile",
        year: 2020,
        genre: "Экшен-РПГ",
        rating: 8.7,
        update: 2024,
        gameplay: 200,
        players: 5000000
    },
    {
        title: "Diablo IV",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X",
        year: 2023,
        genre: "Экшен-РПГ",
        rating: 8.3,
        update: 2024,
        gameplay: 100,
        players: 700000
    },
    {
        title: "Overwatch 2",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X, Switch",
        year: 2022,
        genre: "Шутер",
        rating: 7.8,
        update: 2024,
        gameplay: 150,
        players: 1200000
    },
    {
        title: "Palworld",
        platform: "Windows, Xbox Series X",
        year: 2024,
        genre: "Выживание",
        rating: 8.5,
        update: 2024,
        gameplay: 50,
        players: 800000
    },
    {
        title: "Helldivers 2",
        platform: "Windows, PS5",
        year: 2024,
        genre: "Шутер",
        rating: 8.7,
        update: 2024,
        gameplay: 40,
        players: 400000
    },
    {
        title: "Persona 5 Royal",
        platform: "Windows, PS4, PS5, Xbox Series X, Switch",
        year: 2019,
        genre: "РПГ",
        rating: 9.6,
        update: 2022,
        gameplay: 120,
        players: 200000
    },
    {
        title: "Dark Souls III",
        platform: "Windows, PS4, Xbox One",
        year: 2016,
        genre: "Экшен-РПГ",
        rating: 9.3,
        update: 2017,
        gameplay: 70,
        players: 150000
    },
    {
        title: "Sekiro: Shadows Die Twice",
        platform: "Windows, PS4, Xbox One",
        year: 2019,
        genre: "Экшен-приключения",
        rating: 9.5,
        update: 2020,
        gameplay: 50,
        players: 180000
    },
    {
        title: "Resident Evil 4 Remake",
        platform: "Windows, PS4, PS5, Xbox Series X",
        year: 2023,
        genre: "Хоррор на выживание",
        rating: 9.2,
        update: 2023,
        gameplay: 25,
        players: 300000
    },
    {
        title: "Star Wars Jedi: Survivor",
        platform: "Windows, PS5, Xbox Series X",
        year: 2023,
        genre: "Экшен-приключения",
        rating: 8.5,
        update: 2023,
        gameplay: 30,
        players: 250000
    },
    {
        title: "Doom Eternal",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2020,
        genre: "Шутер",
        rating: 9.0,
        update: 2021,
        gameplay: 20,
        players: 200000
    },
    {
        title: "Halo Infinite",
        platform: "Windows, Xbox One, Xbox Series X",
        year: 2021,
        genre: "Шутер",
        rating: 8.2,
        update: 2023,
        gameplay: 40,
        players: 300000
    },
    {
        title: "Metro Exodus",
        platform: "Windows, PS4, Xbox One, Linux",
        year: 2019,
        genre: "Шутер",
        rating: 8.7,
        update: 2021,
        gameplay: 30,
        players: 100000
    },
    {
        title: "No Man's Sky",
        platform: "Windows, PS4, PS5, Xbox One, Xbox Series X, Switch",
        year: 2016,
        genre: "Приключения",
        rating: 8.3,
        update: 2024,
        gameplay: 100,
        players: 150000
    },
    {
        title: "Subnautica",
        platform: "Windows, PS4, Xbox One, Switch",
        year: 2018,
        genre: "Выживание",
        rating: 9.1,
        update: 2021,
        gameplay: 40,
        players: 120000
    },
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: "Switch",
        year: 2017,
        genre: "Экшен-приключения",
        rating: 9.7,
        update: 2017,
        gameplay: 100,
        players: 500000
    },
    {
        title: "Super Mario Odyssey",
        platform: "Switch",
        year: 2017,
        genre: "Платформер",
        rating: 9.6,
        update: 2017,
        gameplay: 30,
        players: 400000
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: "Switch",
        year: 2020,
        genre: "Симулятор",
        rating: 8.9,
        update: 2021,
        gameplay: 200,
        players: 600000
    }
];