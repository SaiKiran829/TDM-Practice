import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "User Admin",
			icon: "icons/grid.svg",
		},
		{
			text: "Environment SetUp",
			icon: "icons/user.svg",
		},
		{
			text: "Test Data Preperation",
			icon: "icons/message.svg",
		},
		{
			text: "Data Anonymization",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "Data Quality Checks",
			icon: "icons/folder.svg",
		},
		{
			text: "Test Assertion",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Run Regression",
			icon: "icons/heart.svg",
		},
		{
			text: "DashBoard",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Tidium</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default SideNavBar;
