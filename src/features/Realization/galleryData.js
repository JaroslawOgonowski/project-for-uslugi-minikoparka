import { nanoid } from "nanoid";
import g1p1 from "./images/g1p1.jpg"
import g1p2 from "./images/g1p2.jpg"
import g1p3 from "./images/g1p3.jpg"
import g2p1 from "./images/g2p1.jpg"
import g2p2 from "./images/g2p2.jpg"
import g2p3 from "./images/g2p3.jpg"
import g3p1 from "./images/g3p1.jpg"
import g3p2 from "./images/g3p2.jpg"
import g3p3 from "./images/g3p3.jpg"
export const galleryData =
  [
    {
      id: nanoid(),
      firstURL: g1p1,
      secondURL: g1p2,
      thirdURL: g1p3,
      content: "Przyłącze wodne"
    },
    {
      id: nanoid(),
      firstURL: g2p1,
      secondURL: g2p2,
      thirdURL: g2p3,
      content: "Szeregowiec który po kilkudziesięciu latach osiadł w gruncie razem z kanalizacją, częściowo wykonaną z kamionki i żeliwa. Spadek w niewłaściwym kierunki wynosił aż 5.5 %. Podjęte działania polegały na całkowitej przebudowie i wymianie rur na zgodne ze sztuką."
    },
    {
      id: nanoid(),
      firstURL: g3p1,
      secondURL: g3p2,
      thirdURL: g3p3,
      content: "Wykopy pod ławy fundamentowe."
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/314885754_564705915654660_5922818466914458236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PU3sqTRQylIAX-eUU7f&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfC3C7E4Tt_Mv8A9cjHlEyA7-FJi-FrgIjzpqnDZQMqLgQ&oe=64781D91",
      secondURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/314886331_564706005654651_7609928715771762162_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=G6IJ27btUY0AX_S6DEI&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfAUTzg8ItLV71tBaX1R-s3WE9shNNJyfWvLO_CsNkE4xQ&oe=64786A48",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/313337612_564706165654635_7029863057473138574_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QDmtcTDF_xcAX9RHGFL&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfDPsMbC72AnTFcx7VHch8P5gKg08Eh60a658j35-FtH6A&oe=64781A86",
      content: "Budujemy przyłącza wodno-kanalizacyjne!"
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/306968389_519980250127227_3469084998809029613_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pw7mNr9aMroAX9apO-f&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfAWD8vnCB-Oy3Mtw7qLtyzNLAxtlkesd7bO5z3IIPAF_g&oe=647845D0",
      secondURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/306937162_519980340127218_5566548039719440068_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fnOLOdLgDbUAX-SP107&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfDYlchDaPAqjncXbQmYQiQvz40vPBFyHfS8FoouTYoC2Q&oe=64780364",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/306922360_519980390127213_6116165328238555625_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z8dVyDKY_lAAX-Vr40i&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfBHUliYsemypu6-Ow1JlPPvGguwsgWaPKmHBUcep7RnjQ&oe=6478B884",
      content: "Przyłącze kanalizacyjne z odprowadzeniem do szczelnego zbiornika"
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/306233967_514243164034269_3462763302849617725_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tWV-FHyUSIQAX8Yzg2N&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfCg2M1MowOTiUj61T9RB73PkKpSnVd7TijrNiYUCactlQ&oe=6477A7F4",
      secondURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/281269497_549106393435030_2090449901508077929_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=auzvsaZ7zKsAX-4k5yV&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfAfFd9g3cY3WRdWGHYwdl7Lj3bCHhB3Z1LMaWGq1n55_w&oe=6477BCE1",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/281153910_549106463435023_8381773666295755572_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CzU9K3k8-DEAX9qm9ld&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfCb2VUSStsEgOomZXiN_hMPwsfgeyFYOFUN7O3pQvl1vA&oe=647795AC",
      content: "Odkrywka starszych fundamentów pod izolację i kabel energetyczny"
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/279222123_532566158422387_3834304354406565355_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_QsVc0Nue1cAX8zbMUt&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfBWdtjjNbr4rdlWOHNra_pd8k_HyLw4CEPn41jMgdosZQ&oe=64776DFD",
      secondURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/279253270_532566305089039_401808905247205343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JH2qv8Dc3HMAX80Sz4X&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfA5d_Fl9XdxPDj9eTUGtJ1fg3nMbhL5CR2HAFdGl7Yaig&oe=647884AD",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/279241166_532566358422367_5670521076611961341_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JEltYRJ-hk4AX-Gj_ut&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfBoAUtLqQSHMVdFrZFrOoMf80yEHNmoscIzHLz9xNgAKg&oe=6477ABDC",
      content: "Prace kompleksowe przy rozpoczęciu budowy"
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/277159879_510604373951899_7177339088011984096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SbFWlRQ3098AX8w3Jae&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfAK-PGNG9ekTepvEEVs9M7ccc1DPsLvaTtH24cK6wtM2w&oe=6477E5CE",
      secondURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/276266537_510603667285303_237092497879680740_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ml9rBG-hap8AX9ZfoPJ&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfDzW7qkx3HfkTFZ11MuZ-Z78hxZGABOEhKGiu2nCdNM-w&oe=6477BD53",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/277161302_510604317285238_1560363241956909232_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fXS8IMhFlrIAX98An_Q&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfDBe8a-6sFjcEb8aQfPuH7lQA9h6qAssep_jmn5DYqpHw&oe=64783AAC",
      content: "Budowa podjazdu"
    },
    {
      id: nanoid(),
      firstURL: "https://scontent.fwaw3-2.fna.fbcdn.net/v/t39.30808-6/274099952_488438279501842_3700059608082108559_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ljQptClLEGkAX89BIyh&_nc_ht=scontent.fwaw3-2.fna&oh=00_AfCLyCyrU0I8WIM8N91DdT3ULguqAeNfX3UdOsyxdyBwWQ&oe=6477B4E5",
      secondURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/274092754_488438352835168_3667788182365956252_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9iX8s_aJSDQAX-3JXtc&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfC3RSqSpSxKpz5TyM3KePEfvTvb-hUACxWBLKjEyp5XpQ&oe=6477C1BE",
      thirdURL: "https://scontent.fwaw3-1.fna.fbcdn.net/v/t39.30808-6/274092055_488438426168494_448910910979303178_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=B4iJHNvn_48AX_Ny0OT&_nc_ht=scontent.fwaw3-1.fna&oh=00_AfAj-12nBwfyjoayuxyGETeWTEqaZzAYM0RG0pcyYBmSFw&oe=647758F8",
      content: "Instalacja gazowa i przygotowanie terenu pod ogród"
    },
  ]