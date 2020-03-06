import React, { Component, useState } from "react";
import { render } from "react-dom";
import "./Styles/test.css";
// import './Styles/index.css';
import { Menu, Icon, Input } from "antd";

const { SubMenu } = Menu;

const Nav = () => {
	return (
		<Menu mode="horizontal">
			<Menu.Item key="mail">
				<Icon type="mail" />
				Navigation One
			</Menu.Item>
			<Menu.Item key="app" disabled>
				<Icon type="appstore" />
				Navigation Two
			</Menu.Item>
			<SubMenu
				title={
					<span className="submenu-title-wrapper">
						<Icon type="setting" />
						Navigation Three - Submenu
					</span>
				}
			>
				<Menu.ItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<Menu.Item key="alipay">
				<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
					Navigation Four - Link
				</a>
			</Menu.Item>
		</Menu>
	);
};

const LoginView = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<Input
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<Input.Password
				placeholder="password"
				visibilityToggle
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
	);
};

const App = () => (
	<>
		<Nav />
		<LoginView />
	</>
);

render(<App />, document.getElementById("root"));
