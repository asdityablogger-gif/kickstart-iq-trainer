export type LessonCategory =
  | "positions"
  | "formations"
  | "attack"
  | "defense";

export type Lesson = {
  id: string;
  category: LessonCategory;
  title: string;
  summary: string;
  points: { label: string; text: string }[];
  formationId?: string;
};

export const categories: {
  id: LessonCategory;
  name: string;
  icon: string;
  blurb: string;
}[] = [
  {
    id: "positions",
    name: "Positions",
    icon: "👤",
    blurb: "What every player on the pitch is actually trying to do.",
  },
  {
    id: "formations",
    name: "Formations",
    icon: "▦",
    blurb: "How teams arrange themselves, and why it matters.",
  },
  {
    id: "attack",
    name: "Attacking IQ",
    icon: "⚡",
    blurb: "Ideas that turn possession into chances.",
  },
  {
    id: "defense",
    name: "Defensive IQ",
    icon: "🛡",
    blurb: "How teams stop chances before they happen.",
  },
];

export const lessons: Lesson[] = [
  // POSITIONS
  {
    id: "pos-gk",
    category: "positions",
    title: "Goalkeeper",
    summary: "The last defender and the first attacker.",
    points: [
      {
        label: "Main role",
        text: "Stop shots and protect the area directly in front of goal. The goalkeeper is the only player allowed to use their hands, inside their own penalty area.",
      },
      {
        label: "Responsibilities",
        text: "Save shots, claim crosses, organise the defenders in front of them, start attacks with throws, short passes or long kicks, and sweep up balls played behind the defence.",
      },
      {
        label: "What they look for",
        text: "The angle between the ball and the goal, whether they can reach a cross before an attacker, and whether a teammate is free to receive a short pass instead of a risky long ball.",
      },
      {
        label: "Simple example",
        text: "An attacker runs through alone. Instead of staying on the line, the keeper steps forward a few metres to make the goal look smaller from the shooter's point of view.",
      },
    ],
  },
  {
    id: "pos-cb",
    category: "positions",
    title: "Centre Back",
    summary: "The calm defender in the middle of the back line.",
    points: [
      {
        label: "Main role",
        text: "Defend the central area in front of goal, where most dangerous chances come from.",
      },
      {
        label: "Responsibilities",
        text: "Mark the opponent's striker, win headers, block shots, cover a teammate who has been beaten, and pass the ball out calmly when the team has possession.",
      },
      {
        label: "What they look for",
        text: "The striker's movement, the distance to their defensive partner, and whether to step forward to challenge or drop back to protect the space behind.",
      },
      {
        label: "Simple example",
        text: "A long ball is played towards the striker. The centre back gets in front, heads the ball away, and immediately looks for a teammate to restart possession.",
      },
    ],
  },
  {
    id: "pos-fb",
    category: "positions",
    title: "Full Back",
    summary: "Defends the wide areas and joins the attack.",
    points: [
      {
        label: "Main role",
        text: "Defend the space near the touchline on their side, and support the attack when the team has the ball.",
      },
      {
        label: "Responsibilities",
        text: "Stop the opposition winger, defend crosses, tuck inside to help the centre backs, and run forward to create an extra attacker on the wing.",
      },
      {
        label: "What they look for",
        text: "Whether the winger in front of them is free, whether it is safe to push forward, and whether a teammate is covering the space they leave behind.",
      },
      {
        label: "Simple example",
        text: "Their winger receives the ball and turns inside. The full back sprints outside the winger to give a second option and stretch the defence.",
      },
    ],
  },
  {
    id: "pos-dm",
    category: "positions",
    title: "Defensive Midfielder",
    summary: "The shield in front of the defence.",
    points: [
      {
        label: "Main role",
        text: "Protect the space between midfield and defence, and keep the ball moving simply when the team attacks.",
      },
      {
        label: "Responsibilities",
        text: "Break up opposition attacks, block passing lines into the striker, offer a safe passing option, and slow the game down when the team needs a rest.",
      },
      {
        label: "What they look for",
        text: "Opponents arriving in the space in front of the defenders, and the safest pass that keeps possession alive.",
      },
      {
        label: "Simple example",
        text: "The opponent's attacking midfielder drifts into a gap. The defensive midfielder steps across to stand in the passing line so the ball can never reach them.",
      },
    ],
  },
  {
    id: "pos-cm",
    category: "positions",
    title: "Central Midfielder",
    summary: "The engine that links defence and attack.",
    points: [
      {
        label: "Main role",
        text: "Connect the team. Receive the ball from defenders and move it towards the attackers.",
      },
      {
        label: "Responsibilities",
        text: "Keep possession, support both boxes, cover a lot of ground, and choose when to pass safely and when to play forward.",
      },
      {
        label: "What they look for",
        text: "Space to turn, a teammate in a better position, and whether the opponent's midfield has left a gap.",
      },
      {
        label: "Simple example",
        text: "Before receiving the ball, they look over their shoulder. Seeing no opponent behind, they turn and drive forward instead of passing backwards.",
      },
    ],
  },
  {
    id: "pos-am",
    category: "positions",
    title: "Attacking Midfielder",
    summary: "The creator between midfield and attack.",
    points: [
      {
        label: "Main role",
        text: "Find space between the opponent's midfield and defence, and create chances from there.",
      },
      {
        label: "Responsibilities",
        text: "Receive between the lines, play the final pass, shoot from the edge of the box, and press the opponent's deepest midfielder when the ball is lost.",
      },
      {
        label: "What they look for",
        text: "Gaps between defenders, the striker starting a run, and defenders who are watching the ball instead of them.",
      },
      {
        label: "Simple example",
        text: "They stand in the gap between the opposition midfield and defence, receive the ball facing forward, and slide a pass through for the striker.",
      },
    ],
  },
  {
    id: "pos-wing",
    category: "positions",
    title: "Winger",
    summary: "Provides width, speed and one-versus-one danger.",
    points: [
      {
        label: "Main role",
        text: "Attack from wide areas, either by beating a defender on the outside or cutting inside towards goal.",
      },
      {
        label: "Responsibilities",
        text: "Stay wide to stretch the defence, take on defenders, deliver crosses, score, and track back to help the full back.",
      },
      {
        label: "What they look for",
        text: "Whether the defender is facing them or turned, space behind the full back, and whether a teammate is overlapping.",
      },
      {
        label: "Simple example",
        text: "The winger stays close to the touchline. This pulls the full back wide and opens a passing lane into the striker in the middle.",
      },
    ],
  },
  {
    id: "pos-st",
    category: "positions",
    title: "Striker",
    summary: "The team's main finisher and first defender.",
    points: [
      {
        label: "Main role",
        text: "Score goals and occupy the centre backs so teammates get more space.",
      },
      {
        label: "Responsibilities",
        text: "Finish chances, hold the ball up under pressure, make runs behind the defence, and press the opponent's defenders when the ball is lost.",
      },
      {
        label: "What they look for",
        text: "The moment a teammate's head comes up, the gap between two defenders, and whether the last defender is stepping forward.",
      },
      {
        label: "Simple example",
        text: "The winger looks up with the ball. The striker immediately sprints between the two centre backs to attack the space behind them.",
      },
    ],
  },

  // FORMATIONS
  {
    id: "form-442",
    category: "formations",
    title: "4-4-2",
    summary: "Two banks of four with two strikers.",
    formationId: "442",
    points: [
      {
        label: "Basic structure",
        text: "Four defenders, four midfielders in a line, and two strikers. The shape is simple and easy to organise: everyone has an obvious partner nearby.",
      },
      {
        label: "Strength",
        text: "Very solid defensively. The two lines of four cover the pitch evenly, and two strikers give a direct attacking threat and easy counter attacks.",
      },
      {
        label: "Weakness",
        text: "Only two central midfielders, so teams with three in midfield can outnumber them and control the middle of the pitch.",
      },
      {
        label: "Beginners should notice",
        text: "Watch how the two lines of four move sideways together, like a chain, keeping short distances between players.",
      },
    ],
  },
  {
    id: "form-433",
    category: "formations",
    title: "4-3-3",
    summary: "Three midfielders and a wide front three.",
    formationId: "433",
    points: [
      {
        label: "Basic structure",
        text: "Four defenders, a midfield three (often one deeper and two ahead), and a front three of two wingers plus a striker.",
      },
      {
        label: "Strength",
        text: "Great for keeping the ball. Three midfielders create passing triangles, and the wide forwards stretch the pitch so the middle opens up.",
      },
      {
        label: "Weakness",
        text: "If the wingers do not track back, the full backs can be left alone against two opponents on the wing.",
      },
      {
        label: "Beginners should notice",
        text: "The front three stay high and wide. That width is what pulls defenders apart and creates the gaps midfielders run into.",
      },
    ],
  },
  {
    id: "form-4231",
    category: "formations",
    title: "4-2-3-1",
    summary: "Two holders, a creative line of three, one striker.",
    formationId: "4231",
    points: [
      {
        label: "Basic structure",
        text: "Four defenders, two defensive midfielders side by side, three attacking players behind one striker.",
      },
      {
        label: "Strength",
        text: "Balanced. The double pivot protects the defence while the attacking three can focus on creating, especially the number ten between the lines.",
      },
      {
        label: "Weakness",
        text: "The lone striker can become isolated if the attacking three do not support quickly.",
      },
      {
        label: "Beginners should notice",
        text: "Look for the attacking midfielder standing in the gap between the opponent's midfield and defence. That is the key position in this shape.",
      },
    ],
  },
  {
    id: "form-352",
    category: "formations",
    title: "3-5-2",
    summary: "Three centre backs with attacking wing backs.",
    formationId: "352",
    points: [
      {
        label: "Basic structure",
        text: "Three centre backs, two wing backs who cover the whole touchline, three central midfielders and two strikers.",
      },
      {
        label: "Strength",
        text: "Numbers everywhere in the middle: three centre backs plus three midfielders make central attacks difficult, and two strikers stay dangerous.",
      },
      {
        label: "Weakness",
        text: "It depends on the fitness of the wing backs. If they are caught high up, the wide areas behind them are wide open.",
      },
      {
        label: "Beginners should notice",
        text: "When the team defends, the wing backs drop and it becomes a back five. When it attacks, they push up and it looks like a back three.",
      },
    ],
  },
  {
    id: "form-532",
    category: "formations",
    title: "5-3-2",
    summary: "A compact defensive block with counter-attacking pace.",
    formationId: "532",
    points: [
      {
        label: "Basic structure",
        text: "Five defenders across the back, three central midfielders and two strikers. In practice it is 3-5-2 with the wing backs sitting deeper.",
      },
      {
        label: "Strength",
        text: "Very hard to break down through the middle. There is almost always a spare defender to cover.",
      },
      {
        label: "Weakness",
        text: "The team spends long spells deep in its own half, so it can struggle to keep the ball once it wins it.",
      },
      {
        label: "Beginners should notice",
        text: "Notice how narrow the back five stays. It invites crosses from wide areas because those are easier to defend than passes through the middle.",
      },
    ],
  },

  // ATTACK
  {
    id: "atk-space",
    category: "attack",
    title: "Creating Space",
    summary: "Move defenders to open the area you actually want.",
    points: [
      {
        label: "The idea",
        text: "Defenders follow attackers. If you move, they move, and the space you left becomes free for a teammate.",
      },
      {
        label: "How it works",
        text: "One player drops short to pull a defender out of the back line, and another player runs into the gap that defender just left.",
      },
      {
        label: "Simple example",
        text: "A striker walks towards the ball, the centre back follows, and the winger sprints into the empty area behind him.",
      },
      {
        label: "Watch for",
        text: "Attackers who run for no obvious reason. Often they are not asking for the ball, they are dragging a defender away.",
      },
    ],
  },
  {
    id: "atk-width",
    category: "attack",
    title: "Width",
    summary: "Stretch the defence sideways to open the middle.",
    points: [
      {
        label: "The idea",
        text: "A defence is strongest when it is narrow and compact. Standing wide forces defenders to spread out.",
      },
      {
        label: "How it works",
        text: "Wingers or wing backs stay close to the touchline, even when the ball is on the other side, so the defence can never squeeze together.",
      },
      {
        label: "Simple example",
        text: "The right winger hugs the line. The left back has to follow him, so a gap appears between the left back and the centre back.",
      },
      {
        label: "Watch for",
        text: "Teams that keep at least one wide player high on each side while building up.",
      },
    ],
  },
  {
    id: "atk-overlap",
    category: "attack",
    title: "Overlapping",
    summary: "Run around the outside of your own teammate.",
    points: [
      {
        label: "The idea",
        text: "A teammate runs past the player with the ball on the outside, creating a two-versus-one against the defender.",
      },
      {
        label: "How it works",
        text: "The defender must choose: follow the runner and leave the ball carrier free, or stay and let the runner receive in space.",
      },
      {
        label: "Simple example",
        text: "The winger cuts inside with the ball. The full back sprints outside him. The defender hesitates, and one of the two is free.",
      },
      {
        label: "Watch for",
        text: "The opposite move, the underlap, where the run goes on the inside instead of the outside.",
      },
    ],
  },
  {
    id: "atk-through",
    category: "attack",
    title: "Through Balls",
    summary: "A pass played into space, not into feet.",
    points: [
      {
        label: "The idea",
        text: "Instead of passing to where a teammate is, you pass to where they are about to be.",
      },
      {
        label: "How it works",
        text: "The pass goes between or behind defenders, and the runner arrives at the ball at full speed with the defence facing the wrong way.",
      },
      {
        label: "Simple example",
        text: "The striker starts a run between the two centre backs and the midfielder slides the ball into that gap first time.",
      },
      {
        label: "Watch for",
        text: "Timing. If the runner leaves too early they are offside; too late and the gap has closed.",
      },
    ],
  },
  {
    id: "atk-runs",
    category: "attack",
    title: "Runs Behind the Defence",
    summary: "The threat that pushes a defence backwards.",
    points: [
      {
        label: "The idea",
        text: "A run in behind is dangerous even when the pass is not played, because it forces defenders to drop deeper.",
      },
      {
        label: "How it works",
        text: "As the defence retreats, space appears in front of them for midfielders to receive and shoot.",
      },
      {
        label: "Simple example",
        text: "The striker sprints in behind, the defence drops five metres, and the midfielder is suddenly free at the edge of the box.",
      },
      {
        label: "Watch for",
        text: "Runs made across a defender rather than straight, which are much harder to track.",
      },
    ],
  },
  {
    id: "atk-counter",
    category: "attack",
    title: "Counter Attack",
    summary: "Attack fast while the opponent is out of shape.",
    points: [
      {
        label: "The idea",
        text: "Right after winning the ball, the opponent is spread out and unorganised. That is the best moment to attack.",
      },
      {
        label: "How it works",
        text: "The first action should be forward: a pass ahead, or a dribble into open space, before the opponent can get players back behind the ball.",
      },
      {
        label: "Simple example",
        text: "A defender wins a tackle and plays immediately to the winger, who runs at a defence with only two players back.",
      },
      {
        label: "Watch for",
        text: "The first three seconds. If the team passes sideways or backwards, the counter attack is usually over.",
      },
    ],
  },
  {
    id: "atk-switch",
    category: "attack",
    title: "Switching Play",
    summary: "Move the ball to the side where defenders are not.",
    points: [
      {
        label: "The idea",
        text: "Defences slide towards the ball. The far side of the pitch is therefore usually the least protected.",
      },
      {
        label: "How it works",
        text: "A long diagonal pass, or several quick passes through midfield, moves the ball to the free player on the opposite wing.",
      },
      {
        label: "Simple example",
        text: "The team keeps the ball on the right until defenders crowd that side, then plays one long pass to the free left winger.",
      },
      {
        label: "Watch for",
        text: "The far winger standing alone and quietly pointing. He usually saw the switch before the crowd did.",
      },
    ],
  },

  // DEFENSE
  {
    id: "def-marking",
    category: "defense",
    title: "Marking",
    summary: "Staying responsible for an opponent.",
    points: [
      {
        label: "The idea",
        text: "Marking means making sure an opponent cannot receive the ball comfortably, or cannot turn if they do.",
      },
      {
        label: "How it works",
        text: "The defender stands slightly to the side, close enough to touch, keeping both the ball and the opponent in view.",
      },
      {
        label: "Simple example",
        text: "At a corner, each defender is given one attacker to follow anywhere in the box.",
      },
      {
        label: "Watch for",
        text: "The difference between man marking (follow a person) and zonal marking (protect an area).",
      },
    ],
  },
  {
    id: "def-pressing",
    category: "defense",
    title: "Pressing",
    summary: "Actively hunting the ball as a group.",
    points: [
      {
        label: "The idea",
        text: "Pressing is not one player chasing. It is the whole team moving up together to reduce the opponent's options.",
      },
      {
        label: "How it works",
        text: "The nearest player closes the ball carrier, while teammates cover the nearby passing options so the only pass left is a bad one.",
      },
      {
        label: "Simple example",
        text: "The striker runs at the centre back but curves his run so a pass to the other centre back is blocked.",
      },
      {
        label: "Watch for",
        text: "A press only works if everyone starts together. One player pressing alone just leaves a hole.",
      },
    ],
  },
  {
    id: "def-shape",
    category: "defense",
    title: "Defensive Shape",
    summary: "Staying compact and organised without the ball.",
    points: [
      {
        label: "The idea",
        text: "Good defending is mostly about distances: short gaps between players and between lines.",
      },
      {
        label: "How it works",
        text: "The team keeps its lines close together and shifts sideways as one unit, so no dangerous gap ever opens in the middle.",
      },
      {
        label: "Simple example",
        text: "The ball moves to the right wing, and every defender and midfielder slides a few metres right together.",
      },
      {
        label: "Watch for",
        text: "The far full back tucking inside instead of staying wide against nobody.",
      },
    ],
  },
  {
    id: "def-cover",
    category: "defense",
    title: "Covering",
    summary: "Being the safety net behind a teammate.",
    points: [
      {
        label: "The idea",
        text: "When one defender challenges for the ball, another stands behind at an angle in case the challenger is beaten.",
      },
      {
        label: "How it works",
        text: "The covering defender positions a few metres deeper and slightly inside, so a dribble past the first defender runs straight into the second.",
      },
      {
        label: "Simple example",
        text: "The right back steps out to the winger; the nearest centre back shuffles across to protect the space behind him.",
      },
      {
        label: "Watch for",
        text: "Defenders standing in a flat line with nobody covering. That is when one dribble breaks the whole defence.",
      },
    ],
  },
  {
    id: "def-highline",
    category: "defense",
    title: "High Defensive Line",
    summary: "Defending far from your own goal.",
    points: [
      {
        label: "The idea",
        text: "By pushing the back line up the pitch, the team squeezes the opponent into a small area and stays close to their own attack.",
      },
      {
        label: "How it works",
        text: "The defence steps up together, often to just behind the halfway line, and relies on the offside rule plus a quick goalkeeper.",
      },
      {
        label: "Simple example",
        text: "The ball is cleared, the defenders sprint forward as a line, and the opposition striker is left offside.",
      },
      {
        label: "Watch for",
        text: "The risk: one accurate long pass over the top can put a fast striker one-on-one with the keeper.",
      },
    ],
  },
  {
    id: "def-lowblock",
    category: "defense",
    title: "Low Block",
    summary: "Defending deep and refusing to leave space behind.",
    points: [
      {
        label: "The idea",
        text: "The team drops close to its own goal, removing the space behind the defence entirely.",
      },
      {
        label: "How it works",
        text: "Two compact lines sit inside their own third. The opponent is allowed to have the ball, but only in harmless areas.",
      },
      {
        label: "Simple example",
        text: "A team defends with everyone behind the ball, forcing shots from long range, then counter attacks when they win it.",
      },
      {
        label: "Watch for",
        text: "The trade-off: you concede possession and territory, and it is tiring, but you concede far fewer clear chances.",
      },
    ],
  },
  {
    id: "def-offside",
    category: "defense",
    title: "Offside Trap",
    summary: "Stepping up together to catch attackers offside.",
    points: [
      {
        label: "The idea",
        text: "An attacker is offside if they are beyond the last defender when the ball is played forward to them.",
      },
      {
        label: "How it works",
        text: "Just before the pass, the whole back line steps forward at the same moment, leaving the attacker behind them.",
      },
      {
        label: "Simple example",
        text: "The midfielder shapes to play a through ball, the four defenders step up as one, and the flag goes up.",
      },
      {
        label: "Watch for",
        text: "It only works if all defenders move together. One slow defender keeps the attacker onside.",
      },
    ],
  },
];

export type GlossaryTerm = { term: string; definition: string };

export const glossary: GlossaryTerm[] = [
  {
    term: "Press",
    definition:
      "Moving towards the player with the ball, as a team, to force a mistake or win the ball back quickly.",
  },
  {
    term: "Counter Attack",
    definition:
      "Attacking quickly right after winning the ball, while the opponent is still out of position.",
  },
  {
    term: "Build Up",
    definition:
      "The first phase of an attack: passing the ball out from the goalkeeper and defenders into midfield.",
  },
  {
    term: "Transition",
    definition:
      "The few seconds after possession changes hands, when both teams are momentarily disorganised.",
  },
  {
    term: "Low Block",
    definition:
      "Defending deep, close to your own goal, with everyone behind the ball.",
  },
  {
    term: "High Line",
    definition:
      "Keeping the defenders far up the pitch to squeeze the opponent and use the offside rule.",
  },
  {
    term: "Half Space",
    definition:
      "The lane between the centre of the pitch and the wing. A great place to receive because it is hard to mark.",
  },
  {
    term: "Overlap",
    definition:
      "Running past a teammate on the outside to create a two-versus-one against the defender.",
  },
  {
    term: "Underlap",
    definition:
      "The same idea as an overlap, but the run goes on the inside of the teammate instead.",
  },
  {
    term: "Through Ball",
    definition:
      "A pass played into the space behind or between defenders for a teammate to run onto.",
  },
  {
    term: "Switch of Play",
    definition:
      "Moving the ball quickly from one side of the pitch to the other, where fewer defenders are.",
  },
  {
    term: "Man Marking",
    definition:
      "A defender is responsible for one specific opponent and follows them around the pitch.",
  },
  {
    term: "Zonal Marking",
    definition:
      "A defender is responsible for an area, and marks whichever opponent enters it.",
  },
  {
    term: "False 9",
    definition:
      "A striker who drops back into midfield instead of staying high, pulling centre backs out of position.",
  },
  {
    term: "Box-to-Box",
    definition:
      "A midfielder who runs the whole length of the pitch, helping to defend one box and attack the other.",
  },
  {
    term: "Target Man",
    definition:
      "A strong striker used to receive long passes, hold the ball, and bring teammates into the attack.",
  },
  {
    term: "Compact",
    definition:
      "Keeping short distances between players and lines so there is no space to play through.",
  },
  {
    term: "Second Ball",
    definition:
      "The loose ball after a header or a duel. Teams that win second balls keep attacks alive.",
  },
];

export const lessonById = (id: string) => lessons.find((l) => l.id === id);
export const lessonsByCategory = (c: LessonCategory) =>
  lessons.filter((l) => l.category === c);
