import { FaFlag, FaLightbulb, FaBrain } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

const milestones = [
  {
    id: 1,
    level: "begin",
    vneseLevel: "Bắt đầu",
    icon: <FaFlag />,
    duration: "+3",
    description: "Bước đầu làm quen với nốt nhạc, nhịp và phách",
  },
  {
    id: 2,
    level: "basic",
    vneseLevel: "Cơ bản",
    icon: <AiFillSetting />,
    duration: "+3",
    description: "Tìm hiểu rộng hơn về các ký hiệu trên một bản nhạc (sheet)",
  },
  {
    id: 3,
    level: "know",
    vneseLevel: "Biết chơi",
    icon: <FaLightbulb />,
    duration: "+3",
    description: "Có thể đọc sheet và chơi theo một cách dễ dàng",
  },
  {
    id: 4,
    level: "understand",
    vneseLevel: "Thành thạo",
    icon: <FaBrain />,
    duration: "+9",
    description: "Phá cách và sáng tạo hơn trong phong cách chơi của bản thân",
  },
];

export default milestones;
