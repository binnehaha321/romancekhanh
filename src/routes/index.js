import {
  Homepage,
  Contact,
  Activities,
  Aboutus,
  Piano,
  Organ,
  Guitar,
  Vocal,
} from "~/pages";

const routes = [
  { path: "/", component: Homepage },
  // { path: "/khoa-hoc", component: null },
  { path: "/khoa-hoc/piano", component: Piano },
  { path: "/khoa-hoc/organ", component: Organ },
  { path: "/khoa-hoc/guitar", component: Guitar },
  { path: "/khoa-hoc/thanh-nhac", component: Vocal },
  { path: "/ve-chung-toi", component: Aboutus },
  { path: "/hoat-dong", component: Activities },
  { path: "/lien-he", component: Contact },
];

export default routes;
