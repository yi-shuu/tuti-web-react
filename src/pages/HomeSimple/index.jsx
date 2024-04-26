import React, {
    useState,
    useEffect,
} from "react";
import {
    Heading,
    HStack,
    VStack,
    Text,
    Box,
    Image,
    Spacer,
    Button,

} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Drawer } from "../../components/Buttons/Drawer";
import { Popover } from "../../components/Buttons/Popover";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (screenWidth < 768) {
        return (
            <>
                <HStack>
                    <VStack marginTop={5}>
                        <Drawer
                            triggerButtonText=""
                            header="Menu"
                        >
                            <VStack>
                                <Link to="/company">
                                    <Text lineHeight={10} cursor="pointer" _hover={{ backgroundColor: "gray.100", padding: "1px 10px" }} rounded='md'>公司</Text>
                                </Link>
                                <Link to="/*">
                                    <Text lineHeight={10} cursor="pointer" _hover={{ backgroundColor: "gray.100", padding: "1px 10px" }} rounded='md'>工作</Text>
                                </Link>
                                <Link to="/*">
                                    <Text lineHeight={10} cursor="pointer" _hover={{ backgroundColor: "gray.100", padding: "1px 10px" }} rounded='md'>大学</Text>
                                </Link>
                                <Link to="/*">
                                    <Text lineHeight={10} cursor="pointer" _hover={{ backgroundColor: "gray.100", padding: "1px 10px" }} rounded='md'>社区</Text>
                                </Link>
                                <Link to='/*'>
                                    <Text lineHeight={10} cursor="pointer" _hover={{ backgroundColor: "gray.100", padding: "1px 10px" }} rounded='md'>学习咖啡厅</Text>
                                </Link>
                            </VStack>
                        </Drawer>
                    </VStack>
                    <VStack justify='center' align='center' marginLeft={14} flex={1} marginTop={4}>
                        <Image
                            src={require("../../assets/tuti.png")}
                            fallbackSrc="https://via.placeholder.com/48"
                            width="100px"
                            objectFit="cover"
                            alt="logo"
                        />
                    </VStack>
                    <VStack marginTop={5}>
                        <Popover
                            header="Contact Us"
                            triggerButtonText="Contact Us">
                            <HStack justify="center">
                                <VStack align="start" spacing={3}>
                                    <CustomHeading image={require("../../assets/instagram.png")} imageSize="20px" text="Instagram" url="https://www.instagram.com/tuti_platform/" />
                                    <CustomHeading image={require("../../assets/kakaologo.png")} imageSize="20px" text="KakaoTalk" url="https://pf.kakao.com/_jXxdxmG" />
                                    <CustomHeading image={require("../../assets/line.png")} imageSize="20px" text="Line" url="https://pf.kakao.com/_jXxdxmG" />
                                    <CustomHeading image={require("../../assets/wechat.png")} imageSize="20px" text="WeChat" url="https://pf.kakao.com/_jXxdxmG" />
                                </VStack>
                            </HStack>
                        </Popover>
                    </VStack>
                </HStack>
                <div style={{ width: '100%', height: '25px', marginTop: '20px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to="/">
                        <Text fontSize='sm' marginRight={3} cursor="pointer" _hover={{ textDecoration: "underline" }} style={{ lineHeight: '25px' }}>한국어</Text>
                    </Link>
                    <Link to="/jp">
                        <Text fontSize='sm' marginRight={3} cursor="pointer" _hover={{ textDecoration: "underline" }} style={{ lineHeight: '25px' }}>日本語</Text>
                    </Link>
                    <Link to="/en">
                        <Text fontSize='sm' marginRight={5} cursor="pointer" _hover={{ textDecoration: "uenne" }} en={{ lineHeight: '25px' }}>English</Text>
                    </Link>
                </div>
                <div style={{ marginTop: "70px" }}>
                    <VStack>
                        <Text fontWeight="bold" fontSize={24}>您想成为未来的全球领导者吗？</Text>
                        <Text fontSize={16} lineHeight="1.0">大学生们，你们准备好在世界舞台上大放异彩了吗？</Text>
                        <Text fontSize={16} lineHeight="1.0">Tuti创新的人工智能教育平台将帮助您成为全球人才。</Text>
                        <Text fontSize={16} lineHeight="1.0">它是重生的最佳伴侣。立即联系我们！</Text>
                    </VStack>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <VStack>
                        <Text fontWeight="bold" fontSize={22}>您准备好注册了吗？</Text>
                    </VStack>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <VStack>
                        <ExternalLinkButton url="https://forms.gle/aB26KV4AiKn332cz7" text="Apply now" textSize='sm' />
                    </VStack>
                </div>
                <div style={{ width: '100%', marginTop: "90px", display: "flex", justifyContent: 'center' }}>
                    <VStack>
                        <HStack spacing={3} marginLeft={5}>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#交换学生</Text>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#实习</Text>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#全球交流</Text>
                        </HStack>
                        <HStack spacing={3} marginLeft={5}>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#职业探索</Text>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#强化简历</Text>
                            <Text fontWeight="bold" color="gray.400" fontSize={16}>#国际服务</Text>
                        </HStack>
                    </VStack>
                </div>
                <div style={{ marginTop: "100px", display: "flex" }}>
                    <Text fontWeight="bold" fontSize={24} marginLeft={5}>去韩国留学</Text>
                </div>
                <div>
                    <VStack>
                        <HStack marginLeft={10} marginTop={6} spacing={5}>
                            <VStack>
                                <a href="https://www.hanyang.ac.kr/web/eng" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/hanyang.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="140px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">HanYang</Text>
                            </VStack>
                            <VStack>
                                <a href="https://www.khu.ac.kr/eng/user/main/view.do" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/kyunghee.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="160px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold" marginTop={5}>KyungHee</Text>
                            </VStack>
                            <VStack>
                                <a href="https://admission-global.skku.edu/eng/index.html" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/skku.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="130px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight='bold' marginTop={3}>SungKyunKwan</Text>
                            </VStack>
                        </HStack>
                        <HStack marginLeft={10} marginTop={6} spacing={20}>
                            <VStack>
                                <a href="https://www.yonsei.ac.kr/en_sc/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/yonsei.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="120px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight='bold' marginTop={3}>YonSei</Text>
                            </VStack>
                            <VStack>
                                <a href="https://www.korea.edu/mbshome/mbs/en/index.do#none" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/korea.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="100px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight='bold'>Korea</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <Text fontWeight="bold" fontSize={24} marginLeft={5}>Events</Text>
                </div>
                <div>
                    <VStack>
                        <HStack marginLeft={2} marginTop={6} spacing={7} marginRight={2}>
                            <a href="https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109487&searchCategory1=600&searchCategory2=&searchCategory3=&searchField=all&searchDate=202404&weekSel=undefined&searchText=" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/moon.jpg")}
                                        fallbackSrc={require("../../assets/moon.jpg")}
                                        width="190px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">2024 창덕궁 달빛기행(상반기)</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 창덕궁</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.4.11 ~ 2024.6.2</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 (1부)19:10, 19:25, 19:30</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"} marginLeft={7}>(2부)20:00, 20:05, 20:10</Text>
                                </VStack>
                            </a>
                            <a href="https://www.k-illustrationfair.com/" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/seoul.jpg")}
                                        fallbackSrc={require("../../assets/seoul.jpg")}
                                        width="180px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">K-일러스트레이션페어 부산2024</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 부산 벡스코 제2전시장 4홀</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.7.26(금)~28(일)</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오전 11시 ~ 오후 6시</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.100"}>.</Text>
                                </VStack>
                            </a>
                        </HStack>
                        <HStack marginLeft={2} marginTop={6} spacing={7} marginRight={2}>
                            <a href="http://www.bba48.or.kr/" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/busan.jpg")}
                                        fallbackSrc={require("../../assets/busan.jpg")}
                                        width="180px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">부산연등회</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 송상현광장 및 부산시민공원 일원</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.4.26 ~ 2024.5.12</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오후 6시</Text>
                                    <Box p={2.5}></Box>
                                </VStack>
                            </a>
                            <a href="https://overseas.mofa.go.kr/pt-ko/brd/m_9320/view.do?seq=1345691" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/kpop.jpg")}
                                        fallbackSrc={require("../../assets/kpop.jpg")}
                                        width="180px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">2024 K-Pop 월드 페스티벌</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 리스본 박물관</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024년 6월 8일(토)</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오후 3시</Text>
                                    <Box p={4}></Box>
                                </VStack>
                            </a>

                        </HStack>
                    </VStack>
                </div>
                <div style={{ width: '100%', height: '250px', backgroundColor: "#184e77", marginTop: '100px' }}>
                    <Box paddingLeft={10} paddingTop={47}>
                        <HStack spacing={3}>
                            <Image
                                src={require("../../assets/medal.png")}
                                fallbackSrc="https://via.placeholder.com/48"
                                width="90px"
                                objectFit="cover"
                                alt="logo"
                            />
                            <VStack align='start'>
                                <Text color='white' fontSize={19} fontWeight="bold">Iqua Inc.</Text>
                                <HStack spacing={5}>
                                    <Text color='white' fontSize={16}>Company</Text>
                                    <Text color='white' fontSize={16}>Iqua Inc.</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Text color='white' fontSize={16}>Address</Text>
                                    <Text color='white' fontSize={16} marginLeft={5}>15, Teheran-ro 22-gil, Gangnam-gu, Seoul, Republic of Korea</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Text color='white' fontSize={16}>Phone</Text>
                                    <Text color='white' fontSize={16} marginLeft={7}>+82 10-7415-8850</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Box p={7}>
                    <HStack align="center" className="logo" spacing={7}>
                        <Image
                            src={require("../../assets/tuti.png")}
                            fallbackSrc="https://via.placeholder.com/48"
                            width="100px"
                            objectFit="cover"
                            alt="logo"
                        />
                        <HStack spacing={6}>
                            <Link to="/company">
                                <Text fontSize="lg" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                    公司
                                </Text>
                            </Link>
                            <Link to="/*">
                                <Text fontSize="lg" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                    工作
                                </Text>
                            </Link>
                            <Link to="/*">
                                <Text fontSize="lg" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                    大学
                                </Text>
                            </Link>
                            <Link to="/*">
                                <Text fontSize="lg" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                    社区
                                </Text>
                            </Link>
                            <Link to="/*">
                                <Text fontSize="lg" cursor="pointer" _hover={{ textDecoration: "underline" }}>
                                    学习咖啡厅
                                </Text>
                            </Link>
                        </HStack>
                        <Spacer />
                        <Popover
                            header="Contact Us"
                            triggerButtonText="Contact Us">
                            <HStack justify="center">
                                <VStack align="start" spacing={3}>
                                    <CustomHeading image={require("../../assets/instagram.png")} imageSize="20px" text="Instagram" url="https://www.instagram.com/tuti_platform/" />
                                    <CustomHeading image={require("../../assets/kakaologo.png")} imageSize="20px" text="KakaoTalk" url="https://pf.kakao.com/_jXxdxmG" />
                                    <CustomHeading image={require("../../assets/line.png")} imageSize="20px" text="Line" url="https://pf.kakao.com/_jXxdxmG" />
                                    <CustomHeading image={require("../../assets/wechat.png")} imageSize="20px" text="WeChat" url="https://pf.kakao.com/_jXxdxmG" />
                                </VStack>
                            </HStack>
                        </Popover>
                    </HStack>
                </Box>
                <div style={{ width: '100%', height: '25px', backgroundColor: '#f5f5f5', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to="/">
                        <Text marginRight={5} cursor="pointer" _hover={{ textDecoration: "underline" }}>한국어</Text>
                    </Link>
                    <Link to="/jp">
                        <Text marginRight={5} cursor="pointer" _hover={{ textDecoration: "underline" }}>日本語</Text>
                    </Link>
                    <Link to="/en">
                        <Text marginRight={10} cursor="pointer" _hover={{ textDecoration: "underline" }}>English</Text>
                    </Link>
                </div>
                <div style={{ marginTop: "80px" }}>
                    <VStack>
                        <Text fontWeight="bold" fontSize={32}>您想成为未来的全球领导者吗？</Text>
                        <Text fontSize={25} lineHeight="1.0">大学生们，你们准备好在世界舞台上大放异彩了吗？</Text>
                        <Text fontSize={25} lineHeight="1.0">Tuti创新的人工智能教育平台将帮助您成为全球人才。</Text>
                        <Text fontSize={25} lineHeight="1.0">它是重生的最佳伴侣。立即联系我们！</Text>
                    </VStack>
                </div>
                <div style={{ marginTop: "120px" }}>
                    <VStack>
                        <Text fontWeight="bold" fontSize={28}>您准备好注册了吗？</Text>
                    </VStack>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <VStack>
                        <ExternalLinkButton url="https://forms.gle/rmfDTTALSMHzTaEt8" text="现在申请" />
                    </VStack>
                </div>
                <div style={{ width: '100%', marginTop: "120px", display: "flex", justifyContent: 'center' }}>

                    <HStack spacing={10} marginLeft={5}>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#交换学生</Text>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#实习</Text>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#全球交流</Text>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#职业探索</Text>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#强化简历</Text>
                        <Text fontWeight="bold" color="gray.400" fontSize={19}>#国际服务</Text>
                    </HStack>

                </div>
                <div style={{ marginTop: "120px", display: "flex" }}>
                    <Text fontWeight="bold" fontSize={30} marginLeft={10}>去韩国留学</Text>
                </div>
                <div>
                    <VStack>
                        <HStack marginLeft={10} marginTop={6} spacing={16}>
                            <VStack>
                                <a href="https://www.hanyang.ac.kr/web/eng" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/hanyang.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="140px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">HanYang</Text>
                            </VStack>
                            <VStack>
                                <a href="https://www.khu.ac.kr/eng/user/main/view.do" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/kyunghee.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="180px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">KyungHee</Text>
                            </VStack>
                            <VStack>
                                <a href="https://admission-global.skku.edu/eng/index.html" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/skku.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="140px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">SungKyunKwan</Text>
                            </VStack>
                            <VStack>
                                <a href="https://www.yonsei.ac.kr/en_sc/" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/yonsei.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="140px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">YonSei</Text>
                            </VStack>
                            <VStack>
                                <a href="https://www.korea.edu/mbshome/mbs/en/index.do#none" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={require("../../assets/korea.png")}
                                        fallbackSrc="https://via.placeholder.com/48"
                                        width="105px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                </a>
                                <Text fontWeight="bold">Korea</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </div>
                <div style={{ marginTop: "120px" }}>
                    <Text fontWeight="bold" fontSize={30} marginLeft={10}>Events</Text>
                </div>
                <div>
                    <VStack>
                        <HStack marginLeft={10} marginTop={6} spacing={20}>
                            <a href="https://www.chf.or.kr/cont/view/fest/month/menu/210?thisPage=1&idx=109487&searchCategory1=600&searchCategory2=&searchCategory3=&searchField=all&searchDate=202404&weekSel=undefined&searchText=" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/moon.jpg")}
                                        fallbackSrc={require("../../assets/moon.jpg")}
                                        width="190px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">2024 창덕궁 달빛기행(상반기)</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 창덕궁</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.4.11 ~ 2024.6.2</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 (1부)19:20, 19:25, 19:30</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"} marginLeft={7}>(2부)20:00, 20:05, 20:10</Text>
                                </VStack>
                            </a>
                            <a href="https://www.k-illustrationfair.com/" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/seoul.jpg")}
                                        fallbackSrc={require("../../assets/seoul.jpg")}
                                        width="180px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={13} fontWeight="bold">K-일러스트레이션페어 부산2024</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 부산 벡스코 제2전시장 4홀</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.7.26(금)~28(일)</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오전 11시 ~ 오후 6시</Text>
                                    <Box p={2}></Box>
                                </VStack>
                            </a>
                            <a href="http://www.bba48.or.kr/" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/busan.jpg")}
                                        fallbackSrc={require("../../assets/busan.jpg")}
                                        width="190px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">부산연등회</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 송상현광장 및 부산시민공원 일원</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024.4.26 ~ 2024.5.12</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오후 6시</Text>
                                    <Box p={2.5}></Box>
                                </VStack>
                            </a>
                            <a href="https://overseas.mofa.go.kr/pt-ko/brd/m_9320/view.do?seq=1345691" target="_blank" rel="noopener noreferrer">
                                <VStack align="start">
                                    <Image
                                        src={require("../../assets/kpop.jpg")}
                                        fallbackSrc={require("../../assets/kpop.jpg")}
                                        width="190px"
                                        objectFit="cover"
                                        alt="logo"
                                    />
                                    <Text fontSize={14} fontWeight="bold">2024 K-Pop 월드 페스티벌</Text>
                                    <Text fontSize={12} lineHeight={3} fontWeight="bold" color={"gray.400"}>장소 리스본 박물관</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>기간 2024년 6월 8일(토)</Text>
                                    <Text fontSize={12} lineHeight={1} fontWeight="bold" color={"gray.400"}>시간 오후 3시</Text>
                                    <Box p={4}></Box>
                                </VStack>
                            </a>

                        </HStack>
                    </VStack>
                </div>
                <div style={{ width: '100%', height: '280px', backgroundColor: "#184e77", marginTop: '100px' }}>
                    <Box paddingLeft={10} paddingTop={62}>
                        <HStack spacing={6}>
                            <Image
                                src={require("../../assets/medal.png")}
                                fallbackSrc="https://via.placeholder.com/48"
                                width="100px"
                                objectFit="cover"
                                alt="logo"
                            />
                            <VStack align='start'>
                                <Text color='white' fontSize={23} fontWeight="bold">Iqua Inc.</Text>
                                <HStack spacing={8}>
                                    <Text color='white' fontSize={22}>Company</Text>
                                    <Text color='white' fontSize={22}>Iqua Inc.</Text>
                                </HStack>
                                <HStack spacing={12}>
                                    <Text color='white' fontSize={22} >Address</Text>
                                    <Text color='white' fontSize={22}>15, Teheran-ro 22-gil, Gangnam-gu, Seoul, Republic of Korea</Text>
                                </HStack>
                                <HStack spacing={14}>
                                    <Text color='white' fontSize={22} >Phone</Text>
                                    <Text color='white' fontSize={22}>+82 10-7415-8850</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                </div>

            </>
        )
    }
}

const handleLinkClick = (url) => {
    window.open(url, "_blank");
};

const CustomHeading = ({ image, imageSize, text, url }) => {
    const handleClick = () => {
        handleLinkClick(url);
    };

    return (
        <HStack spacing={2} cursor="pointer" onClick={handleClick}>
            <Image src={image} alt={text} boxSize={imageSize} />
            <Heading fontSize="xl">{text}</Heading>
        </HStack>
    );
};

const ExternalLinkButton = ({ url, text }) => {
    const handleClick = () => {
        handleLinkClick(url);
    }

    return (
        <Button onClick={handleClick} colorScheme='green' size='lg'>{text}</Button>
    );
}
export default Home;