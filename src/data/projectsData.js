const projectsData = [
  {
    id: 0,
    tech: ["TypeScript", "React", "Recoil", "React Query", "styled-components"],
    title: "Loca Weather",
    summary: "사용자의 위치 기반으로 실시간 날씨 정보와 오늘의 상세 날씨, 일주일간의 날씨 예보를 제공하는 웹페이지입니다.",
    date: "2024. 03.",
    github: "https://github.com/misobae",
    deployed: "https://misobae.github.io/LocaWeather/",
    blog: "https://velog.io/@baesmile/LocaWeather-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0",
    thumbSrc: `${process.env.PUBLIC_URL}/images/projects/project_locaweather_thumb.jpg`,
    imgSrc: `${process.env.PUBLIC_URL}/images/projects/project_locaweather_img.png`,
    featureTitle: [
      "사용자 위치에 기반한 날씨 정보 제공",
      "검색 기능",
      "즐겨찾기 기능",
      "데이터 시각화"
    ],
    featureDesc: [
      "브라우저의 Geolocation API를 사용해 사용자의 위치에 따른 날씨 정보를 출력했습니다.",
      "사용자가 검색한 도시를 기반으로 해당 도시의 날씨 데이터를 요청하는 함수를 호출해 검색 기능을 구현했습니다.",
      "Recoil을 사용해 즐겨찾는 도시를 추가하고, 다른 도시를 검색해 데이터가 변경되어도 Favorite List에서 다시 확인할 수 있도록 구현했습니다.",
      `ApexCharts.js를 사용해 주간 날씨 예보 데이터를 차트로 표현했습니다.
      CSS를 사용해 자외선 지수와 습도를 세미 도넛 차트, Range slider로 구현했습니다.`
    ],
  },
];

export default projectsData;