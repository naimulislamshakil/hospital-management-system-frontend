import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { errorToast } from '../lib/toast';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { Button, Layout } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Home = () => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const { Header, Sider, Content } = Layout;

	const {
		data: results,
		error,
		isLoading,
		refetch,
		remove,
	} = useQuery({
		queryKey: 'get',
		queryFn: async () => {
			axios.defaults.withCredentials = true;
			const res = await axios.get(
				'http://localhost:5000/api/v1/user/current_user'
			);

			return res.data;
		},
	});

	const {
		data: accessResults,
		error: accessError,
		isLoading: accessLoading,
		mutate,
		reset,
	} = useMutation({
		queryKey: 'get',
		queryFn: async () => {
			axios.defaults.withCredentials = true;
			const res = await axios.post(
				'http://localhost:5000/api/v1/user/refresh_token'
			);

			return res.data;
		},
	});

	console.log({ results, isLoading });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (results?.success === false) {
		mutate();
		// clear();
	}

	// if (!results) {
	// 	navigate('/login');
	// }

	console.log({ accessError, accessLoading, accessResults });

	if (accessResults?.success === false) {
		navigate('/login');
		errorToast(accessResults?.error);
		// clear();
	}

	return (
		<div>
			<Layout>
				<Sider
					className="sidebar"
					collapsible
					collapsed={collapsed}
					trigger={null}
				>
					<Logo />
					<MenuList />
				</Sider>
				<Layout>
					<Header
						style={{
							padding: 0,
							background: 'var(--white)',
						}}
					>
						<div className="row">
							<div className="col">
								<div>
									<Button
										type="text"
										className="ml-[15px]"
										onClick={(e) => setCollapsed(!collapsed)}
										icon={
											collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
										}
									/>
								</div>
							</div>
							<div className="col">ashndgb</div>
						</div>
					</Header>
					<Content>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</div>
	);
};

export default Home;
