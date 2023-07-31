const postList = [
  {
    id: 1,
    title: "녹색 하나 찾아볼 수 없던 곳에 창업을 하다.",
    content: " 한 청년 사장 김성민은 녹색 산업에 대한 열정과 관심으로 '바다와 함께'라는 독특한 비전으로 녹색 창업을 시작했습니다. 그의 이야기는 지속 가능한 사업 모델과 창의적 사고의 중요성을 강조하며, 환경 보호와 더 나은 미래를 위한 노력을 이야기합니다. \n\n '바다와 함께'는 해양 쓰레기 문제와 해양 오염 문제를 해결하는 사업으로, 환경 친화적이고 지속 가능한 제품과 서비스를 제공합니다. 김성민 사장은 재생 가능한 자원을 사용하여 제품을 만들고, 분해 가능한 소재를 활용하여 자연을 보호하고 있습니다. \n\n 그러나 김성민 사장은 시작부터 쉽지 않았습니다. 초기 투자 유치와 사업 확장에 어려움을 겪었지만, 끈기와 비전으로 투자를 유치하고 사업을 성공시키는 데 성공했습니다. \n\n 김성민 사장은 소비자들의 인식과 태도 변화를 이끌어내는 데에도 주력했습니다. 녹색 산업의 개념과 제품의 환경적 이점을 소비자들에게 알리고, 더 나은 선택을 할 수 있도록 지원하고 있습니다. \n\n 마지막으로, 김성민 사장은 젊은 창업가들에게 혁신과 지속 가능성을 추구하도록 조언합니다. 녹색 산업은 미래를 이끄는 중요한 분야이며, 우리는 환경을 보호하고 더 나은 미래를 위해 노력해야 합니다. \n\n 김성민 사장의 '바다와 함께'라는 창업 이야기는 우리에게 큰 영감을 줍니다. 그의 녹색 창업은 현대 사회의 필요성을 반영하며, 더 나은 미래를 위한 희망과 열정을 안겨줍니다. 우리는 그의 사업이 지속적으로 성장하고, 녹색 산업의 선구자로서 더 많은 사람들에게 영감을 전할 수 있기를 기대합니다.",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
    createDate: "20 / 08 / 25",
    readCount: 6,
  },
  {
    id: 2,
    title: "What’s in my bag? do they harm the earth ",
    content: "두번째 게시글 내용입니다.",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
    createDate: "20 / 09 / 01",
    readCount: 5,
  },
  {
    id: 3,
    title: "이 물건을 구매하면 놀라운 변화가 일어난다고?",
    content: "세번째 게시글 내용입니다.",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
    createDate: "21 / 02 / 11",
    readCount: 1,
  },
  {
    id: 4,
    title: "최초 인플루언서 창업자의 등장",
    content: "최초 인플루언서 창업자의 등장",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
    createDate: "21 / 03 / 04",
    readCount: 2,
  },
  {
    id: 5,
    title: "인체에 무해한 독성 식물 바디 워시 제품",
    content: "인체에 무해한 독성 식물 바디 워시 제품",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
    createDate: "20 / 08 / 25",
    readCount: 4,
  },
  {
    id: 6,
    title: "벌레 먹은 목화솜의 재발견",
    content: "여섯번째 게시글 내용입니다.",
    sub: "The greatest glory in living lies not in never falling, but in rising every time we fall. \n – Nelson Mandela",
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
