import { piano, organ, guitar, vocal } from "~/images";

const courses = [
  {
    id: 1,
    course: "Piano",
    image: piano,
    description:
      "Dương cầm (tiếng Anh: piano) là một nhạc cụ sử dụng bộ dây phím tạo ra âm thanh, rất phổ biến và được ưa chuộng trên toàn thế giới.",
    price: "5.200.000đ",
    path: "/piano",
  },
  {
    id: 2,
    course: "Organ",
    image: organ,
    description:
      "Đàn Organ là cách gọi thông thường của Đàn phím điện tử tại Việt Nam. Cách gọi này dễ gây nhầm lẫn với đàn Đại phong cầm, tức là loại đàn Organ rất lớn với hệ thống nhiều ống sáo khổng lồ liên kết với đàn, thường chỉ sử dụng trong nhà thờ.",
    price: "5.200.000đ",
    path: "/organ",
  },
  {
    id: 3,
    course: "Guitar",
    image: guitar,
    description:
      "Guitar, còn được biết đến dưới tên gọi Tây Ban cầm, vốn xuất xứ là một nhạc cụ có cách đây hơn 500 năm, sau này người Tây Ban Nha mới cải tiến nó thành đàn guitar ngày nay. Đàn guitar trước kia chỉ vỏn vẹn có 1 dây, ngày nay có 6 dây.",
    price: "5.200.000đ",
    path: "/guitar",
  },
  {
    id: 4,
    course: "Thanh nhạc",
    image: vocal,
    description:
      "Thanh nhạc là kiểu nhạc với yếu tố chủ chốt nhất là giọng hát của ca sĩ - thuộc phần trung âm của bài nhạc. Ở đây, giọng hát của ca sĩ được xem là nhạc cụ chính của bản nhạc. Thanh nhạc có thể được một hoặc nhiều ca sĩ thể hiện, hát chỉ dùng giọng hát hoặc có phần đệm của nhạc cụ.",
    price: "5.200.000đ",
    path: "/thanh-nhac",
  },
];

export default courses;
