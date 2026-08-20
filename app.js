/* ============================================================
   TRIAL ZERO — quiz engine
   No build step, no framework, no server. Plain browser JS.
   ============================================================ */

var TZapp = (function () {
  "use strict";

  var CHANNEL = "https://youtube.com/@itstrialzero";
  var KEYS = ["A", "B", "C", "D", "E", "F"];
  var TOPIC_ORDER = ["water-pressure", "geostationary"];

  /* ---------- helpers ---------- */

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function el(id) { return document.getElementById(id); }

  function param(name) {
    var m = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  function topics() {
    return (window.TZ && window.TZ.topics) || {};
  }

  /* best score, stored per trial. Storage can be blocked, so never assume. */
  function bestKey(topicId, trialN) { return "tz:best:" + topicId + ":" + trialN; }

  function getBest(topicId, trialN) {
    try {
      var v = window.localStorage.getItem(bestKey(topicId, trialN));
      return v === null ? null : parseInt(v, 10);
    } catch (e) { return null; }
  }

  function setBest(topicId, trialN, score) {
    try {
      var prev = getBest(topicId, trialN);
      if (prev === null || score > prev) {
        window.localStorage.setItem(bestKey(topicId, trialN), String(score));
      }
    } catch (e) { /* private mode, storage full — scores just won't persist */ }
  }

  /* ---------- home ---------- */

  function renderHome() {
    var host = el("topics");
    if (!host) return;

    var all = topics();
    var html = "";

    TOPIC_ORDER.forEach(function (tid) {
      var t = all[tid];
      if (!t) return;

      html += '<article class="topic">';
      html += '<h3>' + esc(t.title) + '</h3>';
      html += '<p class="sub">' + esc(t.subtitle) + '</p>';
      html += '<p class="blurb">' + esc(t.blurb) + '</p>';

      if (t.video && t.video.url) {
        html += '<a class="videolink" href="' + esc(t.video.url) + '" target="_blank" rel="noopener">'
             +  '<span class="slash"></span>Watch the experiment</a>';
      } else {
        html += '<span class="soon">Video coming soon</span>';
      }

      html += '<div class="trials">';
      t.trials.forEach(function (tr) {
        var best = getBest(t.id, tr.n);
        var total = tr.questions.length;
        html += '<a class="trial" href="quiz.html?topic=' + encodeURIComponent(t.id)
             +  '&trial=' + tr.n + '">'
             +  '<span class="num"><span>' + tr.n + '</span></span>'
             +  '<span class="meta">'
             +    '<strong>' + esc(tr.name) + '</strong>'
             +    '<small>' + esc(tr.note) + ' &middot; ' + total + ' questions</small>'
             +  '</span>'
             +  (best !== null ? '<span class="best">' + best + '/' + total + '</span>' : '')
             +  '<span class="go">&rsaquo;</span>'
             +  '</a>';
      });
      html += '</div></article>';
    });

    host.innerHTML = html;
  }

  /* ---------- quiz ---------- */

  /* Options are shuffled fresh each run, so no letter pattern can be memorised
     or guessed. Questions flagged `ordered` keep their order — those are the
     ones where the options form a real sequence (ascending numbers, top to
     bottom), and scrambling them would just read as sloppy. */
  function buildRun(trial) {
    return trial.questions.map(function (q) {
      var idx = q.options.map(function (_, i) { return i; });

      if (!q.ordered) {
        for (var i = idx.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
        }
      }

      return {
        q: q.q,
        why: q.why,
        options: idx.map(function (o) { return q.options[o]; }),
        answer: idx.indexOf(q.answer)
      };
    });
  }

  var S = null;   /* live quiz state */

  function renderQuiz() {
    var stage = el("stage");
    if (!stage) return;

    var tid = param("topic");
    var trialN = parseInt(param("trial"), 10);
    var topic = topics()[tid];
    var trial = null;

    if (topic && topic.trials) {
      topic.trials.forEach(function (tr) { if (tr.n === trialN) trial = tr; });
    }

    if (!topic || !trial) {
      stage.innerHTML =
        '<div class="qcard fade-in">' +
        '<p class="eyebrow is-blue"><span class="slash"></span>Nothing here</p>' +
        '<h2 class="qtext">That trial does not exist.</h2>' +
        '<p style="color:var(--muted);margin:0 0 22px">The link may be mistyped, or the trial may have been renamed.</p>' +
        '<a class="btn" href="index.html">Back to all trials</a></div>';
      return;
    }

    S = {
      topic: topic,
      trial: trial,
      qs: buildRun(trial),
      i: 0,
      picks: new Array(trial.questions.length).fill(null)
    };
    drawQuestion();
  }

  function drawQuestion() {
    var stage = el("stage");
    var qs = S.qs;
    var q = qs[S.i];
    var total = qs.length;

    var pips = "";
    for (var p = 0; p < total; p++) {
      var cls = S.picks[p] !== null ? "is-done" : (p === S.i ? "is-now" : "");
      pips += '<i class="' + cls + '"></i>';
    }

    var opts = "";
    q.options.forEach(function (o, idx) {
      opts += '<button type="button" class="opt' + (S.picks[S.i] === idx ? " is-picked" : "") + '"'
           +  ' data-pick="' + idx + '">'
           +  '<span class="k">' + KEYS[idx] + '</span>'
           +  '<span>' + esc(o) + '</span></button>';
    });

    var last = S.i === total - 1;
    var answeredAll = S.picks.every(function (v) { return v !== null; });

    stage.innerHTML =
      '<div class="quiz-head">' +
        '<p class="crumb"><a href="index.html">' + esc(S.topic.title) + '</a>' +
        ' <b>' + esc(S.trial.name) + '</b></p>' +
        '<div class="pips">' + pips + '</div>' +
        '<p class="counter">Question ' + (S.i + 1) + ' of ' + total + '</p>' +
      '</div>' +
      '<div class="qcard fade-in">' +
        '<h2 class="qtext">' + esc(q.q) + '</h2>' +
        '<div class="opts" id="opts">' + opts + '</div>' +
        '<div class="nav">' +
          (S.i > 0 ? '<button type="button" class="btn is-ghost" id="back">Back</button>' : '') +
          '<span class="grow"></span>' +
          (last
            ? '<button type="button" class="btn is-mint" id="submit"' + (answeredAll ? "" : " disabled") + '>See results</button>'
            : '<button type="button" class="btn" id="next"' + (S.picks[S.i] === null ? " disabled" : "") + '>Next</button>') +
        '</div>' +
      '</div>';

    el("opts").addEventListener("click", function (ev) {
      var btn = ev.target.closest ? ev.target.closest(".opt") : null;
      if (!btn) return;
      S.picks[S.i] = parseInt(btn.getAttribute("data-pick"), 10);
      drawQuestion();
    });

    var b = el("back");
    if (b) b.addEventListener("click", function () { S.i--; drawQuestion(); });

    var n = el("next");
    if (n) n.addEventListener("click", function () { S.i++; drawQuestion(); });

    var s = el("submit");
    if (s) s.addEventListener("click", drawResults);

    window.scrollTo(0, 0);
  }

  function verdict(score, total) {
    var pct = score / total;
    if (pct === 1) return "Every single one. Nothing left to teach you here.";
    if (pct >= 0.8) return "Strong. Read the ones you missed and you have got this.";
    if (pct >= 0.5) return "Halfway there. The explanations below are where the marks are.";
    return "Rough round &mdash; which is exactly why the explanations exist. Read them, then run it again.";
  }

  function drawResults() {
    var stage = el("stage");
    var qs = S.qs;
    var total = qs.length;
    var score = 0;

    qs.forEach(function (q, i) { if (S.picks[i] === q.answer) score++; });
    setBest(S.topic.id, S.trial.n, score);

    var best = getBest(S.topic.id, S.trial.n);

    var html =
      '<div class="quiz-head">' +
        '<p class="crumb"><a href="index.html">' + esc(S.topic.title) + '</a>' +
        ' <b>' + esc(S.trial.name) + '</b></p>' +
      '</div>' +
      '<div class="fade-in">' +
      '<div class="score">' +
        '<p class="big">' + score + '<small>/' + total + '</small></p>' +
        '<p class="verdict">' + verdict(score, total) + '</p>' +
        (best !== null && best > score ? '<p class="pb">Your best so far: ' + best + '/' + total + '</p>' : '') +
      '</div>';

    html += '<div class="review">';
    qs.forEach(function (q, i) {
      var pick = S.picks[i];
      var right = pick === q.answer;

      html += '<article class="rq ' + (right ? "is-right" : "is-wrong") + '">';
      html += '<p class="tag"><span class="slash"></span>' +
              (right ? "Correct" : "Not this time") + ' &middot; Q' + (i + 1) + '</p>';
      html += '<h4>' + esc(q.q) + '</h4>';

      if (!right && pick !== null) {
        html += '<div class="line yours"><span class="lk">' + KEYS[pick] + '</span>' +
                '<span>' + esc(q.options[pick]) + '<br><span style="color:var(--dim);font-size:13px">You picked this</span></span></div>';
      }
      html += '<div class="line correct"><span class="lk">' + KEYS[q.answer] + '</span>' +
              '<span>' + esc(q.options[q.answer]) + '<br><span style="color:var(--dim);font-size:13px">Correct answer</span></span></div>';
      html += '<p class="why">' + esc(q.why) + '</p>';
      html += '</article>';
    });
    html += '</div>';

    var nextTrial = null;
    S.topic.trials.forEach(function (tr) {
      if (tr.n === S.trial.n + 1) nextTrial = tr;
    });

    var watchUrl = (S.topic.video && S.topic.video.url) ? S.topic.video.url : CHANNEL;
    var watchLabel = (S.topic.video && S.topic.video.url) ? "Watch the experiment" : "Go to the channel";

    html += '<div class="after">' +
      '<h3>' + (nextTrial ? "Ready for " + esc(nextTrial.name) + "?" : "That was the last trial") + '</h3>' +
      '<p>' + (nextTrial
        ? esc(nextTrial.note) + ". Ten more questions."
        : "Try the other topic, or go back and see if you can clear this one without a single miss.") + '</p>' +
      '<div class="row">' +
        (nextTrial
          ? '<a class="btn" href="quiz.html?topic=' + encodeURIComponent(S.topic.id) + '&trial=' + nextTrial.n + '">Start ' + esc(nextTrial.name) + '</a>'
          : '') +
        '<button type="button" class="btn is-ghost" id="again">Run it again</button>' +
        '<a class="btn is-ghost" href="' + esc(watchUrl) + '" target="_blank" rel="noopener">' + watchLabel + '</a>' +
        '<a class="btn is-ghost" href="index.html">All trials</a>' +
      '</div></div></div>';

    stage.innerHTML = html;

    el("again").addEventListener("click", function () {
      S.qs = buildRun(S.trial);
      S.i = 0;
      S.picks = new Array(total).fill(null);
      drawQuestion();
    });

    window.scrollTo(0, 0);
  }

  return { renderHome: renderHome, renderQuiz: renderQuiz };
})();
