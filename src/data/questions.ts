export type QuizCategory =
  | "positions"
  | "formations"
  | "attack"
  | "defense"
  | "vocabulary";

export type Question = {
  id: string;
  category: QuizCategory;
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizCategories: { id: QuizCategory; name: string; icon: string }[] =
  [
    { id: "positions", name: "Positions", icon: "👤" },
    { id: "formations", name: "Formations", icon: "▦" },
    { id: "attack", name: "Attack", icon: "⚡" },
    { id: "defense", name: "Defense", icon: "🛡" },
    { id: "vocabulary", name: "Vocabulary", icon: "📖" },
  ];

export const questions: Question[] = [
  // POSITIONS
  {
    id: "q1",
    category: "positions",
    q: "A centre back's main job is to protect which area?",
    options: [
      "The wide areas near the touchline",
      "The central space in front of his own goal",
      "The opponent's penalty spot",
      "The centre circle",
    ],
    answer: 1,
    explanation:
      "Most dangerous chances come from central areas, so centre backs defend the middle in front of their own goal.",
  },
  {
    id: "q2",
    category: "positions",
    q: "Why does a full back often run forward past his own winger?",
    options: [
      "To rest in an easier position",
      "To create a two-versus-one against the defender",
      "Because the referee requires it",
      "To stop his winger from shooting",
    ],
    answer: 1,
    explanation:
      "The overlapping run gives the defender two players to worry about, so one of them ends up free.",
  },
  {
    id: "q3",
    category: "positions",
    q: "A defensive midfielder mainly protects which space?",
    options: [
      "Behind the opponent's defence",
      "The space between his midfield and his own defence",
      "The opponent's corner flag",
      "The goalkeeper's six-yard box",
    ],
    answer: 1,
    explanation:
      "The defensive midfielder shields the gap in front of the back line, blocking passes into dangerous areas.",
  },
  {
    id: "q4",
    category: "positions",
    q: "An attacking midfielder is most dangerous when he receives the ball where?",
    options: [
      "Next to his own goalkeeper",
      "Between the opponent's midfield and defence",
      "Behind his own defenders",
      "On the touchline in his own half",
    ],
    answer: 1,
    explanation:
      "That gap, often called 'between the lines', lets him turn and face goal before defenders can reach him.",
  },
  {
    id: "q5",
    category: "positions",
    q: "Why does a winger usually stay close to the touchline?",
    options: [
      "To stay out of the way",
      "To stretch the defence and open space in the middle",
      "Because he is not allowed to come inside",
      "To be closer to the substitutes' bench",
    ],
    answer: 1,
    explanation:
      "Standing wide pulls defenders across, which creates gaps centrally for teammates.",
  },
  {
    id: "q6",
    category: "positions",
    q: "Besides scoring, what important job does a striker have?",
    options: [
      "Taking all the throw-ins",
      "Occupying the centre backs so teammates get more space",
      "Marking the opposition goalkeeper",
      "Staying offside as often as possible",
    ],
    answer: 1,
    explanation:
      "A striker who keeps the centre backs busy gives midfielders and wingers more room to work.",
  },
  {
    id: "q7",
    category: "positions",
    q: "A goalkeeper facing a one-on-one usually steps forward. Why?",
    options: [
      "To make the goal look smaller from the shooter's angle",
      "To get a better view of the crowd",
      "Because he must leave his line by rule",
      "To make the shot easier for the attacker",
    ],
    answer: 0,
    explanation:
      "Closing the distance narrows the angle, leaving the attacker less of the goal to aim at.",
  },
  {
    id: "q8",
    category: "positions",
    q: "What does a central midfielder do before receiving the ball?",
    options: [
      "Close his eyes and hope",
      "Look over his shoulder to check for space and opponents",
      "Shout at the referee",
      "Stand completely still",
    ],
    answer: 1,
    explanation:
      "Checking your shoulder tells you whether you can turn forward or must play back, before the ball even arrives.",
  },
  {
    id: "q9",
    category: "positions",
    q: "A 'box-to-box' midfielder is best described as a player who:",
    options: [
      "Only defends corners",
      "Contributes in both penalty areas across the game",
      "Never leaves the centre circle",
      "Plays only in the first half",
    ],
    answer: 1,
    explanation:
      "Box-to-box means covering the whole pitch: defending one box and arriving in the other.",
  },
  {
    id: "q10",
    category: "positions",
    q: "Which player usually starts the press when the opponent's centre back has the ball?",
    options: ["The goalkeeper", "The striker", "The left back", "A centre back"],
    answer: 1,
    explanation:
      "The striker is closest to the opponent's defenders, so he begins the press and guides the ball to one side.",
  },

  // FORMATIONS
  {
    id: "q11",
    category: "formations",
    q: "How many players are in each of the two lines in a classic 4-4-2?",
    options: ["Three", "Four", "Five", "Two"],
    answer: 1,
    explanation:
      "4-4-2 defends with two banks of four in front of the goalkeeper, plus two strikers ahead.",
  },
  {
    id: "q12",
    category: "formations",
    q: "What is a common weakness of 4-4-2 against a midfield three?",
    options: [
      "Too many strikers to organise",
      "Being outnumbered in central midfield",
      "No defenders on the wings",
      "No goalkeeper",
    ],
    answer: 1,
    explanation:
      "Two central midfielders against three means the opponent usually has a free man in the middle.",
  },
  {
    id: "q13",
    category: "formations",
    q: "In 4-3-3, what mainly creates space in the centre of the pitch?",
    options: [
      "The goalkeeper standing high",
      "The two wide forwards stretching the defence",
      "All players standing in one line",
      "Long throw-ins",
    ],
    answer: 1,
    explanation:
      "Wide forwards pull full backs outwards, which opens the central lanes for the midfielders.",
  },
  {
    id: "q14",
    category: "formations",
    q: "In 4-2-3-1, what are the two players sitting in front of the defence called?",
    options: ["A front two", "A double pivot", "Wing backs", "A back three"],
    answer: 1,
    explanation:
      "The double pivot protects the defence and lets the three attacking players focus on creating.",
  },
  {
    id: "q15",
    category: "formations",
    q: "What often happens to a 3-5-2 when the team defends?",
    options: [
      "It becomes a back five as the wing backs drop",
      "It becomes a 4-4-2",
      "The strikers become defenders",
      "Nothing changes at all",
    ],
    answer: 0,
    explanation:
      "Wing backs drop into the back line when defending, so 3-5-2 becomes 5-3-2.",
  },
  {
    id: "q16",
    category: "formations",
    q: "Which formation is most associated with a compact, deep defensive block?",
    options: ["5-3-2", "4-3-3", "3-4-3", "4-2-4"],
    answer: 0,
    explanation:
      "5-3-2 packs the central areas and sits deep, then relies on counter attacks.",
  },
  {
    id: "q17",
    category: "formations",
    q: "A team plays 3-5-2 and gets caught with the wing backs high. Where is the danger?",
    options: [
      "In the space behind the wing backs on the wings",
      "In their own six-yard box only",
      "In the centre circle",
      "There is no danger",
    ],
    answer: 0,
    explanation:
      "Wing backs cover the entire flank. If they are caught upfield, the wide areas behind them are exposed.",
  },
  {
    id: "q18",
    category: "formations",
    q: "In 4-2-3-1 the striker becomes isolated. What is the usual cause?",
    options: [
      "The attacking three are not supporting quickly enough",
      "The goalkeeper is too far forward",
      "The pitch is too narrow",
      "There are two strikers instead of one",
    ],
    answer: 0,
    explanation:
      "With only one forward, the three behind must join the attack quickly or he is left alone against defenders.",
  },
  {
    id: "q19",
    category: "formations",
    q: "What is the main practical benefit of any formation?",
    options: [
      "It fixes players to exact spots for 90 minutes",
      "It gives players a starting reference for distances and responsibilities",
      "It guarantees goals",
      "It decides who takes penalties",
    ],
    answer: 1,
    explanation:
      "A formation is a starting structure, not a cage. It tells players where to begin and who covers what.",
  },
  {
    id: "q20",
    category: "formations",
    q: "Three central midfielders in 4-3-3 mainly help the team to:",
    options: [
      "Create passing triangles and keep the ball",
      "Take more corners",
      "Defend the goal line",
      "Play longer goal kicks",
    ],
    answer: 0,
    explanation:
      "Three midfielders make short passing triangles, which makes it much easier to keep possession under pressure.",
  },

  // ATTACK
  {
    id: "q21",
    category: "attack",
    q: "Your winger has the ball and the striker starts running behind the defenders. What opportunity has been created?",
    options: [
      "Space behind the defence",
      "A corner kick",
      "A defensive block",
      "An automatic offside",
    ],
    answer: 0,
    explanation:
      "A run in behind attacks the space between the defenders and the goalkeeper — the most dangerous area on the pitch.",
  },
  {
    id: "q22",
    category: "attack",
    q: "A striker drops towards the ball and a centre back follows him. What has this created?",
    options: [
      "A gap in the defensive line",
      "A free kick",
      "An offside position",
      "Nothing useful",
    ],
    answer: 0,
    explanation:
      "When a defender follows an attacker out of the line, the space he leaves can be attacked by a teammate.",
  },
  {
    id: "q23",
    category: "attack",
    q: "Why do teams switch play to the far side?",
    options: [
      "Because defenders slide towards the ball, leaving the far side freer",
      "To waste time",
      "Because passes must alternate sides",
      "To force a throw-in",
    ],
    answer: 0,
    explanation:
      "A defence shifts to the ball. One long diagonal pass finds the least protected part of the pitch.",
  },
  {
    id: "q24",
    category: "attack",
    q: "What is a through ball?",
    options: [
      "A pass into the space behind or between defenders",
      "A pass straight to the goalkeeper",
      "A high cross into the box",
      "A pass out of play",
    ],
    answer: 0,
    explanation:
      "A through ball is played into space for a runner, not to a player's feet.",
  },
  {
    id: "q25",
    category: "attack",
    q: "Your team wins the ball with the opponent pushed forward. What is the best first action?",
    options: [
      "Play forward immediately into space",
      "Pass sideways several times",
      "Return the ball to the goalkeeper",
      "Kick the ball out",
    ],
    answer: 0,
    explanation:
      "The opponent is disorganised for only a few seconds. Going forward quickly is what makes a counter attack work.",
  },
  {
    id: "q26",
    category: "attack",
    q: "A full back runs on the inside of his winger instead of the outside. This is called:",
    options: ["An underlap", "An overlap", "A clearance", "A press"],
    answer: 0,
    explanation:
      "Outside run = overlap, inside run = underlap. Both create a two-versus-one.",
  },
  {
    id: "q27",
    category: "attack",
    q: "Why is a run behind dangerous even when the pass is not played?",
    options: [
      "It forces the defence to drop, opening space in front of them",
      "It automatically wins a free kick",
      "It stops the clock",
      "It tires out the goalkeeper",
    ],
    answer: 0,
    explanation:
      "Defenders retreat to protect the space behind them, which leaves midfielders free at the edge of the box.",
  },
  {
    id: "q28",
    category: "attack",
    q: "Two attackers stand in exactly the same space. What is the problem?",
    options: [
      "One defender can mark both, and no space is created",
      "It is against the rules",
      "The referee will stop play",
      "There is no problem",
    ],
    answer: 0,
    explanation:
      "Good attacking spreads players out so each defender has a separate problem to solve.",
  },
  {
    id: "q29",
    category: "attack",
    q: "A striker times his run too early against a high line. What usually happens?",
    options: [
      "He is offside",
      "He scores automatically",
      "The defenders must drop back",
      "The referee awards a penalty",
    ],
    answer: 0,
    explanation:
      "Timing matters: leave too early and you are offside, too late and the gap has closed.",
  },
  {
    id: "q30",
    category: "attack",
    q: "What does 'width' do to a defence?",
    options: [
      "Forces defenders to spread out, opening central gaps",
      "Makes the defence more compact",
      "Reduces the size of the pitch",
      "Nothing measurable",
    ],
    answer: 0,
    explanation:
      "Defences want to be narrow. Attacking players standing wide stop them from squeezing together.",
  },
  {
    id: "q31",
    category: "attack",
    q: "A team keeps the ball on one side to draw defenders in. What are they setting up?",
    options: [
      "A switch to the free player on the other side",
      "A goal kick",
      "An offside trap",
      "A substitution",
    ],
    answer: 0,
    explanation:
      "Overloading one side to attack the other is one of the oldest and most effective attacking ideas.",
  },
  {
    id: "q32",
    category: "attack",
    q: "The best moment to play a forward pass is usually when:",
    options: [
      "A teammate is starting a run into free space",
      "Everyone is standing still",
      "The opponent is perfectly organised",
      "The ball is out of play",
    ],
    answer: 0,
    explanation:
      "Forward passes work when movement and the pass happen together.",
  },

  // DEFENSE
  {
    id: "q33",
    category: "defense",
    q: "What makes a press effective?",
    options: [
      "The whole team moving up together to cut passing options",
      "One player chasing the ball alone",
      "The goalkeeper shouting",
      "Standing still in a line",
    ],
    answer: 0,
    explanation:
      "Pressing is a team action. If only one player presses, the opponent simply passes around him.",
  },
  {
    id: "q34",
    category: "defense",
    q: "What is 'covering' in defending?",
    options: [
      "Standing behind a challenging teammate as a safety net",
      "Marking two players at once",
      "Blocking the goalkeeper's view",
      "Standing on the goal line",
    ],
    answer: 0,
    explanation:
      "The covering defender is positioned deeper and inside, ready if the first defender is beaten.",
  },
  {
    id: "q35",
    category: "defense",
    q: "The biggest risk of a high defensive line is:",
    options: [
      "A long pass over the top for a fast attacker",
      "Too many corners",
      "Losing throw-ins",
      "The goalkeeper being bored",
    ],
    answer: 0,
    explanation:
      "A high line squeezes the pitch, but one accurate ball in behind can create a one-on-one.",
  },
  {
    id: "q36",
    category: "defense",
    q: "In a low block, what does the defending team accept?",
    options: [
      "Giving the opponent possession in harmless areas",
      "Giving up all the goals",
      "Playing without a goalkeeper",
      "Having no midfielders",
    ],
    answer: 0,
    explanation:
      "A low block trades territory and possession for safety: fewer clear chances against.",
  },
  {
    id: "q37",
    category: "defense",
    q: "Zonal marking means a defender is responsible for:",
    options: [
      "An area of the pitch",
      "One specific opponent everywhere",
      "The referee's decisions",
      "Only corners",
    ],
    answer: 0,
    explanation:
      "In zonal marking you defend a space and pick up whoever enters it; in man marking you follow a person.",
  },
  {
    id: "q38",
    category: "defense",
    q: "The ball moves to the right wing. What should the defensive block do?",
    options: [
      "Slide right together, keeping the distances short",
      "Stay exactly where they were",
      "All run at the ball",
      "Spread out as much as possible",
    ],
    answer: 0,
    explanation:
      "Defending as a unit means shifting sideways together so no gaps appear between players.",
  },
  {
    id: "q39",
    category: "defense",
    q: "An offside trap only works if:",
    options: [
      "All defenders step up at the same moment",
      "The goalkeeper leaves his area",
      "One defender stays deep",
      "The team has two strikers",
    ],
    answer: 0,
    explanation:
      "A single defender who is slow to step up keeps the attacker onside and breaks the trap.",
  },
  {
    id: "q40",
    category: "defense",
    q: "When is the safest moment to challenge an opponent for the ball?",
    options: [
      "When he receives with his back to goal and cannot turn",
      "When he is running at full speed towards you",
      "When he has already passed",
      "When he is behind your defence",
    ],
    answer: 0,
    explanation:
      "An opponent facing his own goal cannot beat you easily, so pressure is much lower risk.",
  },
  {
    id: "q41",
    category: "defense",
    q: "'Compact' defending means:",
    options: [
      "Short distances between players and between lines",
      "All eleven players in the box",
      "Defenders spread wide apart",
      "Playing with fewer players",
    ],
    answer: 0,
    explanation:
      "Compactness removes the space between the lines where attackers like to receive.",
  },
  {
    id: "q42",
    category: "defense",
    q: "Your right back steps out to press the winger. Who should cover the space behind him?",
    options: [
      "The nearest centre back",
      "The striker",
      "The far winger",
      "Nobody",
    ],
    answer: 0,
    explanation:
      "The closest defender slides across to cover, so a pass in behind does not become a clear chance.",
  },
  {
    id: "q43",
    category: "defense",
    q: "Why do some teams invite crosses instead of allowing central passes?",
    options: [
      "Crosses are usually easier to defend than passes through the middle",
      "Crosses are against the rules",
      "It saves energy for the goalkeeper",
      "Crosses cannot lead to goals",
    ],
    answer: 0,
    explanation:
      "A packed central area forces the ball wide, and a crowded box has a good chance of clearing crosses.",
  },
  {
    id: "q44",
    category: "defense",
    q: "The first job of the whole team after losing the ball is usually to:",
    options: [
      "Delay the opponent and get back into shape",
      "Argue with the referee",
      "Stand still",
      "Run forward to attack",
    ],
    answer: 0,
    explanation:
      "Slowing the counter attack buys the seconds the team needs to reorganise its defensive shape.",
  },

  // VOCABULARY
  {
    id: "q45",
    category: "vocabulary",
    q: "What is the 'build up' phase?",
    options: [
      "Passing the ball out from the keeper and defenders into midfield",
      "The last pass before a shot",
      "The warm-up before the game",
      "Defending a corner",
    ],
    answer: 0,
    explanation:
      "Build up is the first phase of an attack, starting from the back.",
  },
  {
    id: "q46",
    category: "vocabulary",
    q: "'Transition' refers to:",
    options: [
      "The moments right after possession changes hands",
      "Half time",
      "A substitution",
      "A change of formation at kick-off",
    ],
    answer: 0,
    explanation:
      "Transitions are the seconds after winning or losing the ball, when both teams are least organised.",
  },
  {
    id: "q47",
    category: "vocabulary",
    q: "The 'half space' is:",
    options: [
      "The lane between the centre of the pitch and the wing",
      "Half of the penalty area",
      "The area behind the goal",
      "The centre circle",
    ],
    answer: 0,
    explanation:
      "Half spaces are valuable because players there can pass or shoot, and are awkward to mark.",
  },
  {
    id: "q48",
    category: "vocabulary",
    q: "A 'false 9' is a striker who:",
    options: [
      "Drops into midfield instead of staying high",
      "Wears the number nine shirt only",
      "Plays as a goalkeeper",
      "Never touches the ball",
    ],
    answer: 0,
    explanation:
      "By dropping deep, a false nine drags centre backs out of position or leaves them with nobody to mark.",
  },
  {
    id: "q49",
    category: "vocabulary",
    q: "A 'target man' is usually used to:",
    options: [
      "Receive long passes and hold the ball up",
      "Take all the corners",
      "Mark the opposition striker",
      "Play in goal",
    ],
    answer: 0,
    explanation:
      "A strong forward who wins long balls lets the team escape pressure and bring midfielders into play.",
  },
  {
    id: "q50",
    category: "vocabulary",
    q: "What does a 'high line' mean?",
    options: [
      "The defenders play far up the pitch",
      "The goalkeeper stays on his line",
      "A long throw-in",
      "A cross into the box",
    ],
    answer: 0,
    explanation:
      "A high line compresses the pitch and uses offside, but leaves space behind.",
  },
  {
    id: "q51",
    category: "vocabulary",
    q: "'Man marking' means:",
    options: [
      "Following one specific opponent",
      "Defending a zone",
      "Marking the ball",
      "Defending only corners",
    ],
    answer: 0,
    explanation:
      "In man marking, each defender is responsible for a person rather than an area.",
  },
  {
    id: "q52",
    category: "vocabulary",
    q: "The 'second ball' is:",
    options: [
      "The loose ball after a header or duel",
      "The spare ball on the sideline",
      "A second penalty",
      "The ball used in extra time",
    ],
    answer: 0,
    explanation:
      "Teams that react quickest to loose balls keep their attacks alive and stop counter attacks.",
  },
  {
    id: "q53",
    category: "vocabulary",
    q: "A 'switch of play' is:",
    options: [
      "Moving the ball quickly to the opposite side of the pitch",
      "Changing formation",
      "Swapping goalkeepers",
      "Restarting after a goal",
    ],
    answer: 0,
    explanation:
      "It attacks the side of the pitch the defence has just left unprotected.",
  },
  {
    id: "q54",
    category: "vocabulary",
    q: "A 'low block' describes a team that:",
    options: [
      "Defends deep with everyone behind the ball",
      "Presses high up the pitch",
      "Plays with three strikers",
      "Uses long throw-ins",
    ],
    answer: 0,
    explanation:
      "The low block removes the space behind the defence and forces long-range shots.",
  },
  {
    id: "q55",
    category: "vocabulary",
    q: "An 'overlap' happens when a player:",
    options: [
      "Runs past a teammate on the outside",
      "Runs past a teammate on the inside",
      "Stands offside",
      "Passes backwards",
    ],
    answer: 0,
    explanation: "Outside run = overlap. Inside run = underlap.",
  },
  {
    id: "q56",
    category: "vocabulary",
    q: "Pressing is best described as:",
    options: [
      "Moving towards the ball as a team to force a mistake",
      "Standing deep and waiting",
      "Passing quickly",
      "Shooting from distance",
    ],
    answer: 0,
    explanation:
      "The point of pressing is to win the ball back high, or at least force a bad pass.",
  },
];

export const questionsByCategory = (c: QuizCategory) =>
  questions.filter((q) => q.category === c);

export function pickRandom<T>(items: T[], count: number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = copy[i] as T;
    const b = copy[j] as T;
    copy[i] = b;
    copy[j] = a;
  }
  return copy.slice(0, Math.min(count, copy.length));
}
