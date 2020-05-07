import React from "react";
import {SortableContainer} from 'react-sortable-hoc';

import SortableItem from "./SortableItem";

const SortableList = SortableContainer(({items}) => {
	return (
		<div>
			{items.map((value, index) => (
				<SortableItem key={`item-${index}`} index={index} value={value} />
			))}
		</div>
	);
});

export default SortableList;