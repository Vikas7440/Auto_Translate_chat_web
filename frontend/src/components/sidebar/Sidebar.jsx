import React from 'react';
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import Side from "./Side";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col w-full md:w-1/4'>
			<Side />
			<SearchInput />
			<div className='divider px-3 my-4'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
