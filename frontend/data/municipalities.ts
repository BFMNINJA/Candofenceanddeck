export interface Municipality {
  name: string;
  slug: string;
  region?: string;
}

const municipalities: Municipality[] = [
  { name: "Toronto", slug: "toronto", region: "City of Toronto" },
  { name: "Vaughan", slug: "vaughan", region: "York Region" },
  { name: "Stouffville", slug: "stouffville", region: "York Region" },
  { name: "Markham", slug: "markham", region: "York Region" },
  { name: "Milton", slug: "milton", region: "Halton Region" },
  { name: "Newmarket", slug: "newmarket", region: "York Region" },
  { name: "Brampton", slug: "brampton", region: "Peel Region" },
  { name: "Caledon", slug: "caledon", region: "Peel Region" },
  { name: "King City", slug: "king-city", region: "York Region" },
  { name: "Woodbridge", slug: "woodbridge", region: "York Region" },
  { name: "Richmond Hill", slug: "richmond-hill", region: "York Region" },
  { name: "Thornhill", slug: "thornhill", region: "York Region" },
  { name: "Aurora", slug: "aurora", region: "York Region" },
  { name: "Maple", slug: "maple", region: "York Region" },
  {
    name: "East Gwillimbury",
    slug: "east-gwillimbury",
    region: "York Region",
  },
  {
    name: "West Gwillimbury",
    slug: "west-gwillimbury",
    region: "Simcoe County",
  },
  { name: "Bradford", slug: "bradford", region: "Simcoe County" },
  { name: "Sharon", slug: "sharon", region: "York Region" },
  { name: "Innisfil", slug: "innisfil", region: "Simcoe County" },
  { name: "Mount Albert", slug: "mount-albert", region: "York Region" },
  { name: "Barrie", slug: "barrie", region: "Simcoe County" },
  { name: "Schomberg", slug: "schomberg", region: "York Region" },
  { name: "Pickering", slug: "pickering", region: "Durham Region" },
  { name: "Port Perry", slug: "port-perry", region: "Durham Region" },
  { name: "Uxbridge", slug: "uxbridge", region: "Durham Region" },
  { name: "Georgetown", slug: "georgetown", region: "Halton Region" },
  { name: "Ajax", slug: "ajax", region: "Durham Region" },
  { name: "Oshawa", slug: "oshawa", region: "Durham Region" },
  { name: "Mississauga", slug: "mississauga", region: "Peel Region" },
  { name: "Brooklin", slug: "brooklin", region: "Durham Region" },
  { name: "Whitby", slug: "whitby", region: "Durham Region" },
  { name: "Oakville", slug: "oakville", region: "Halton Region" },
  { name: "Burlington", slug: "burlington", region: "Halton Region" },
];

export default municipalities;
