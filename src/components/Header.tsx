import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import logoIgnite from '../assets/logo-ignite.svg';

export function Header() {
	return (
		<header className="flex justify-between items-center">
			<img src={logoIgnite} alt="" />

			<nav className="flex gap-2">
				<NavLink
					to="/"
					title="Timer"
					className={({ isActive }) =>
						`navLink ${isActive ? 'text-green-500' : 'text-gray-100'}`
					}
				>
					<Timer size={24} />
				</NavLink>
				<NavLink
					to="history"
					title="Histórico"
					className={({ isActive }) =>
						`navLink ${isActive ? 'text-green-500' : 'text-gray-100'}`
					}
				>
					<Scroll size={24} />
				</NavLink>
			</nav>
		</header>
	);
}
