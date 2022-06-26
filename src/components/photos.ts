const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

//const unsplashLink = (id: string, width: number, height: number) =>
//  `https://source.unsplash.com/${id}/${width}x${height}`;

const phts = [
  {
    src: require("../images/k_j/firstHike.webp"),
    width: 5,
    height: 4,
    title: "Our first hike and photo at Pulpit Rock"
  },
  {
    src: require("../images/k_j/ricketts2.webp"),
    width: 3,
    height: 4,
    title: "Ricketts Glen"
  },
  {
    src: require("../images/k_j/delGap.webp"),
    width: 6,
    height: 4,
    title: "The Delaware Water Gap. Mount Minsi"
  },
  {
    src: require("../images/k_j/bakeOven.webp"),
    width: 3,
    height: 4,
    title: "Bake Oven Knob"
  },
  {
    src: require("../images/k_j/stargazing.webp"),
    width: 3,
    height: 4,
    title: "Stargazing"
  },
  {
    src: require("../images/k_j/hawkRock.webp"),
    width: 5,
    height: 4,
    title: "Hiking at Hawk Rock"
  },
  {
    src: require("../images/k_j/iceHike.webp"),
    width: 3,
    height: 4,
    title: "Ice hiking at Ricketts Glen with Valley to Summit"
  },
  {
    src: require("../images/k_j/garKnots.webp"),
    width: 3,
    height: 4,
    title: "Homemade garlic knots"
  },
  {
    src: require("../images/k_j/snowboarding.webp"),
    width: 3,
    height: 4,
    title: "Joseph teaching Katie to snowboard"
  },

  {
    src: require("../images/k_j/boulders.webp"),
    width: 5,
    height: 4,
    title: "Roxanne but its just Rocks. -Boulder Field"
  },
  {
    src: require("../images/k_j/greenLane.webp"),
    width: 3,
    height: 4,
    title: "Green Lane"
  },
  {
    src: require("../images/k_j/lehighGap.webp"),
    width: 5,
    height: 4,
    title: "Lehigh Gap (the otherside)"
  },
  {
    src: require("../images/k_j/grilledCheese.webp"),
    width: 3,
    height: 4,
    title: "Homemade grilled cheese and tomato soup"
  },
  {
    src: require("../images/k_j/cherrySprings.webp"),
    width: 3,
    height: 4,
    title: "Stargazing at Cherry Springs"
  },
  {
    src: require("../images/k_j/sumHike.webp"),
    width: 5,
    height: 4,
    title: "Hiking at Pole Steeple"
  },
  {
    src: require("../images/engagementphotos/Katie1665.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1671.webp"),
    width: 4,
    height: 6,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1708.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1709.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1777.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie2022.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1889.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie2018.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie1781.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie2076.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/engagementphotos/Katie2021.webp"),
    width: 3,
    height: 4,
    title: "Photo taken by: Yajaira Perez Photography"
  },
  {
    src: require("../images/k_j/ringingRocks.webp"),
    width: 5,
    height: 4,
    title: "Ringing Rocks"
  },
  {
    src: require("../images/k_j/gnocchi.webp"),
    width: 3,
    height: 4,
    title: "Homemade Gnocchi"
  },
  {
    src: require("../images/k_j/pumpkSeeds.webp"),
    width: 3,
    height: 4,
    title: "Using our leftover pumpkin seeds"
  },
  {
    src: require("../images/k_j/starWars.webp"),
    width: 3,
    height: 4,
    title: "Katie being silly at Green Lane"
  },
  {
    src: require("../images/k_j/mystery.webp"),
    width: 3,
    height: 4,
    title: "Joseph at Green Lane"
  },
  {
    src: require("../images/k_j/dumplings.webp"),
    width: 5,
    height: 4,
    title: "Joseph making dumplings"
  },
  {
    src: require("../images/k_j/formal1.webp"),
    width: 3,
    height: 4,
    title: "Katie's college formal"
  },
  {
    src: require("../images/k_j/formal3.webp"),
    width: 5,
    height: 4,
    title: "Katie's college formal"
  },
  {
    src: require("../images/k_j/formal2.webp"),
    width: 3,
    height: 4,
    title: "Katie's college formal"
  },

  {
    src: require("../images/k_j/confirm.webp"),
    width: 7,
    height: 5,
    title: "Joseph, Katie, and her friend Genevieve"
  },
  {
    src: require("../images/k_j/trexler.webp"),
    width: 6,
    height: 4,
    title: "Joseph and Katie at the Trexler Nature Preserve"
  },
  {
    src: require("../images/k_j/blueCake.webp"),
    width: 3,
    height: 4,
    title: "A Blueberry filling cake with lemon icing!"
  },
  {
    src: require("../images/k_j/sunset.webp"),
    width: 5,
    height: 4,
    title: "Chasing sunsets on campus"
  },
  {
    src: require("../images/k_j/ziti.webp"),
    width: 3,
    height: 4,
    title: "Katie waiting for the over to preheat for baked ziti"
  }
];

const photos = phts.map((photo) => ({
  //src: unsplashLink(photo.id, photo.width, photo.height),
  src: photo.src,
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
  title: photo.title,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      //src: unsplashLink(photo.id, breakpoint, height),
      src: photo.src,
      width: breakpoint,
      height
    };
  })
}));

export default photos;
