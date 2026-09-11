import type { Marker } from "./formations";

export type Scenario = {
  id: string;
  title: string;
  situation: string;
  markers: Marker[];
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const scenarios: Scenario[] = [
  {
    id: "sc-space",
    title: "Attacking Space",
    situation:
      "Your right winger has just received the ball near the touchline. Two defenders are close to him, and the last line of defence is flat.",
    markers: [
      { x: 85, y: 42, label: "RW", team: "home" },
      { x: 88, y: 38, label: "", team: "ball" },
      { x: 72, y: 44, label: "D", team: "away" },
      { x: 62, y: 52, label: "D", team: "away" },
      { x: 50, y: 34, label: "ST", team: "home" },
      { x: 42, y: 30, label: "D", team: "away" },
      { x: 26, y: 32, label: "D", team: "away" },
      { x: 35, y: 58, label: "CM", team: "home" },
    ],
    question: "What should the striker do?",
    options: [
      "Stay behind the defenders",
      "Run into the open space behind the defence",
      "Move towards the goalkeeper",
      "Stop moving and wait",
    ],
    answer: 1,
    explanation:
      "The winger has the ball and his head is up, and the defensive line is flat. A run into the space behind the defenders turns a wide possession into a real goal chance — and even if the pass is not played, the run forces the defence to drop.",
  },
  {
    id: "sc-overlap",
    title: "Overlap",
    situation:
      "Your left winger has the ball and is cutting inside. Your left back is behind him with plenty of grass ahead on the touchline.",
    markers: [
      { x: 30, y: 40, label: "LW", team: "home" },
      { x: 27, y: 36, label: "", team: "ball" },
      { x: 22, y: 34, label: "D", team: "away" },
      { x: 18, y: 58, label: "LB", team: "home" },
      { x: 45, y: 30, label: "ST", team: "home" },
      { x: 44, y: 26, label: "D", team: "away" },
      { x: 60, y: 30, label: "D", team: "away" },
      { x: 52, y: 52, label: "CM", team: "home" },
    ],
    question: "What should the full back do?",
    options: [
      "Stay back and wait for a pass to feet",
      "Sprint outside the winger into the space on the wing",
      "Run into the same space as the winger",
      "Pass responsibility to the striker",
    ],
    answer: 1,
    explanation:
      "An overlapping run outside the winger creates a two-versus-one. The defender has to choose between the ball carrier and the runner, and one of them will be free.",
  },
  {
    id: "sc-press",
    title: "Defensive Press",
    situation:
      "The opponent's central midfielder has just received the ball with his back to your goal, near the halfway line.",
    markers: [
      { x: 50, y: 50, label: "OPP", team: "away" },
      { x: 50, y: 46, label: "", team: "ball" },
      { x: 50, y: 60, label: "DM", team: "home" },
      { x: 30, y: 62, label: "CM", team: "home" },
      { x: 70, y: 62, label: "CM", team: "home" },
      { x: 50, y: 30, label: "ST", team: "home" },
      { x: 32, y: 78, label: "CB", team: "home" },
      { x: 68, y: 78, label: "CB", team: "home" },
    ],
    question: "Which player should apply pressure?",
    options: [
      "The striker should run back the whole way",
      "The nearest player, the defensive midfielder behind him",
      "A centre back should leave the back line",
      "Nobody, everyone should drop deep",
    ],
    answer: 1,
    explanation:
      "The closest player presses, and the opponent is facing his own goal, so it is the safest moment to challenge. Pulling a centre back out would open the space in front of goal.",
  },
  {
    id: "sc-counter",
    title: "Counter Attack",
    situation:
      "Your defensive midfielder has just won the ball in your own half. The opponent had six players committed forward.",
    markers: [
      { x: 48, y: 66, label: "DM", team: "home" },
      { x: 45, y: 62, label: "", team: "ball" },
      { x: 55, y: 70, label: "OPP", team: "away" },
      { x: 35, y: 74, label: "OPP", team: "away" },
      { x: 20, y: 40, label: "LW", team: "home" },
      { x: 80, y: 38, label: "RW", team: "home" },
      { x: 52, y: 28, label: "ST", team: "home" },
      { x: 48, y: 22, label: "D", team: "away" },
    ],
    question: "What should the first priority be?",
    options: [
      "Pass backwards to the goalkeeper",
      "Play forward quickly into the space ahead",
      "Dribble in circles to waste time",
      "Everyone runs back to defend",
    ],
    answer: 1,
    explanation:
      "The opponent is out of shape for only a few seconds. The first action should go forward — a pass ahead or a drive into space — before they can get players back behind the ball.",
  },
  {
    id: "sc-shape",
    title: "Defensive Shape",
    situation:
      "The opponent has just switched the ball from your right side to their left winger on the opposite wing.",
    markers: [
      { x: 15, y: 34, label: "OPP", team: "away" },
      { x: 12, y: 30, label: "", team: "ball" },
      { x: 30, y: 62, label: "CM", team: "home" },
      { x: 50, y: 64, label: "CM", team: "home" },
      { x: 70, y: 62, label: "CM", team: "home" },
      { x: 22, y: 78, label: "RB", team: "home" },
      { x: 42, y: 80, label: "CB", team: "home" },
      { x: 58, y: 80, label: "CB", team: "home" },
      { x: 78, y: 78, label: "LB", team: "home" },
    ],
    question: "What should the defending team do?",
    options: [
      "Everyone sprints at the ball carrier",
      "Slide across together as a unit to the ball side",
      "Stay exactly where they are",
      "Drop the whole team into the six-yard box",
    ],
    answer: 1,
    explanation:
      "After a switch, the defence shifts sideways as one block. Staying compact on the ball side removes the space near the ball, while the far full back tucks in to cover the middle.",
  },
];
