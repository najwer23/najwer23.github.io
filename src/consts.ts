interface ItemLink {
  itemLink: string;
  itemLinkText: string;
  itemLinkType: "hash" | "link" | "linkOut";
}

interface ItemGroup {
  menuTitle: string;
  items: ItemLink[];
}

interface MENU_ASIDE_Props {
  menuItems: ItemGroup[][];
}

export const MENU_ASIDE: MENU_ASIDE_Props = {
  menuItems: [
    [
      {
        menuTitle: "Menu",
        items: [
          {
            itemLink: "",
            itemLinkText: "Home",
            itemLinkType: "hash",
          },
          {
            itemLink: "weather",
            itemLinkText: "Weather",
            itemLinkType: "hash",
          },
          {
            itemLink: "contact",
            itemLinkText: "Contact",
            itemLinkType: "hash",
          },
        ],
      },
      {
        menuTitle: "Projects",
        items: [
          {
            itemLink: "https://leetcode.com/najwer23/",
            itemLinkText: "Leetcode",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://najwer23.github.io/react-redux-ts/",
            itemLinkText: "Geometric figures",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://najwer23.github.io/sudoku/",
            itemLinkText: "Sudoku",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://jabber.cyclic.app/",
            itemLinkText: "Jabber",
            itemLinkType: "linkOut",
          },
          {
            itemLink:
              "https://najwer23.github.io/najwer23storybook/?path=/docs/getting-started--docs",
            itemLinkText: "Design system",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://tueuropa.pl/ubezpieczenia-mieszkania-i-domu.htm",
            itemLinkText: "My house",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://restilo.pl/",
            itemLinkText: "Restilo",
            itemLinkType: "linkOut",
          },
          {
            itemLink:
              "https://tueuropa.pl/ubezpieczenia-sportowe/ubezpieczenie-nnw-sport.htm",
            itemLinkText: "Active in Sport",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://tueuropa.pl/ubezpieczenia-turystyczne.htm",
            itemLinkText: "Itravel",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://tvn24.pl/",
            itemLinkText: "Tvn24",
            itemLinkType: "linkOut",
          },
          {
            itemLink: "https://tvn.pl/programy/top-model",
            itemLinkText: "Top model",
            itemLinkType: "linkOut",
          },
        ],
      },
    ],
  ],
};
