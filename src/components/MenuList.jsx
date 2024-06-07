import {
	HomeOutlined,
	MedicineBoxOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';
import { Menu } from 'antd';
import React from 'react';
import {
	CampaignOutlined,
	EventNoteOutlined,
	MonetizationOnOutlined,
} from '@mui/icons-material';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuList = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Menu
			onClick={(Item) => {
				navigate(Item.key);
			}}
			className="text"
			defaultSelectedKeys={'/'}
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key="/" icon={<HomeOutlined />}>
				Dashboard
			</Menu.Item>

			<Menu.Item key="/dashboard/patients" icon={<Diversity1OutlinedIcon />}>
				Patients
			</Menu.Item>

			<Menu.SubMenu
				key="subReceptions"
				icon={<Diversity3OutlinedIcon />}
				title="Receptions"
			>
				<Menu.Item>sahghs</Menu.Item>
			</Menu.SubMenu>

			<Menu.SubMenu
				key="subDoctor"
				icon={<BabyChangingStationOutlinedIcon />}
				title="Doctors"
			>
				<Menu.Item>sahghs</Menu.Item>
			</Menu.SubMenu>

			<Menu.Item key="/dashboard/appointments" icon={<EventNoteOutlined />}>
				Appointments
			</Menu.Item>

			<Menu.Item key="/dashboard/payments" icon={<MonetizationOnOutlined />}>
				Payments
			</Menu.Item>

			<Menu.Item key="/dashboard/invoices" icon={<PriceCheckOutlinedIcon />}>
				Invoices
			</Menu.Item>
			<Menu.Item key="/dashboard/services" icon={<PhoneOutlinedIcon />}>
				Services
			</Menu.Item>
			<Menu.Item key="/dashboard/medicines" icon={<MedicineBoxOutlined />}>
				Medicine
			</Menu.Item>
			<Menu.Item key="/dashboard/campaings" icon={<CampaignOutlined />}>
				Campaings
			</Menu.Item>
			<Menu.Item key="/dashboard/settings" icon={<SettingOutlined />}>
				Settings
			</Menu.Item>
		</Menu>
	);
};

export default MenuList;
