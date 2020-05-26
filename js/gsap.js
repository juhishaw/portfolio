var timeline = gsap.timeline({
  // Add Some Default Option Here
});
timeline
  .from(".logo", { x: -150, duration: 1.2, opacity: 0 })
  .from(".icons-grp", { y: -100, duration: 1, opacity: 0 })
  .from(".buttons", { x: -100, duration: 2, opacity: 0 });

var letters = $(".text .white-txt");

TweenMax.staggerFrom(
  letters,
  1.0,
  { opacity: 0, y: 200, ease: Back.easeOut },
  1.0
);

var skills = new TimelineLite(),
  mySplitText = new SplitText(".small-txt", { type: "chars, words, lines" }),
  chars = mySplitText.chars;

TweenLite.set(".small-txt", { perspective: 400 });

skills
  .staggerFrom(
    mySplitText.chars,
    0.2,
    { delay: 2, autoAlpha: 0, scale: 4 },
    0.01,
    0.5
  )
  .staggerTo(
    mySplitText.words,
    0.1,
    { color: "#868ea3", scale: 0.9 },
    0.1,
    "words"
  )
  .staggerTo(
    mySplitText.words,
    0.2,
    { color: "#868ea3", scale: 1 },
    0.1,
    "words+=0.1"
  );

TweenMax.to(small-txt, 0.1, {
  textShadow: "5px 2px 15px #b08339)",
  color: "#b08339",
});
