'use client';

import React from 'react';
import { Layout, Menu, Button, Carousel, Card, Row, Col, Typography } from 'antd';
import { ShoppingOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
import dynamic from "next/dynamic";
const ProductList = dynamic(() => import('product/ProductList'), {
    ssr: false,
    loading: () => <p>Loading Products...</p>
});

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const Home = () => {
    const menuItems = [
        { key: '1', label: 'Women' },
        { key: '2', label: 'Men' },
        { key: '3', label: 'Jewelery' },
    ];

    const carouselItems = [
        { key: 1, title: 'Women Collection', price: '$89.99', image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
        { key: 2, title: 'Men Collection', price: '$79.99', image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' },
        { key: 3, title: 'Kids Collection', price: '$69.99', image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg' },
    ];

    return (
        <Layout>
            <div className="bg-blue-600 text-white text-center py-2 text-sm">Free delivery on orders above $50</div>

            <Header className="flex justify-between items-center bg-white p-4 border-b border-gray-200">
                <MenuOutlined className="text-lg md:hidden cursor-pointer" />
                <Menu mode="horizontal" className="hidden md:flex flex-grow justify-center border-none" items={menuItems} />
                <div className="flex gap-4 text-lg">
                    <SearchOutlined />
                    <ShoppingOutlined />
                </div>
            </Header>

            <Content className="max-w-6xl mx-auto p-6">
                <Row className="flex flex-col md:flex-row items-center my-10">
                    <Col xs={24} md={12} className="text-center md:text-left">
                        <Title level={2} className="text-2xl font-bold">Explore Fresh Cosmetic Arrivals!</Title>
                        <Text className="block text-gray-600">Discover Fresh Makeup, Skincare, and Beauty Products to Elevate Your Routine!</Text>
                        <Button type="primary" className="mt-4">Shop now</Button>
                    </Col>
                    <Col xs={24} md={12} className="flex justify-center">
                        <div className="relative w-full h-72">
                            <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Hero" layout="fill" objectFit="cover" />
                        </div>
                    </Col>
                </Row>

                <Row className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                    {["Exclusive Offer", "Newsletter", "Hassle-Free Shopping"].map((title, index) => (
                        <Col key={index} className="bg-white p-4 shadow rounded-lg text-center">
                            <Title level={4}>{title}</Title>
                            <Text className="block text-gray-600">{title === "Exclusive Offer" ? 'Save 5% with Code "NEW5"' : title === "Newsletter" ? 'Enjoy 15% Off Your Next Beauty Purchase!' : '60 Days of Free Returns'}</Text>
                        </Col>
                    ))}
                </Row>

                <Title level={3} className="text-xl font-semibold my-6">Collections</Title>
                <Row className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Affordable Collection (Under $25)", "Mid-Range Collection ($25 - $100)", "Premium Collection (Over $100)"].map((category) => (
                        <Col key={category} className="bg-white p-4 shadow rounded-lg">
                            <div className="relative h-52">
                                <Image src="/placeholder.png" alt={category} layout="fill" objectFit="cover" />
                            </div>
                            <Title level={5} className="mt-2 text-center">{category} Collection</Title>
                        </Col>
                    ))}
                </Row>

                <Title level={3} className="text-xl font-semibold my-6">Similar Products</Title>
                <Carousel autoplay slidesToShow={4} dots={true}>
                    {carouselItems.map((item) => (
                        <div key={item.key} className="text-center p-4">
                            <Card className="shadow-md p-4 rounded-lg">
                                <div className="relative h-40">
                                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                                </div>
                                <Title level={5} className="mt-2">{item.title}</Title>
                                <Text className="text-gray-600">{item.price}</Text>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </Content>

            <Footer className="text-center p-6 bg-gray-200 mt-10">© 2024 Your Store. All rights reserved.</Footer>
            <ProductList/>
        </Layout>
    );
};

export default Home;
