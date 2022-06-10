import * as C from './styles';
import React, {useEffect, useState} from 'react';
import {ProductItemHome} from '../../components/ProductItemHome';
import {api} from '../../api';
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { Item } from './../../types/Item'
import { setItems } from '../../redux/reducers/itemsReducer';


export const Home = () => {
	const items = useAppSelector(state => state.itemsReducer.items);;
	const [filtItems, setFiltItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [enableScroll, setEnableScroll] = useState(true);
	
	const dispatch = useAppDispatch();
	const inputText = useAppSelector(state => state.homeSearchInputReducer);

	
	useEffect(() => {
		const requestItems = async () => {
			setLoading(true);
			let json: Item[] = await api.getItems();
			if (json) {
				dispatch(setItems(json))
				setFiltItems(json);
			}
			setLoading(false);
		};
		requestItems();			
	}, []);
  
    
    useEffect(() => {
		if (inputText.inputText == '') {
			setFiltItems(items);
		} else {
			setFiltItems(
				items.filter((item: Item) => (item.title.toLowerCase().indexOf(inputText.inputText.toLowerCase()) > -1))
			);
		}
    }, [inputText.inputText])
	


	return (
		<C.Container>
			{loading && <C.TextField>Loading...</C.TextField>}
			{!loading &&  (
			<>
				<C.Items
				data={filtItems}
				numColumns={2}
				renderItem = {({item, index}) => ( 
					<ProductItemHome 
						item={item}
						index={index}
						setEnableScroll={setEnableScroll}
					/> 
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 16 }}
				scrollEnabled={enableScroll}
				/>
			</>
			)}
		</C.Container>
	);

};
