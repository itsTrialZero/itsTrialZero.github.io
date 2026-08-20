window.TZ = window.TZ || { topics: {} };

window.TZ.topics["geostationary"] = {
  id: "geostationary",
  title: "Geostationary satellites",
  subtitle: "How something stays parked in the sky",
  blurb: "It is racing at 11,000 km an hour and it looks completely still. Both of those are true.",
  video: null,
  trials: [
    {
      n: 1,
      name: "Trial 1",
      note: "The basic picture",
      questions: [
        {
          q: "A geostationary satellite looks like it is standing still in the sky. In reality it is:",
          options: [
            "Not moving at all",
            "Moving at about 11,000 km per hour",
            "Held in place by Earth's magnetic pull",
            "Too far away for us to see it move"
          ],
          answer: 1,
          why: "It is racing around the Earth at roughly three kilometres every second. It looks frozen because the ground below is turning at exactly the same rate, like two trains running side by side at matching speed."
        },
        {
          q: "Two satellites go into geostationary orbit. One is twice as heavy. The heavier one needs:",
          options: ["A higher spot", "More speed", "The same height and the same speed", "A lower spot"],
          answer: 2,
          why: "Weight makes no difference at all. A loose bolt and a full-size satellite orbit in exactly the same way, because heavier things are pulled harder but are also harder to move, and the two effects cancel out."
        },
        {
          q: "One satellite orbits 300 km up, another 35,786 km up. Which is moving faster?",
          options: [
            "They both move at the same speed",
            "Whichever one is heavier",
            "The one at 300 km",
            "The one at 35,786 km, because its path is longer"
          ],
          answer: 2,
          why: "Closer to Earth the pull is stronger, so a satellite has to move faster to keep from falling in. The low one does about 7.7 km per second against 3.1 for the high one."
        },
        {
          q: "A geostationary satellite has to sit directly above:",
          options: ["The equator", "The North Pole", "Any city you choose", "A different place each day"],
          answer: 0,
          why: "Every orbit is a ring centred on the middle of the Earth. Only a ring above the equator lets a satellite stay over one spot. Tilt it and the satellite swings north and south during the day."
        },
        {
          q: "In India, the TV dishes on rooftops all point the same way. Which way, and why?",
          options: [
            "Straight up, because the satellite is overhead",
            "North, towards the pole",
            "East, the way Earth spins",
            "South, because the satellite sits above the equator"
          ],
          answer: 3,
          why: "India is north of the equator and the satellite sits right above it, so you always look south to find it. The further north you live, the lower in the sky it appears."
        },
        {
          q: "How long does a geostationary satellite take to go around the Earth once?",
          options: [
            "Exactly 24 hours",
            "12 hours",
            "It depends on how heavy the satellite is",
            "23 hours 56 minutes 4 seconds"
          ],
          answer: 3,
          why: "A day is 24 hours because that is how long the Sun takes to come back overhead. But Earth's real spin is about four minutes shorter, and the satellite has to match the ground, not the Sun. Those four minutes add up to one whole extra turn a year, which is why Earth actually spins 366 times a year."
        },
        {
          q: "What holds a satellite in its orbit?",
          options: ["Gravity", "Magnetism", "Rockets firing constantly", "Air pressure"],
          answer: 0,
          why: "It is falling towards Earth the whole time, but moving sideways fast enough that it keeps missing. That endless fall around the planet is what an orbit is."
        },
        {
          ordered: true,
          q: "Roughly how high is geostationary orbit?",
          options: ["400 km", "3,600 km", "35,786 km", "384,000 km"],
          answer: 2,
          why: "About 36,000 km up, which is roughly a tenth of the way to the Moon. The space station at 400 km is so much lower that it crosses your whole sky in a few minutes."
        },
        {
          q: "What are geostationary satellites mostly used for?",
          options: [
            "TV broadcasting and weather watching",
            "Mining asteroids",
            "Measuring earthquakes underground",
            "Growing crops in space"
          ],
          answer: 0,
          why: "Because it never moves in your sky, your dish can be bolted in one direction and left alone for years. For the same reason a weather satellite up there can film the same face of Earth all day long."
        },
        {
          q: "Why can't geostationary satellites cover the North and South Poles?",
          options: [
            "It is too cold there for the electronics",
            "Earth's magnetic field blocks the signal",
            "From the poles, the satellite sits on or below the horizon",
            "They can, coverage is worldwide"
          ],
          answer: 2,
          why: "It sits above the equator, so the further north or south you go, the lower it drops in your sky. Past about 81 degrees the curve of the Earth hides it completely."
        }
      ]
    },
    {
      n: 2,
      name: "Trial 2",
      note: "What happens when things drift",
      questions: [
        {
          q: "A geostationary satellite drifts 100 km higher. From the ground it now appears to:",
          options: [
            "Move slowly towards the west",
            "Move slowly towards the east",
            "Stay exactly where it was",
            "Come back down on its own"
          ],
          answer: 0,
          why: "Higher up the pull is weaker, so it slows down, and it also has a bigger circle to cover. Both make its lap longer than a day, so the ground pulls ahead. Falling behind a west-to-east spin looks exactly like sliding west."
        },
        {
          q: "A phone call through a geostationary satellite has a noticeable delay. Why?",
          options: [
            "The transmitter is too weak",
            "The signal travels about 72,000 km up and back",
            "Clouds slow the signal down",
            "The satellite is moving too fast"
          ],
          answer: 1,
          why: "Up and back is roughly 72,000 km, and even at the speed of light that costs about a quarter of a second each way. Two people talking hear nearly half a second of lag."
        },
        {
          q: "What is station keeping?",
          options: [
            "Firing small thrusters a few times a year to hold position",
            "Cleaning the solar panels",
            "Keeping the radio switched on",
            "Docking at a space station"
          ],
          answer: 0,
          why: "Nothing holds a satellite in place by itself. The Sun, the Moon and Earth's slightly uneven shape all nudge it off its slot, so ground teams correct it with small burns a few times a year."
        },
        {
          q: "A satellite sits at exactly the right height, but its orbit is tilted 28 degrees. From the ground it appears to:",
          options: [
            "Stay perfectly fixed",
            "Trace a slow figure-8 over one day",
            "Drift steadily westward forever",
            "Circle the pole once a day"
          ],
          answer: 1,
          why: "An orbit must be centred on Earth's middle, so a path that reaches 28 degrees north has to swing to 28 degrees south half a day later. Add the ground turning underneath that north-south swing, and the track you see from below closes into a figure-8. Right speed, wrong tilt."
        },
        {
          q: "What happens to a geostationary satellite when it runs out of fuel?",
          options: [
            "It falls to Earth immediately",
            "It is pushed to a higher graveyard orbit and switched off",
            "It explodes",
            "It becomes a second moon"
          ],
          answer: 1,
          why: "Without fuel it cannot hold its slot, and a drifting dead satellite is a hazard to its neighbours. So operators spend the very last of the fuel raising it a few hundred kilometres clear of the belt."
        },
        {
          q: "Why does Starlink use low orbits instead of geostationary ones?",
          options: [
            "Rockets are cheaper",
            "The signal delay is far shorter",
            "There is a better view of the stars",
            "There is less sunlight"
          ],
          answer: 1,
          why: "At around 550 km the round trip is a tiny fraction of 72,000 km, so the lag drops from about a quarter of a second to a few hundredths. That is the difference between an awkward call and a normal one."
        },
        {
          q: "How many satellites can the geostationary belt hold?",
          options: [
            "Unlimited",
            "A limited number, because they need space between them",
            "Exactly three",
            "Exactly one hundred"
          ],
          answer: 1,
          why: "They all share one ring. Two satellites too close together would be hard for a dish to tell apart, so slots are handed out internationally and the popular longitudes are crowded."
        },
        {
          q: "Three evenly spaced geostationary satellites can cover almost the whole planet, except:",
          options: ["The oceans", "The polar regions", "Deserts", "Mountain ranges"],
          answer: 1,
          why: "Spaced evenly around the equator, three of them see nearly all the inhabited land at once. The poles are the hole in that coverage, because from there the satellite has already dropped below the horizon."
        },
        {
          q: "Why does a geostationary orbit have to be a circle rather than an oval?",
          options: [
            "An oval orbit would speed up and slow down, so it could not stay over one spot",
            "Circles are easier to launch into",
            "Gravity only allows circular orbits",
            "It does not, they are ovals"
          ],
          answer: 0,
          why: "In a stretched orbit a satellite races when it is close and crawls when it is far. To hover over one spot it must move at a perfectly steady rate, and only a circle gives that."
        },
        {
          q: "If Earth suddenly stopped spinning, the satellite would:",
          options: [
            "Fall straight down",
            "Stay above the same place",
            "Fly off into space",
            "Slowly cross the sky, like the Moon does"
          ],
          answer: 3,
          why: "The satellite has no idea Earth is spinning. It keeps circling once a day whatever the ground does. It only looked still because you were being carried around at the same rate. Stop the ground and you stop matching, and now you watch it cross your sky."
        }
      ]
    },
    {
      n: 3,
      name: "Trial 3",
      note: "Where the numbers stop being obvious",
      questions: [
        {
          ordered: true,
          q: "Suppose Earth's day were 12 hours instead of 24. A geostationary satellite would have to sit:",
          options: [
            "Twice as high, about 71,000 km",
            "At the same height, 35,786 km",
            "Lower, about 20,000 km",
            "At half the height, about 17,900 km"
          ],
          answer: 2,
          why: "A shorter day means a shorter lap, so the satellite must come lower. But height and lap time do not shrink together. Halving the time only brings it down to about 20,000 km, not to half of 35,786. Most people say half."
        },
        {
          q: "A satellite drifts slightly below the correct height. Over the next month it appears to:",
          options: ["Drift west", "Drift east", "Stay put", "Wobble north and south"],
          answer: 1,
          why: "Lower means faster, and a smaller circle to cover. Its lap now takes less than a day, so it gains on the ground below. Gaining on a west-to-east spin looks like sliding east, which is the mirror image of drifting too high."
        },
        {
          q: "A satellite is nudged into a slightly oval orbit, but its average height is unchanged. From the ground it:",
          options: [
            "Stays fixed",
            "Traces a small east-west line each day",
            "Falls out of orbit",
            "Drifts west forever"
          ],
          answer: 1,
          why: "The average lap time is unchanged, so it comes back to the same place each day. But it runs fast at the low point and slow at the high point, and that shows up as a small daily swing east and west."
        },
        {
          ordered: true,
          q: "A geostationary satellite travels at roughly:",
          options: ["3 km per second", "8 km per second", "30 km per second", "300 metres per second"],
          answer: 0,
          why: "About 3 km every second, which is roughly 11,000 km an hour. The space station has to manage nearly 8 km per second because it is so much closer in."
        },
        {
          q: "If Earth's mass were doubled but its spin stayed the same, geostationary orbit would be:",
          options: ["Unchanged", "Higher up", "Lower down", "Impossible"],
          answer: 1,
          why: "Stronger gravity means a satellite at any given height would whip around faster than once a day. To slow its lap back down to one day, it has to move further out."
        },
        {
          ordered: true,
          q: "The Moon is about ten times further out than geostationary orbit. Its lap takes:",
          options: ["Less than a day", "About a day", "About 27 days", "Exactly one year"],
          answer: 2,
          why: "The same rule that puts geostationary orbit at 36,000 km keeps going. Further out means slower and a longer way round, and at 384,000 km that stretches a lap to roughly 27 days."
        },
        {
          q: "Twice a year, around March and September, geostationary satellites briefly lose sunlight. Why?",
          options: [
            "Earth's shadow falls across the belt",
            "They run low on fuel",
            "The Moon blocks the Sun",
            "Their panels are switched off for maintenance"
          ],
          answer: 0,
          why: "Around the equinoxes the Sun lines up with Earth's equator, which is exactly where the belt is. For a short spell each night the satellite passes through Earth's shadow and has to run on batteries."
        },
        {
          ordered: true,
          q: "The round trip for a signal through one geostationary satellite takes about:",
          options: ["0.02 seconds", "0.24 seconds", "1.5 seconds", "3 seconds"],
          answer: 1,
          why: "72,000 km at 300,000 km per second works out to roughly a quarter of a second. It sounds tiny written down, but in conversation it is long enough that both people start talking over each other."
        },
        {
          q: "Why can't a satellite hover fixed above Delhi instead of above the equator?",
          options: [
            "Any orbit has to be centred on the middle of the Earth",
            "There is not enough fuel to get there",
            "The air is too thick at that latitude",
            "Radio signals cannot reach that far north"
          ],
          answer: 0,
          why: "An orbit is a ring around Earth's centre. A ring that stayed only over 28 degrees north would have to be centred somewhere above the centre of the Earth, and gravity gives you no way to hold a ring there."
        },
        {
          q: "The height of geostationary orbit is set by:",
          options: [
            "The satellite's mass",
            "How fast Earth spins and how strongly it pulls",
            "The size of the solar panels",
            "Which country launched it"
          ],
          answer: 1,
          why: "The satellite's own mass cancels out of the problem completely. All that is left is Earth's spin rate, which sets the lap time you have to match, and Earth's pull, which decides what height gives you that lap time."
        }
      ]
    }
  ]
};
