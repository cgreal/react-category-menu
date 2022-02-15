import React from 'react';

const Categories = ({ categories, filterItems, activeMenuItem }) => {
	return (
		<div className="btn-container">
			{categories.map((category, index) => {
				return (
					<button
						type="button"
						className={`filter-btn ${ activeMenuItem === category ? 'active' : ''}`}
						key={index}
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
