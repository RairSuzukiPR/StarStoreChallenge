import * as C from './styles';
import React, {useEffect, useState} from 'react';
import {ProductItem} from '../../components/ProductItem';
import {api} from '../../api';
import { useAppSelector } from "../../redux/hooks/useAppSelector";


type Item = {
	date: string;
	price: number;
	seller: string;
	thumbnailHd: string;
	title: string;
	zipcode: string;
	large?: boolean
};

export const Home = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [filtItems, setFiltItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const inputText = useAppSelector(state => state.homeSearchInputReducer);

	useEffect(() => {
		const requestItems = async () => {
			setLoading(true);
			let json: Item[] = await api.getItems();
			if (json) {
				setItems(json);
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
				//typar dps
				renderItem = {({item}) => ( 
					<ProductItem {...item}/> 
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 16 }}
				/>
			</>
			)}
		</C.Container>
	);

};
