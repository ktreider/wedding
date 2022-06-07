const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  {
    id: "Osq7UAVxIOI",
    width: 1080,
    height: 780,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "Dhmn6ete6g8",
    width: 1080,
    height: 1620,
    alt: "alt",
    title: "look i can do captions!"
  },
  {
    id: "RkBTPqPEGDo",
    width: 1080,
    height: 720,
    alt: "alt",
    title: "glance at a map"
  },
  {
    id: "Yizrl9N_eDA",
    width: 1080,
    height: 721,
    alt: "alt",
    title: "hiking up the mountain"
  },
  {
    id: "KG3TyFi0iTU",
    width: 1080,
    height: 1620,
    alt: "alt",
    title: "coffee timeee"
  },
  {
    id: "Jztmx9yqjBw",
    width: 1080,
    height: 607,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "-heLWtuAN3c",
    width: 1080,
    height: 608,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "xOigCUcFdA8",
    width: 1080,
    height: 720,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "1azAjl8FTnU",
    width: 1080,
    height: 1549,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "ALrCdq-ui_Q",
    width: 1080,
    height: 720,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "twukN12EN7c",
    width: 1080,
    height: 694,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "9UjEyzA6pP4",
    width: 1080,
    height: 1620,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "sEXGgun3ZiE",
    width: 1080,
    height: 720,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "S-cdwrx-YuQ",
    width: 1080,
    height: 1440,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "q-motCAvPBM",
    width: 1080,
    height: 1620,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "Xn4L310ztMU",
    width: 1080,
    height: 810,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "ls94iFAQerE",
    width: 1080,
    height: 1620,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "X48pUOPKf7A",
    width: 1080,
    height: 160,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "GbLS6YVXj0U",
    width: 1080,
    height: 810,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "9CRd1J1rEOM",
    width: 1080,
    height: 720,
    alt: "alt",
    title: "this is the title"
  },
  {
    id: "xKhtkhc9HbQ",
    width: 1080,
    height: 1440,
    alt: "alt",
    title: "this is the title"
  }
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  alt: photo.alt,
  title: photo.title,
  images: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height
    };
  })
}));

export default photos;
