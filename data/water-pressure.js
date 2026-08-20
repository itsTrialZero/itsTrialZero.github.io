window.TZ = window.TZ || { topics: {} };

window.TZ.topics["water-pressure"] = {
  id: "water-pressure",
  title: "Water pressure",
  subtitle: "The bottle with holes in it",
  blurb: "One bottle, five holes, a tub of water. Everything about pressure falls out of that.",
  video: {
    id: "FNT82StmtdM",
    url: "https://youtu.be/FNT82StmtdM",
    title: "Water Pressure increases with Depth Experiment"
  },
  trials: [
    {
      n: 1,
      name: "Trial 1",
      note: "What you saw happen",
      questions: [
        {
          ordered: true,
          q: "In the bottle experiment, water shoots out fastest from which hole?",
          options: ["The top hole", "The middle hole", "The bottom hole", "All of them the same"],
          answer: 2,
          why: "The bottom hole has the most water sitting above it. More water above means a bigger push, so that jet leaves the bottle fastest."
        },
        {
          q: "Inside the bottle, water pressure increases as you go:",
          options: ["Upward", "Downward", "Sideways", "It stays the same everywhere"],
          answer: 1,
          why: "Every extra centimetre of water above a point adds its weight to the push at that point. Go deeper, and there is more water stacked above you."
        },
        {
          q: "What actually pushes the water out through a hole?",
          options: [
            "The weight of the water above the hole",
            "The plastic squeezing inward",
            "Air blowing in from outside",
            "The water spinning inside the bottle"
          ],
          answer: 0,
          why: "Water has weight. The column of water above a hole presses down on it, and that squeeze pushes water out sideways through the opening."
        },
        {
          q: "As the bottle empties and the water level drops, the jet from the bottom hole:",
          options: ["Gets stronger", "Gets weaker", "Stays exactly the same", "Stops instantly"],
          answer: 1,
          why: "Less water left above the hole means less weight pressing down on it. The push drops, so the jet gets shorter and weaker as the level falls."
        },
        {
          q: "You punch two holes at the same height, on opposite sides of the bottle. The two jets will be:",
          options: [
            "The same as each other",
            "Longer on the front side",
            "Longer on the back side",
            "Different every time"
          ],
          answer: 0,
          why: "Pressure depends on depth only, not on which direction you face. Same depth means the same push, so both jets look identical."
        },
        {
          q: "Water pressure pushes:",
          options: ["Only downward", "In every direction", "Only sideways", "Only upward"],
          answer: 1,
          why: "This is exactly why water shoots sideways out of a hole in the side of the bottle. If pressure only pushed downward, nothing would come out of a side hole at all."
        },
        {
          q: "Why is the bottle filled right to the top before the holes are opened?",
          options: [
            "To make the bottle heavier to hold",
            "To give the biggest depth, and so the strongest jets",
            "To stop air getting inside",
            "To help the bottle stand upright"
          ],
          answer: 1,
          why: "The deeper the water above a hole, the bigger the push. Filling to the brim gives the largest gap between the top jet and the bottom jet, which is what makes the effect easy to see."
        },
        {
          q: "A diver swims deeper into a pool. The pressure on their body:",
          options: ["Decreases", "Increases", "Stays the same", "Drops to zero"],
          answer: 1,
          why: "Exactly the same rule as the bottle. Going deeper means more water stacked above you, and every bit of it presses in."
        },
        {
          q: "Pressure is normally measured in:",
          options: ["Newtons", "Pascals", "Litres", "Metres"],
          answer: 1,
          why: "Pressure is force spread over an area. One pascal is one newton of force pushing on one square metre."
        },
        {
          q: "Which everyday thing is the clearest proof that water pressure grows with depth?",
          options: [
            "A dam wall is much thicker at the bottom than at the top",
            "A river flows downhill",
            "Ice floats on water",
            "Rain falls from clouds"
          ],
          answer: 0,
          why: "The bottom of a dam holds back the deepest water, so it takes the biggest push. Engineers put the most material exactly where the push is largest."
        }
      ]
    },
    {
      n: 2,
      name: "Trial 2",
      note: "Change one thing, predict the result",
      questions: [
        {
          q: "Water is squirting out of the holes. You screw the cap on tight. What happens?",
          options: [
            "The jets get stronger",
            "The jets slow down and almost stop",
            "Nothing changes",
            "Water starts shooting upward"
          ],
          answer: 1,
          why: "With the cap on, water that leaves cannot be replaced by air coming in. The space above the water stretches out and pulls back on it, holding the water in. Open the cap and the jets start again straight away."
        },
        {
          q: "Two bottles hold water to the same depth, but one is twice as wide. Which bottom hole shoots harder?",
          options: ["The wide one", "The narrow one", "Both the same", "Depends on the plastic"],
          answer: 2,
          why: "Pressure depends on how deep the water is, not how much of it there is. Both bottoms sit at the same depth, so both get the same push. This one catches almost everybody."
        },
        {
          ordered: true,
          q: "One hole is 5 cm below the surface, another is 20 cm below. The water's push at the deeper hole is about:",
          options: ["2 times bigger", "4 times bigger", "15 times bigger", "The same"],
          answer: 1,
          why: "The push from the water grows in step with depth. 20 cm is four times 5 cm, so the push is roughly four times as large."
        },
        {
          q: "You repeat the experiment with cooking oil, which is lighter than water. The jets are:",
          options: ["Stronger", "Weaker", "Exactly the same", "Reversed"],
          answer: 1,
          why: "The push depends on how heavy the liquid is as well as how deep it is. A lighter liquid presses down with less weight, so it leaves the hole with less force."
        },
        {
          q: "You carry the same bottle up a mountain and repeat the experiment. Compared with sea level, the jets are:",
          options: ["Clearly weaker", "Clearly stronger", "Almost exactly the same", "They stop working"],
          answer: 2,
          why: "Air presses on the water surface inside and on the outside of the hole by roughly the same amount, so it cancels out. What drives the jet is the depth of water above the hole, and that has not changed."
        },
        {
          q: "You lower the bottle into a tub until the holes are underwater. The jets:",
          options: [
            "Shoot out harder",
            "Weaken, and can even reverse",
            "Stay the same",
            "Turn into bubbles"
          ],
          answer: 1,
          why: "Now there is water pushing back on the outside of each hole too. Only the difference between the two levels matters, so the jets weaken. If the outside level is higher, water flows inward instead."
        },
        {
          q: "Sea water is heavier than fresh water for the same amount. At 30 cm depth, the push in sea water is:",
          options: ["Less", "More", "The same", "Zero"],
          answer: 1,
          why: "A heavier liquid means more weight sitting above the same depth, so the push at that depth is larger."
        },
        {
          q: "Why do deep-sea submarines have thick, rounded hulls?",
          options: [
            "To move faster through water",
            "To survive the huge pressure down there",
            "To float more easily",
            "To carry more fuel"
          ],
          answer: 1,
          why: "Thousands of metres of water above them presses in from every side at once. A rounded shape spreads that squeeze evenly instead of concentrating it, and thick walls resist what is left."
        },
        {
          q: "Why is a household water tank put on the roof instead of on the ground?",
          options: [
            "It stays cooler up there",
            "The height gives the depth that pushes water out of taps below",
            "It is easier to fill",
            "It keeps the water cleaner"
          ],
          answer: 1,
          why: "The height of water above your tap is what creates the push. A higher tank means more depth above the tap, and so a stronger flow."
        },
        {
          q: "You want the gap between the top jet and the bottom jet to look as dramatic as possible. You should use:",
          options: [
            "A short, wide bottle",
            "A tall, narrow bottle",
            "Any bottle, it makes no difference",
            "A bottle with bigger holes"
          ],
          answer: 1,
          why: "Only depth changes the push, so what you want is the biggest possible distance between the top hole and the bottom hole. A tall bottle gives you that. Width adds water but adds no depth."
        }
      ]
    },
    {
      n: 3,
      name: "Trial 3",
      note: "Two effects fighting each other",
      questions: [
        {
          ordered: true,
          q: "The bottle stands on a table with three holes: near the bottom, halfway up, and near the top. Which jet lands furthest away from the bottle?",
          options: ["The bottom one", "The middle one", "The top one", "They all land together"],
          answer: 1,
          why: "Two things fight here. The bottom jet leaves fastest, but it is so low that it hits the table almost immediately. The top jet has a long way to fall, but it starts out slow. The middle hole balances speed against falling time, and wins."
        },
        {
          q: "Three oddly shaped containers hold water to exactly the same depth. The push on the base is:",
          options: [
            "Biggest in the widest one",
            "Biggest in the narrowest one",
            "The same in all three",
            "Impossible to compare"
          ],
          answer: 2,
          why: "Pressure depends only on depth. Shape changes how much water a container holds, not how deep it is. Same depth means the same push on the base, even when one container holds ten times more water."
        },
        {
          q: "With the cap sealed, you squeeze the sides of the bottle. What happens to the jets?",
          options: [
            "Only the bottom one strengthens",
            "All of them strengthen by roughly the same amount",
            "All of them weaken",
            "Nothing happens"
          ],
          answer: 1,
          why: "Squeezing raises the pressure everywhere inside at once, and that extra push adds equally at every hole. This is the idea behind hydraulic brakes: press in one place, and the push arrives everywhere."
        },
        {
          q: "Someone drops the bottle off a balcony. While it is falling, the jets:",
          options: ["Get stronger", "Stop", "Stay the same", "Reverse direction"],
          answer: 1,
          why: "The push comes from the water's weight pressing down. In free fall the bottle and the water fall together, so the water has nothing to press against. No weight, no push, no jets."
        },
        {
          q: "One hole sits at depth h, another at depth 4h. The water leaves the deeper hole at:",
          options: ["4 times the speed", "2 times the speed", "16 times the speed", "The same speed"],
          answer: 1,
          why: "Speed does not keep up with depth. Going four times deeper only doubles the speed. That is why the bottom jet never looks as dramatically faster as you expect."
        },
        {
          ordered: true,
          q: "Water stands 40 cm deep. To make a jet land as far from the bottle as possible, put the hole at:",
          options: ["10 cm below the surface", "20 cm below the surface", "30 cm below the surface", "39 cm below the surface"],
          answer: 1,
          why: "Halfway down is the sweet spot. Lower than that and the water is fast but has no time to travel before it lands. Higher and it has plenty of time but not much speed. The middle multiplies out to the longest throw."
        },
        {
          q: "A U-shaped tube holds water. You pour oil into one arm. At the level where the oil and water meet, the push on each side is:",
          options: ["Equal", "Bigger on the oil side", "Bigger on the water side", "Impossible to compare"],
          answer: 0,
          why: "If the pushes were unequal, liquid would keep sliding across until they matched. They always settle equal. Because oil is lighter, it takes a taller column of oil to match the water, which is why the oil sits higher."
        },
        {
          q: "How does a drinking straw actually work?",
          options: [
            "Your mouth pulls the liquid upward",
            "You lower the pressure inside, and ordinary air pressure outside pushes the drink up",
            "The liquid is attracted to your mouth",
            "Gravity works backwards inside a straw"
          ],
          answer: 1,
          why: "You cannot pull a liquid. What you do is remove air from the straw, which lowers the pressure inside it. The air pressing down on the surface of your drink then has nothing balancing it, so it pushes the liquid up the tube."
        },
        {
          ordered: true,
          q: "A perfect suction pump at sea level can lift water no higher than about:",
          options: ["3 metres", "10 metres", "30 metres", "There is no limit"],
          answer: 1,
          why: "Air pressure can only hold up a column of water so tall before the water's own weight balances it, and that limit is around ten metres. It is why deep wells use pumps that sit at the bottom and push upward instead of sucking from the top."
        },
        {
          q: "You make one hole much wider than the others, at the same depth. That jet will:",
          options: [
            "Travel much further",
            "Travel about the same distance, but carry far more water",
            "Travel much less far",
            "Not flow at all"
          ],
          answer: 1,
          why: "The speed water leaves at is set by depth, not by hole size. A wider hole lets more water through every second, but each drop still leaves at the same speed, so the jet reaches roughly the same place."
        }
      ]
    }
  ]
};
