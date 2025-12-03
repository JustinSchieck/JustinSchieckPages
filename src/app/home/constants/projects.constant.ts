export interface Project {
  title: string;
  image?: string;
  description: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Who's That Pokémon\nDiscord Bot",
    image: 'assets/projects/WhosThatPokemon.png',
    description:
      'A Discord bot that challenges users to identify Pokémon based on silhouetted images. Built using Discord.js and the PokéAPI, the bot features multiple game modes, a scoring system, and interactive commands to enhance user engagement within Discord servers.',
    link: 'https://github.com/JustinSchieck/PokemonDiscordBot',
  },
  {
    title: 'Retroboard Tool',
    image: 'assets/projects/RetroboardTool.png',
    description:
      'A Retroboard Site that allows teams to have clean and concise retro meetings, with all the normal retro meeting standards in mind',
    link: 'https://github.com/JustinSchieck/RetroboardTool',
  },
  {
    title: 'Developer Formatter Tools',
    link: 'https://github.com/JustinSchieck/JsonToAnyFormatter',
    description:
      'A PowerShell-based utility for converting JSON data into various file formats for API testing. Developed to provide a secure, local alternative to online formatting tools, ensuring data privacy and convenience. Was made as part of needing these tools frequently while working with APIs.',
  },
  {
    title: '"What Do You Want?" App',
    description:
      'An app made for my family to keep track of what everyone wants for birthdays and holidays. Getting thier list of wants in one place makes it easy to shop for gifts and ensure everyone gets something they really want.',
  },
  {
    title: 'Advent of Code 2025',
    description:
      'A collection of solutions for Advent of Code 2025 programming challenges. Built as a learning exercise to explore different algorithms, data structures, and problem-solving approaches while improving coding proficiency.',
  },
  {
    title: 'NeuroSpark Task App',
    image: 'assets/projects/tasklist.png',
    description:
      'A task-tracking app designed with focus and productivity in mind and utilization for those with memory issues or disablilties. Built with Angular, Tailwind, and using localStorage. Future plans are to add database connections to the app allowing for user authentication, multiple task lists as well as long term task storage',
  },
];
