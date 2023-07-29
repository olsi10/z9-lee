const postList = [
  {
    id: 1,
    title: "녹색 하나 찾아볼 수 없던 곳에 창업을 하다.",
    content: "첫번째 게시글 내용입니다.",
    createDate: "20 / 08 / 25",
    readCount: 6,
  },
  {
    id: 2,
    title: "What’s in my bag? do they harm the earth ",
    content: "두번째 게시글 내용입니다.",
    createDate: "20 / 09 / 01",
    readCount: 5,
  },
  {
    id: 3,
    title: "이 물건을 구매하면 놀라운 변화가 일어난다고?",
    content: "세번째 게시글 내용입니다.",
    createDate: "21 / 02 / 11",
    readCount: 1,
  },
  {
    id: 4,
    title: "최초 인플루언서 창업자의 등장",
    content: "최초 인플루언서 창업자의 등장",
    createDate: "21 / 03 / 04",
    readCount: 2,
  },
  {
    id: 5,
    title: "인체에 무해한 독성 식물 바디 워시 제품",
    content: "인체에 무해한 독성 식물 바디 워시 제품",
    createDate: "20 / 08 / 25",
    readCount: 4,
  },
  {
    id: 6,
    title: "벌레 먹은 목화솜의 재발견",
    content: "여섯번째 게시글 내용입니다.",
    createDate: "20 / 08 / 25",
    readCount: 4,
  },
];

const getPostByNo = (id) => {
  const array = postList.filter((x) => x.id == id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { postList, getPostByNo };
