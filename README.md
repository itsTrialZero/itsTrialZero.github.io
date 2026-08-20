# Trial Zero — quiz site

A static quiz site for the [Trial Zero](https://youtube.com/@itstrialzero) YouTube channel.
No build step, no framework, no server, no database. Plain HTML, CSS and JavaScript.

Two topics, three trials each, ten questions per trial. Answer all ten, submit,
and every question comes back with the correct answer and an explanation.

---

## Put it online

1. On GitHub, create a new **public** repository. Name it `trialzero-quiz` (or anything).
2. Upload every file and folder from this bundle into the repo, keeping the structure exactly as it is.
3. Go to **Settings → Pages**.
4. Under *Source*, choose **Deploy from a branch**. Branch: `main`, folder: `/ (root)`. Save.
5. Wait about a minute, then reload the Pages settings screen. Your address appears at the top.

It will look like `https://YOURUSERNAME.github.io/trialzero-quiz/`

Put that link in your YouTube channel's **Links** section, and in the description of each video.

### Want a shorter address?

Name the repo exactly `YOURUSERNAME.github.io` instead, and the site lives at
`https://YOURUSERNAME.github.io/` with nothing after it. One repo per account can do this.

---

## Files

```
index.html                 home page, lists topics and trials
quiz.html                  runs a trial and shows results
style.css                  all styling
app.js                     quiz engine
data/water-pressure.js     30 questions
data/geostationary.js      30 questions
img/logo.png               your TØ mark, background removed
img/wordmark.png           your TRIAL ZERO wordmark, background removed
```

You can open `index.html` by double-clicking it to preview locally. It works offline
because the questions are plain JavaScript files rather than fetched JSON.

---

## Add a question

Open the topic file in `data/` and add one entry to the `questions` array:

```js
{
  q: "Your question text",
  options: ["First", "Second", "Third", "Fourth"],
  answer: 2,
  why: "The explanation. This is the part people actually come back for."
}
```

`answer` counts from **zero**, so `2` means the third option.

Commit the change and GitHub Pages updates itself in about a minute.

### Two things worth knowing

**Options get shuffled every time someone plays.** This is deliberate. Without it,
correct answers pile up on one letter and people stop reading — they just tap B
repeatedly. Shuffling also means somebody replaying a trial gets a genuinely
different run.

**If your options are a real sequence, add `ordered: true`.** Ascending numbers,
or top-to-bottom positions, should never be scrambled — it reads as sloppy:

```js
{
  ordered: true,
  q: "Roughly how high is geostationary orbit?",
  options: ["400 km", "3,600 km", "35,786 km", "384,000 km"],
  answer: 2,
  why: "..."
}
```

---

## Add a whole new topic

1. Copy `data/water-pressure.js` to `data/your-topic.js`.
2. Change the key on line 3 and the `id` field to match your new filename.
3. Fill in `title`, `subtitle`, `blurb`, and the `video` block. If the video is not
   published yet, set `video: null` and the site shows *Video coming soon* instead
   of a dead link.
4. Add `<script src="data/your-topic.js"></script>` to **both** `index.html` and
   `quiz.html`, next to the two that are already there.
5. In `app.js`, add the topic id to `TOPIC_ORDER` near the top. That array controls
   the order topics appear in on the home page.

---

## Best scores

Scores are kept in the visitor's own browser, on their own device. Nothing is sent
anywhere and there are no accounts. If someone clears their browser data or opens
the site in private mode, their best scores go with it — that is expected.

---

## A note on growing this

Adding a fourth trial to a topic is tempting, but the thing that brings people back
is explanation quality, not question count. Thirty good questions with explanations
that actually land beat sixty average ones. Nobody has ever bookmarked a quiz site
for having a lot of questions.
