import { FaFlag, FaLightbulb, FaBrain } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const milestones = [
  {
    id: 1,
    level: "begin",
    vneseLevel: "Bắt đầu",
    icon: <FaFlag />,
  },
  {
    id: 2,
    level: "basic",
    vneseLevel: "Cơ bản",
    icon: <AiFillSetting />,
  },
  {
    id: 3,
    level: "know",
    vneseLevel: "Biết chơi",
    icon: <FaLightbulb />,
  },
  {
    id: 4,
    level: "begin",
    vneseLevel: "Thành thạo",
    icon: <FaBrain />,
  },
];

export default milestones;
