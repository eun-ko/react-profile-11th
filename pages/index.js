import React, { useState } from "react";
import ProfileCard, { Prop } from "../src/components/profile-card";
import styled from "styled-components";
import { render } from "react-dom";
const profiles = [
	{
		id: 1,
		name: "박효진",
		age: 23,
		role: "개발 파트장",
		univ: "이화여자",
		major: "컴퓨터공학",
		phoneNum: "010-5106-6785",
		email: "gywls517@gmail.com",
		githubLink: "https://github.com/gywlsp",
		imageUrl:
			"https://static.wixstatic.com/media/69e8c2_982cbc3d638e49889d8ba64b3c70a6e3~mv2.jpeg/v1/crop/x_199,y_0,w_543,h_560/fill/w_350,h_347,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8E%E1%85%AC%E1%84%92%E1%85%AD%E1%84%8C%E1%85%B5%E1%86%AB.webp"
	},
	{
		id: 2,
		name: "양병훈",
		age: 25,
		univ: "서강",
		role: "운영 팀원",
		major: "컴퓨터공학",
		phoneNum: "010-8200-1760",
		email: "ybh1760@gmail.com",
		githubLink: "https://github.com/ybh1760",
		imageUrl:
			"https://static.wixstatic.com/media/69e8c2_3de533d9d5ee4bbaa5fe0c360e8f6a23~mv2.jpeg/v1/crop/x_0,y_456,w_3024,h_3119/fill/w_351,h_347,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%87%E1%85%A7%E1%86%BC%E1%84%92%E1%85%AE%E1%86%AB.webp"
	},
	{
		id: 3,
		name: "이수완",
		age: 22,
		univ: "이화여자",
		role: "홍보 파트장",
		major: "컴퓨터공학",
		phoneNum: "010-5503-7994",
		email: "2swan965@gmail.com",
		githubLink: "https://github.com/lee-soowan65",
		imageUrl:
			"https://static.wixstatic.com/media/982853_a188a89325cb4a20b6a487f7e3de5d14~mv2.jpg/v1/crop/x_13,y_1126,w_2998,h_2829/fill/w_351,h_335,al_c,q_80,usm_0.66_1.00_0.01/4A2633DE-3322-4CDC-8F8C-35288D83C43B-500.webp"
	},
	{
		id: 4,
		name: "최수민",
		age: 26,
		univ: "서강",
		role: "부회장",
		major: "컴퓨터공학",
		phoneNum: "010-4413-1261",
		email: "react@kakao.com",
		githubLink: "https://github.com/greatSumini",
		imageUrl:
			"https://static.wixstatic.com/media/69e8c2_43446e9ac65e4f129083516175259a2b~mv2.jpeg/v1/crop/x_0,y_910,w_3024,h_3122/fill/w_347,h_351,al_c,q_80,usm_0.66_1.00_0.01/%E1%84%8E%E1%85%AC%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%86%AB.webp"
	}
];

export default function Home() {
	let List = profiles.map((prop) => (
		<Prop
			id={prop.id}
			name={prop.name}
			age={prop.age}
			role={prop.role}
			univ={prop.univ}
			major={prop.major}
			phoneNum={prop.phoneNum}
			email={prop.email}
			githubLink={prop.githubLink}
			imageUrl={prop.imageUrl}
		/>
	));

	//return <div>{List}</div>;//4개한번에 다나옴.
	//const [id_1, id1] = useState(List[0]);
	//const [id_2, id2] = useState(List[1]);
	//const [id_3, id3] = useState(List[2]);
	//const [id_4, id4] = useState(List[3]);

	return (
		<Bg>
			<Subject>CEOS 프론트엔드 운영진</Subject>

			<Wrapper>{List[0]}</Wrapper>

			<Wrapper>{List[1]}</Wrapper>

			<Wrapper>{List[2]}</Wrapper>
			<Wrapper>{List[3]}</Wrapper>
		</Bg>
	);
}

const Wrapper = styled.div`
	width: 45%;
	background-color: rgb(255, 255, 255);
	margin-bottom: 20px;
	border-image: initial;
	padding: 15px;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(204, 204, 204);
	border-radius: 15px;
`;
const Subject = styled.div`
	font-size: 28px;
	margin-bottom: 20px;
	width: 100%;
`;

const Bg = styled.div`
	background-color: rgb(230, 255, 255);
	padding: 50px 100px;
	display: flex;
	flex-direction: row;
	min-height: 100%;
	justify-content: space-between;
	flex-wrap: wrap;
`;
