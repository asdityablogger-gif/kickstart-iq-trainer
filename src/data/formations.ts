export type Marker = {
  x: number; // 0-100 across the pitch width
  y: number; // 0-100 down the pitch length (100 = own goal)
  label: string;
  team?: "home" | "away" | "ball";
};

export const formations: Record<string, Marker[]> = {
  "442": [
    { x: 50, y: 92, label: "GK" },
    { x: 18, y: 74, label: "LB" },
    { x: 39, y: 78, label: "CB" },
    { x: 61, y: 78, label: "CB" },
    { x: 82, y: 74, label: "RB" },
    { x: 16, y: 50, label: "LM" },
    { x: 39, y: 52, label: "CM" },
    { x: 61, y: 52, label: "CM" },
    { x: 84, y: 50, label: "RM" },
    { x: 40, y: 24, label: "ST" },
    { x: 60, y: 24, label: "ST" },
  ],
  "433": [
    { x: 50, y: 92, label: "GK" },
    { x: 16, y: 74, label: "LB" },
    { x: 39, y: 78, label: "CB" },
    { x: 61, y: 78, label: "CB" },
    { x: 84, y: 74, label: "RB" },
    { x: 50, y: 62, label: "DM" },
    { x: 33, y: 46, label: "CM" },
    { x: 67, y: 46, label: "CM" },
    { x: 14, y: 26, label: "LW" },
    { x: 50, y: 20, label: "ST" },
    { x: 86, y: 26, label: "RW" },
  ],
  "4231": [
    { x: 50, y: 92, label: "GK" },
    { x: 16, y: 74, label: "LB" },
    { x: 39, y: 78, label: "CB" },
    { x: 61, y: 78, label: "CB" },
    { x: 84, y: 74, label: "RB" },
    { x: 38, y: 58, label: "DM" },
    { x: 62, y: 58, label: "DM" },
    { x: 15, y: 36, label: "LW" },
    { x: 50, y: 40, label: "AM" },
    { x: 85, y: 36, label: "RW" },
    { x: 50, y: 18, label: "ST" },
  ],
  "352": [
    { x: 50, y: 92, label: "GK" },
    { x: 30, y: 78, label: "CB" },
    { x: 50, y: 80, label: "CB" },
    { x: 70, y: 78, label: "CB" },
    { x: 10, y: 50, label: "LWB" },
    { x: 35, y: 56, label: "CM" },
    { x: 50, y: 46, label: "CM" },
    { x: 65, y: 56, label: "CM" },
    { x: 90, y: 50, label: "RWB" },
    { x: 40, y: 22, label: "ST" },
    { x: 60, y: 22, label: "ST" },
  ],
  "532": [
    { x: 50, y: 92, label: "GK" },
    { x: 12, y: 74, label: "LWB" },
    { x: 32, y: 79, label: "CB" },
    { x: 50, y: 81, label: "CB" },
    { x: 68, y: 79, label: "CB" },
    { x: 88, y: 74, label: "RWB" },
    { x: 33, y: 54, label: "CM" },
    { x: 50, y: 48, label: "CM" },
    { x: 67, y: 54, label: "CM" },
    { x: 40, y: 25, label: "ST" },
    { x: 60, y: 25, label: "ST" },
  ],
};
